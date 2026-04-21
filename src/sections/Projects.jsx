import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { useGitHubStats } from "../hooks/useGitHubStats";
import SectionWrapper, { SectionHeading } from "../components/SectionWrapper";

const GITHUB_USERNAME = "Princemashumu";

function GitHubRepoCard({ repo, delay }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group block p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
          {repo.name}
        </h4>
        <GithubIcon size={15} className="shrink-0 text-slate-400 mt-0.5" />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
        {repo.description || "No description provided."}
      </p>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star size={11} /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={11} /> {repo.forks_count}
          </span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
          <ExternalLink size={11} /> View
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { repos, profile, loading } = useGitHubStats(GITHUB_USERNAME);

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="My GitHub Projects"
          subtitle="Live repositories pulled directly from my GitHub profile."
        />

        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-12 h-12 rounded-full border-2 border-cyan-400"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{profile.name || profile.login}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">@{profile.login}</p>
            </div>
            <div className="ml-auto flex items-center gap-6 text-center">
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{profile.public_repos}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Repos</p>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{profile.followers}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Followers</p>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:opacity-80 transition-opacity"
              >
                <GithubIcon size={14} /> View Profile
              </a>
            </div>
          </motion.div>
        )}

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-36 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <GitHubRepoCard key={repo.id} repo={repo} delay={i * 0.07} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            <GithubIcon size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">Could not load repositories. Try again later.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
