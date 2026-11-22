import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    number: '02', title: 'Growix', kind: 'Marketplace · Client project',
    description: 'A home for dance workshops: organisers publish sessions while dancers discover, save and book the ones they love.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://www.growix.lt/', code: 'https://github.com/ImTreisis/Growix', mark: 'G/',
  },
  {
    number: '03', title: 'WingSearch', kind: 'Travel · Web app',
    description: 'A flight-fare finder built to make comparing routes, keeping favourites and tracking travel options feel straightforward.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://wingsearch.vercel.app/', code: 'https://github.com/ImTreisis/WingSearch', mark: 'W↗',
  },
];

const ExternalLink = ({ href, children, className = '' }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<span aria-hidden="true"> ↗</span></a>
);

const Projects = () => (
  <SectionWrapper id="projects" className="!min-h-0 !py-28 md:!py-36">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
      <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="section-label mb-5">Selected work · 2024—26</p>
          <h2 className="display-title text-6xl md:text-8xl">Made to<br /><span className="text-white/35">work.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-[#aaa9a2]">A handful of products and experiments. Each one starts with a real problem and ends with something people can use.</p>
      </div>

      <article className="cut-corner relative mb-5 overflow-hidden border border-[#f4e400]/45 bg-[#f4e400] p-6 text-[#0b0c0c] md:p-10">
        <div className="absolute -right-8 -top-16 select-none font-[Barlow_Condensed] text-[20rem] font-black leading-none text-black/[.055]" aria-hidden="true">01</div>
        <div className="relative grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[.16em]">FEATURED / 01</span>
              <span className="border border-black/30 px-2 py-1 font-mono text-[.6rem] uppercase tracking-widest">Live</span>
            </div>
            <p className="mb-3 font-mono text-[.67rem] font-bold uppercase tracking-[.15em] text-black/55">Systems · Product build</p>
            <h3 className="display-title text-6xl md:text-8xl">SysManager</h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/70">A local-first Windows system monitor with a React dashboard and a Python agent running on your PC. Track CPU, memory, disk, network, GPU and running processes, with safeguards for stopping selected processes.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'PyInstaller'].map((tech) => <span key={tech} className="border border-black/20 px-2.5 py-1 font-mono text-[.6rem] text-black/70">{tech}</span>)}
              <span className="border border-black/20 px-2.5 py-1 font-mono text-[.6rem] text-black/70">Windows executable</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink href="https://sys-manager-nu.vercel.app/" className="inline-flex items-center bg-[#0b0c0c] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#f4f0e8] transition hover:bg-black/75">Open live project</ExternalLink>
              <ExternalLink href="https://github.com/ImTreisis/SysManager" className="inline-flex items-center border border-black/30 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition hover:bg-black/5">Source on GitHub</ExternalLink>
            </div>
          </div>
          <div className="min-w-0 border border-black/15 bg-black/[.045] p-3 sm:p-5">
            <div className="border border-white/10 bg-[#101311] p-4 text-[#f4f0e8] shadow-xl sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div><p className="font-mono text-[.62rem] font-bold uppercase tracking-[.12em]">SysManager</p><p className="mt-1 font-mono text-[.52rem] uppercase tracking-wider text-white/40">Local system overview</p></div>
                <span className="shrink-0 border border-[#f4e400]/35 px-2 py-1 font-mono text-[.5rem] font-bold uppercase tracking-wider text-[#f4e400]">Sample data</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-white/[.08] bg-white/[.035] p-3">
                  <div className="flex items-center justify-between"><span className="font-mono text-[.52rem] uppercase tracking-wider text-white/50">CPU</span><span className="h-1.5 w-1.5 rounded-full bg-[#f4e400]" /></div>
                  <p className="mt-2 font-mono text-xl font-bold">24<span className="text-sm text-white/50">%</span></p>
                  <div className="mt-2 h-1 bg-white/10"><div className="h-full w-[24%] bg-[#f4e400]" /></div>
                </div>
                <div className="border border-white/[.08] bg-white/[.035] p-3">
                  <div className="flex items-center justify-between"><span className="font-mono text-[.52rem] uppercase tracking-wider text-white/50">Memory</span><span className="h-1.5 w-1.5 rounded-full bg-[#69d5bd]" /></div>
                  <p className="mt-2 font-mono text-xl font-bold">8.4<span className="text-sm text-white/50"> GB</span></p>
                  <div className="mt-2 h-1 bg-white/10"><div className="h-full w-[53%] bg-[#69d5bd]" /></div>
                </div>
                <div className="border border-white/[.08] bg-white/[.035] p-3">
                  <span className="font-mono text-[.52rem] uppercase tracking-wider text-white/50">CPU temp</span>
                  <p className="mt-2 font-mono text-xl font-bold">49<span className="text-sm text-white/50">°C</span></p>
                </div>
                <div className="border border-white/[.08] bg-white/[.035] p-3">
                  <span className="font-mono text-[.52rem] uppercase tracking-wider text-white/50">GPU temp</span>
                  <p className="mt-2 font-mono text-xl font-bold">42<span className="text-sm text-white/50">°C</span></p>
                </div>
              </div>
              <div className="mt-3 border border-white/[.08] bg-white/[.025] px-3 py-2.5">
                <div className="mb-2 flex items-center justify-between font-mono text-[.5rem] uppercase tracking-wider text-white/45"><span>Top processes</span><span>CPU</span></div>
                <div className="space-y-2 font-mono text-[.57rem]"><div className="flex justify-between"><span className="text-white/75">browser.exe</span><span>9.2%</span></div><div className="flex justify-between"><span className="text-white/75">System</span><span>4.8%</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45 }} className="project-card cut-corner flex min-h-[360px] flex-col p-6 md:p-8">
            <div className="mb-12 flex items-start justify-between">
              <span className="project-index">PROJECT / {project.number}</span>
              <span className="font-mono text-3xl font-bold tracking-tighter text-white/20">{project.mark}</span>
            </div>
            <p className="mb-2 font-mono text-[.62rem] uppercase tracking-[.12em] text-[#aaa9a2]">{project.kind}</p>
            <h3 className="display-title text-5xl md:text-6xl">{project.title}</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#aaa9a2]">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => <span key={tech} className="border border-white/10 px-2.5 py-1 font-mono text-[.6rem] text-white/65">{tech}</span>)}
            </div>
            <div className="mt-auto flex gap-5 border-t border-white/10 pt-5 font-mono text-[.66rem] font-bold uppercase tracking-wider">
              <ExternalLink href={project.demo} className="text-[#f4e400] hover:text-white">Live site</ExternalLink>
              <ExternalLink href={project.code} className="text-white/60 hover:text-white">Source</ExternalLink>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Projects;
