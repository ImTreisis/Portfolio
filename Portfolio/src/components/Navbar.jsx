import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [ ['about', 'About'], ['projects', 'Work'], ['contact', 'Contact'] ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .45 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-white/10 bg-[#0b0c0c]/90 backdrop-blur-xl' : 'border-transparent bg-[#0b0c0c]/60 backdrop-blur-sm'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" aria-label="Treisis Gakas, home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-[#f4e400] font-mono text-sm font-bold text-[#0b0c0c]">TG</span>
          <span className="font-mono text-xs font-bold uppercase tracking-[.14em] text-white">Treisis Gakas<span className="text-[#f4e400]">.</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([id, label], index) => <a key={id} href={`#${id}`} className="font-mono text-[.67rem] font-bold uppercase tracking-[.13em] text-white/55 transition hover:text-[#f4e400]"><span className="mr-2 text-white/25">0{index + 1}</span>{label}</a>)}
          <a href="/Treisis%20Gakas.pdf" download="Treisis_Gakas_CV.pdf" className="border border-white/20 px-4 py-2 font-mono text-[.62rem] font-bold uppercase tracking-wider text-white transition hover:border-[#f4e400] hover:text-[#f4e400]">Resume ↓</a>
        </div>
        <button type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/15 md:hidden">
          <span className={`h-px w-4 bg-[#f4e400] transition-transform ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`h-px w-4 bg-[#f4e400] transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>
      {menuOpen && <div className="border-t border-white/10 bg-[#0b0c0c] px-6 py-5 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          {navItems.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="font-mono text-xs font-bold uppercase tracking-[.14em] text-white/70"><span className="mr-3 text-[#f4e400]">0{index + 1}</span>{label}</a>)}
          <a href="/Treisis%20Gakas.pdf" download="Treisis_Gakas_CV.pdf" className="font-mono text-xs font-bold uppercase tracking-[.14em] text-[#f4e400]">Download resume ↓</a>
        </div>
      </div>}
    </motion.nav>
  );
};

export default Navbar;
