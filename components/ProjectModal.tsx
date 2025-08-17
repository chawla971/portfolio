"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  skills: string[];
  link: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#04071d] to-[#0c0e23] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 border border-white/[0.1] hover:bg-black/70 transition-colors"
            >
              <IoClose className="w-5 h-5 text-white" />
            </button>

            {/* Project image */}
            <div className="relative h-48 lg:h-64 overflow-hidden rounded-t-3xl">
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "#13162D" }}
              >
                <Image
                  src="/bg.png"
                  alt="background"
                  width={768}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <Image
                src={project.img}
                alt={project.title}
                width={768}
                height={256}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 max-h-full"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-[#BEC1DD] text-base lg:text-lg leading-relaxed mb-6">
                {project.des}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <h3 className="text-purple font-semibold mb-3">Skills Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full border border-purple/30 bg-purple/10 text-purple text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple text-purple hover:bg-purple hover:text-black transition-colors"
                >
                  <span>
                    {project.link.includes("github.com")
                      ? "View Code"
                      : "View Project"}
                  </span>
                  <FaLocationArrow className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
