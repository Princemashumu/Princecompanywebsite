import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Princemashumu' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prince-ngwako-mashumu-77977924b' },
  { icon: Mail, label: 'Email', href: 'mailto:princengwakomashumu@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Prince Ngwako Mashumu. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
