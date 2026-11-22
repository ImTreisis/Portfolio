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
          <div className="relative hidden min-h-64 border border-black/15 bg-black/[.045] p-5 lg:block">
            <div className="flex justify-between border-b border-black/15 pb-3 font-mono text-[.62rem] uppercase tracking-wider text-black/55"><span>SYS / MANAGER</span><span>01.0.26</span></div>
            <div className="mt-8 flex items-end gap-2" aria-hidden="true">
              {[44, 70, 52, 86, 63, 100, 75, 92, 56, 79, 96, 67].map((height, index) => <div key={index} style={{ height: `${height}px` }} className={`flex-1 ${index === 5 ? 'bg-[#0b0c0c]' : 'bg-black/20'}`} />)}
            </div>
            <div className="mt-5 flex justify-between font-mono text-[.58rem] uppercase tracking-wider text-black/45"><span>Control the moving parts.</span><span>▲</span></div>
            <div className="absolute right-5 top-16 h-2 w-2 animate-pulse rounded-full bg-[#0b0c0c]" />
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
