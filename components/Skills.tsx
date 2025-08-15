"use client";

import { skills } from "@/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">technical skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black-200 border border-white/[0.1] rounded-2xl p-6 min-w-[280px]"
          >
            <h3 className="text-xl font-bold text-purple mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple/10 border border-purple/20 rounded-full text-sm text-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
