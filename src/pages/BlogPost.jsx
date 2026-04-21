import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

// Minimal markdown-to-jsx renderer (handles ## headers, code blocks, paragraphs)
function renderMarkdown(md) {
  const lines = md.trim().split('\n');
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
      i++;
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
      i++;
    } else if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre
          key={key++}
          className="my-4 p-4 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-700 overflow-x-auto"
        >
          <code className="text-sm text-slate-100 font-mono">{codeLines.join('\n')}</code>
        </pre>
      );
    } else if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-3 space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm">{item}</li>
          ))}
        </ul>
      );
    } else if (line.trim() === '') {
      i++;
    } else {
      // Inline code in paragraphs
      const parts = line.split(/(`[^`]+`)/g);
      const content = parts.map((p, pi) =>
        p.startsWith('`') && p.endsWith('`') ? (
          <code key={pi} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-cyan-600 dark:text-cyan-400 text-sm">
            {p.slice(1, -1)}
          </code>
        ) : p
      );
      elements.push(
        <p key={key++} className="my-3 text-slate-600 dark:text-slate-400 leading-relaxed">
          {content}
        </p>
      );
      i++;
    }
  }

  return elements;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <>
      <Helmet>
        <title>{post.title} | Prince's Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        {/* Cover image */}
        <div className="w-full h-64 sm:h-80 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back link */}
            <Link
              to="/"
              onClick={() => setTimeout(() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-medium"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500 pb-6 border-b border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div className="mt-6">{renderMarkdown(post.content)}</div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                Enjoyed this post? Let's connect.
              </p>
              <Link
                to="/"
                onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
