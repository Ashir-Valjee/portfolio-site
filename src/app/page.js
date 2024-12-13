import Image from "next/image";
import headshot from "@/../public/headshot.jpg";
import Link from "next/link";
import HomeAnimation1 from "@/components/HomeAnimation1";
import Animation2 from "@/components/Animation2";

export default function HomePage() {
  return (
    <>
      {/* <h1 className="text-3xl">
        Hello I&#39;m Ashir Valjee&#44; web developer
      </h1> */}
      <div className="hero bg-base-200 min-h-[calc(100vh-68px)]">
        {/* <Animation2 /> */}
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
              <Image src={headshot} alt="headshot" height={300} width={300} />
            </div>
          </div>
          <div>
            {/* <h1 className="text-5xl font-bold">Hello there!</h1> */}
            {/* <p className="py-6">I&#39;m Ashir Valjee&#44; web developer</p> */}
            <HomeAnimation1 />
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div className="">
              <Link
                href="/Tech-CV-v3.pdf"
                download
                // className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                className="btn btn-primary"
                target="_blank"
              >
                Download CV <i className="fa-regular fa-file"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
