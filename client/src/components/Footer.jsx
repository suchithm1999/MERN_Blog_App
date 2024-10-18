import { Footer } from "flowbite-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterCom = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/suchith-m", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/suchithshetty_", "_blank");
  };

  const openGmail = () => {
    const emailAddress = "suchithm1999@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/suchithm1999", "_blank");
  };
  return (
    <Footer
      container
      className="border border-t-4 border-orange-500 flex flex-col"
    >
      <div className="max-w-7xl w-full m-auto flex justify-between items-center flex-col sm:flex-row gap-10">
        <div>
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-200 rounded-lg text-gray-700">
              Suchith&apos;s
            </span>
            Blog
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm sm:text-base gap-10 font-semibold">
          <div>
            <span>About</span>
            <div className="text-xs text-left font-normal text-gray-500">
              <p>A blog site for writing blogs!</p>
            </div>
          </div>
          <div>
            <span>Terms and condition</span>
            <div className="text-xs text-left font-normal text-gray-500">
              <p>No monitoring as of now on this site</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 border-t-1 w-full mt-4"></div>
      <div>
        <div>
          <div className="w-full">
            <div className="flex items-center justify-center flex-col gap-6 pt-10">
              <div className="flex gap-3 text-xl cursor-pointer">
                <AiFillLinkedin
                  tabIndex={0}
                  onClick={openLinkedIn}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.keyCode === 13) {
                      openLinkedIn();
                    }
                  }}
                />
                <AiFillGithub
                  tabIndex={0}
                  onClick={openGithub}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.keyCode === 13) {
                      openGithub();
                    }
                  }}
                />
                <BsInstagram
                  tabIndex={0}
                  onClick={openInstagram}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.keyCode === 13) {
                      openInstagram();
                    }
                  }}
                />
                <BiLogoGmail
                  tabIndex={0}
                  onClick={openGmail}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.keyCode === 13) {
                      openGmail();
                    }
                  }}
                />
              </div>
              <span className="text-xs font-serif text-gray-600">
                Copyright © {new Date().getFullYear()} M Suchith
              </span>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
