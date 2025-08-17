"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ProjectModal";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div onClick={() => openModal(item)} className="cursor-pointer">
              <PinContainer title="" href="">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width={384} height={240} />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    width={384}
                    height={240}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-sm text-center line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex justify-center items-center mt-4">
                  <p className="text-purple text-sm">Click to view details</p>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default RecentProjects;
