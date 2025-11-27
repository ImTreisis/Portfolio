import { motion as Motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const About = () => {
  const skills = [
    { name: 'React', level: 80, color: '#00ffcc' },
    { name: 'Node.js', level: 70, color: '#9d00ff' },
    { name: 'JavaScript', level: 80, color: '#00ffff' },
    { name: 'Express', level: 70, color: '#9d00ff' },
    { name: 'MongoDB', level: 80, color: '#ff00ff' },
    { name: 'HTML', level: 90, color: '#00ffff' },
    { name: 'CSS', level: 90, color: '#9d00ff' },
    { name: 'Git', level: 80, color: '#9d00ff' },
    { name: 'Python', level: 70, color: '#ff00ff' },
  ];

  const timeline = [
    {
      year: 'Aug 2025 – Present',
      title: 'Freelance Full-Stack Engineer',
      company: 'Growix (Client Project)',
      description:
        'Designing and building an online dance-workshop marketplace with React, Node, Express, MongoDB, and secure hashing for auth—supports account creation, workshop uploads, favourites, search, and ongoing feature iterations with the client.',
    },
    {
      year: 'Oct 2025 (2 Weeks)',
      title: 'Software Engineering Online Internship',
      company: 'Lloyds Banking Group',
      description:
        'Delivered an Azure-hosted mortgage calculator with HTML/CSS/JS, presented results to stakeholders, iterated on feedback, and used Git workflows to push collaborative velocity by 30%.',
    },
    {
      year: 'Sep 2025 (2 Weeks)',
      title: 'Front-End Engineering Online Internship',
      company: 'Skyscanner',
      description:
        'Shipped a React travel-date picker powered by Skyscanner’s library, customised UX flows, and added automated tests to guarantee rendering.',
    },
    {
      year: 'Oct 2022 – Jun 2025',
      title: 'BSc Computer Science',
      company: 'City, University of London',
      description:
        'Key modules: Wing Search (flight-fare tracker web app), Web Development (PHP/HTML restaurant platform), Algorithms (optimised runtime-critical solutions), and Intro to AI (prototyped AI for rendering results).',
    },
    {
      year: 'Sep 2022 – Oct 2022',
      title: 'Coding Intern',
      company: 'City, University of London',
      description:
        'Built a Java maze pathfinder that calculated the quickest escape route using algorithms, plus a personal finance tracker that visualised spending trends.',
    },
  ];

  return (
    <SectionWrapper id="about">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-neon-pink">About</span>
          <span className="text-neon-cyan"> Me</span>
        </h2>
        <div className="w-24 h-1 bg-neon-purple mx-auto mb-12 shadow-neon-purple" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bio */}
          <Card>
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">Bio</h3>
            <p className="body-text text-gray-100/90 mb-4">
              I'm a passionate full-stack developer with a love for creating
              website and applications for myself or clients. My journey started with
              curiosity about computers and has evolved into a career focused on building
              websites.
            </p>
            <p className="body-text text-gray-100/90">
            When I'm not coding, you will find me in the gym or gaming. 
            I'm Committed to personal growth both 
            in and out of the gym.
            </p>
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">Fun Facts</h3>
            <p className="body-text text-gray-100/90">
            I love the gym and bench 150kg. <br />
            I love basketball.<br />
            I love gaming.
            </p>
          </Card>

          {/* Skills */}
          <Card>
            <h3 className="text-2xl font-bold text-neon-purple mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <Motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="body-text text-gray-100 font-medium">{skill.name}</span>
                    <span className="text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-cyber-dark rounded-full h-2 overflow-hidden border border-cyber-card">
                    <Motion.div
                      className="h-full"
                      style={{
                        background: `linear-gradient(to right, ${skill.color}, #00ffcc)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </Motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-neon-cyan mb-8">
            Experience Timeline
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="border-l-4 border-neon-purple">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <span className="text-neon-pink text-2xl font-bold">{item.year}</span>
                      <h4 className="text-xl font-semibold text-neon-cyan mt-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.company}</p>
                    </div>
                  </div>
                  <p className="body-text text-gray-100/90">{item.description}</p>
                </Card>
              </Motion.div>
            ))}
          </div>
        </div>
      </Motion.div>
    </SectionWrapper>
  );
};

export default About;

