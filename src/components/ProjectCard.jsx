import Image from "next/image";

export default function ProjectCard({
  projectName,
  projectDescription,
  projectSkills,
}) {
  return (
    <>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl ">
          <figure>
            <Image
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
              width={700}
              height={700}
              //   layout="fill"
              //   objectFit="contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projectName}</h2>
            <p>{projectDescription}</p>
            <div className="flex flex-row flex-wrap  gap-4 ">
              {projectSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-500 py-1 px-2 font-bold  inline-block rounded reflective-background "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
