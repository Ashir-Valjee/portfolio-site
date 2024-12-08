import Image from "next/image";
import Link from "next/link";

export default function ProjectCard2({
  projectName,
  projectDescription,
  projectSkills,
  projectLink,
  projectGit,
  projectSrc,
}) {
  return (
    <>
      <div>
        <div className="card card-compact bg-base-100 w-85 max-w-96  lg:w-96 shadow-xl">
          <figure>
            <Image src={projectSrc} alt="Shoes" width={500} height={500} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projectName}</h2>
            <p className="text-wrap">{projectDescription}</p>
            <div className="flex flex-row flex-wrap  gap-4 ">
              {projectSkills.map((skill, index) => (
                <div
                  key={index}
                  className=" py-1 px-2 font-bold  inline-block rounded reflective-background "
                >
                  {skill}
                </div>
              ))}
            </div>
            <div className="card-actions justify-end">
              <div className="flex flex-row gap-4 items-center justify-center">
                <Link
                  href={projectLink}
                  target="_blank"
                  className="btn btn-primary btn-sm "
                >
                  Visit
                </Link>
                <Link
                  href={projectGit}
                  target="_blank"
                  className="hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <i className="fa-brands fa-github text-3xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
