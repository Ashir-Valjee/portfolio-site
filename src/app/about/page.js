import Image from "next/image";
import hello from "@/../public/about/hello-world.webp";
import laptop from "@/../public/about/laptop.jpg";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-10">
        <div className=" lg:grid lg:grid-cols-2 grid grid-cols-1 gap-8 lg:gap-28  justify-center items-center  ">
          <div className="card bg-base-300 w-[90vw] max-w-96 shadow-xl  ">
            <div className="card-body">
              <div className="flex items-center justify-center">
                <p>
                  I am an aspiring full-stack software developer transitioning
                  from a successful career in finance. I am currently looking
                  for junior software developer roles and I am also open to
                  freelance opportunites. With a strong foundation in
                  JavaScript, Python, and SQL, I&#39;m passionate about building
                  robust applications that make a real impact.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item w-[90vw] max-w-96 rounded-box">
            <Image
              src={hello}
              className="w-full rounded-lg"
              alt="helloe world"
            />
          </div>
          <div className="carousel-item w-[90vw] max-w-96 rounded-box">
            <Image
              src={laptop}
              className="w-full rounded-lg"
              alt="helloe world"
            />
          </div>
          <div className="card bg-base-300 w-[90vw] max-w-96 shadow-xl  ">
            <div className="card-body">
              <div className="flex items-center justify-center">
                <p>
                  Feel free to explore my portfolio to see some of my work and
                  the projects I&#39;m proud of. If you would like to connect or
                  discuss potential opportunities, don&#39;t hesitate to reach
                  out&#33;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
