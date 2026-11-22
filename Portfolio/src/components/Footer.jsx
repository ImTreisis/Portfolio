const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 font-mono text-[.6rem] uppercase tracking-[.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Treisis Gakas</p>
        <a href="#home" className="transition hover:text-[#f4e400]">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;

