import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export const FooterComponent = () => {
  return (
    <Footer
      container
      className="border border-t-8 border-yellow-500"
    >
      <div
        className="w-full max-w-7xl mx-auto"
      >
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="BrandonFDev"
            year={new Date().getFullYear()}
          />
          <div
            className="flex gap-6 sm:mt-0 mt-4 sm:justify-center"
          >
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="https://www.github.com/Redevil15" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};