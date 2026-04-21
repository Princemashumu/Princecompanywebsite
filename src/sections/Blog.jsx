import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';

function BlogCard({ post, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
    >
      <div className="h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400 hover:gap-2 transition-all"
          >
            Read <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Thoughts & Tutorials"
          subtitle="I write about web development, engineering practices, and lessons from real-world projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
