import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-neutral-800">
      <MaxWidthWrapper>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-neutral-500">
            &copy; {currentYear} Fiston Turner. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/fiston-user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com/fiston_user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com/in/fiston-user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:hello@fiston.dev"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;