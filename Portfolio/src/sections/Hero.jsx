import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const Arrow = () => <span aria-hidden="true">↗</span>;

const Hero = () => (
  <SectionWrapper id="home" className="flex items-center !min-h-[92vh] !pt-28 !pb-16">
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .65, ease: 'easeOut' }}
        className="order-2 lg:order-1"
      >
        <div className="eyebrow mb-7 flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse bg-[#f4e400]" />
          London, UK&nbsp; / &nbsp;Available for opportunities
        </div>
        <p className="section-label mb-5">Full stack developer · independent builder</p>
        <h1 className="display-title mb-7 text-[clamp(4.4rem,10vw,8.8rem)]">
          Treisis<br />
          <span className="text-[#f4e400]">Gakas</span>
          <span className="ml-3 align-top font-mono text-2xl font-normal tracking-normal text-white/35">©</span>
        </h1>
        <p className="max-w-xl text-base leading-8 text-[#aaa9a2] md:text-lg">
          I build useful digital products from the first sketch to the final deploy. Product-minded, full-stack, and happiest turning messy problems into clean experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="signal-button">Explore selected work <Arrow /></a>
          <a href="#contact" className="outline-button">Let’s talk</a>
        </div>
        <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
          <div><span className="eyebrow block text-[.6rem] text-white/40">Focus</span><span className="mt-2 block text-sm">Web products</span></div>
          <div><span className="eyebrow block text-[.6rem] text-white/40">Approach</span><span className="mt-2 block text-sm">End to end</span></div>
          <div><span className="eyebrow block text-[.6rem] text-white/40">Currently</span><span className="mt-2 block text-sm">Building SysManager</span></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8, delay: .15 }}
        className="order-1 mx-auto w-[min(72%,340px)] lg:order-2 lg:w-full lg:max-w-[410px]"
      >
        <div className="photo-frame">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#171a18]">
            <img src="/Treisis.jpeg" alt="Treisis Gakas" className="h-full w-full object-cover object-center grayscale-[.2]" />
            <div className="scanline absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-20">
              <span className="eyebrow text-[.62rem]">Independent mind. Collective future.</span>
            </div>
          </div>
          <span className="absolute -left-9 top-7 -rotate-90 origin-bottom-right eyebrow text-[.58rem] text-white/40">Personal archive · 2026</span>
          <span className="absolute -right-5 -top-5 flex h-14 w-14 items-center justify-center bg-[#f4e400] font-mono text-lg font-bold text-[#0b0c0c]">TG</span>
        </div>
        <div className="mt-8 flex items-center justify-between font-mono text-[.62rem] uppercase tracking-[.16em] text-white/40">
          <span>Figure 01 — The builder</span><span>51°30′N / 0°07′W</span>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Hero;
