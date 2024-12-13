import ProjectCard from "@/components/ProjectCard";
import ProjectCard2 from "@/components/ProjectCard2";
import { projectData } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-base-200 min-h-[calc(100vh-68px)] flex flex-row items-center justify-center mt-16">
        <div className=" lg:grid lg:grid-cols-2 grid grid-cols-1 gap-6  justify-center  ">
          {projectData.map((project, index) => (
            <ProjectCard2
              key={index}
              projectName={project.name}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLink={project.weblink}
              projectGit={project.gitlink}
              projectSrc={project.src}
            />
          ))}
        </div>
      </div>
    </>
  );
}
