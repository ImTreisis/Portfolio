import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const timeline = [
  { year: 'Aug 2025 — now', title: 'Freelance full-stack engineer', company: 'Growix · client project', description: 'Building an online dance-workshop marketplace, from account flows and workshop publishing to favourites, search and ongoing product iterations.' },
  { year: 'Oct 2025', title: 'Software engineering internship', company: 'Lloyds Banking Group · 2 weeks', description: 'Delivered an Azure-hosted mortgage calculator, shared the work with stakeholders and iterated on feedback in a collaborative Git workflow.' },
  { year: 'Sep 2025', title: 'Front-end engineering internship', company: 'Skyscanner · 2 weeks', description: 'Built a React travel-date picker using Skyscanner’s library, shaped the interaction flows and added automated rendering tests.' },
  { year: '2022 — 2025', title: 'BSc Computer Science', company: 'City, University of London', description: 'Studied web development, algorithms and AI. Projects included a flight-fare tracker and a restaurant platform.' },
  { year: 'Sep — Oct 2022', title: 'Coding intern', company: 'City, University of London', description: 'Built a Java maze pathfinder and a personal finance tracker that visualised spending trends.' },
];

const skills = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Python', 'HTML & CSS', 'Git'];

const About = () => (
  <SectionWrapper id="about" className="!min-h-0 !py-28 md:!py-36">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
      <div className="mb-12 md:mb-16">
        <p className="section-label mb-5">A little context</p>
        <h2 className="display-title text-6xl md:text-8xl">Curious by<br /><span className="text-white/35">default.</span></h2>
      </div>

      <div className="mb-20 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div className="panel cut-corner p-7 md:p-10">
          <p className="eyebrow mb-5">The short version</p>
          <p className="max-w-2xl text-lg leading-8 text-[#e3e0d8]">I’m a full-stack developer who likes owning the whole journey: understanding a problem, shaping the interface, building the system behind it, and polishing the details that make a product feel right.</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aaa9a2]">Outside the editor I’m usually at the gym, watching basketball or deep into a game. I care about steady progress and work that has a life beyond the launch.</p>
        </div>
        <div className="panel cut-corner p-7 md:p-10">
          <p className="eyebrow mb-6">Tools I reach for</p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => <span key={skill} className="border border-white/10 px-3 py-2 font-mono text-xs text-white/75">{skill}</span>)}
          </div>
        </div>
      </div>

      <div className="mb-8 flex items-end justify-between">
        <div><p className="section-label mb-4">Timeline</p><h3 className="display-title text-5xl md:text-6xl">Where I’ve been</h3></div>
        <span className="hidden font-mono text-[.62rem] uppercase tracking-wider text-white/35 sm:inline">Education / work</span>
      </div>
      <div className="border-t border-white/10">
        {timeline.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: index * .06 }} className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[160px_1fr] md:gap-8 md:py-8">
            <p className="font-mono text-[.68rem] uppercase tracking-wider text-[#f4e400]">{item.year}</p>
            <div className="grid gap-2 lg:grid-cols-[.75fr_1fr] lg:gap-8">
              <div><h4 className="font-semibold text-white">{item.title}</h4><p className="mt-1 text-sm text-white/40">{item.company}</p></div>
              <p className="text-sm leading-7 text-[#aaa9a2]">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default About;
