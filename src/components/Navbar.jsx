import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-cyan-600 dark:text-cyan-400 font-mono tracking-tight"
        >
          &lt;Prince Mashumu /&gt;
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <DarkModeToggle />
          <a
            href="https://1drv.ms/b/c/c29be3c60d57f1f4/IQBfnIl8SO1gSYZWkhHdQ2TcAa0PSbmYe37RrRQLMFVO6k8?e=uvB3Bs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://1drv.ms/b/c/c29be3c60d57f1f4/IQBfnIl8SO1gSYZWkhHdQ2TcAa0PSbmYe37RrRQLMFVO6k8?e=uvB3Bs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors w-fit"
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
