import Link from "next/link";

export default function SocialLinks() {
  return (
    <>
      <div>
        <ul className="flex flex-row gap-7">
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
            <Link href="https://github.com/Ashir-Valjee" target="_blank">
              <i className="fa-brands fa-github text-2xl"></i>
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
            <Link
              href="https://www.linkedin.com/in/ashir-valjee-068496331/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
