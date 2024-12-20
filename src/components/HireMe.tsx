"use client";

import { Mail } from "lucide-react";

const HireMe = () => {
  return (
    <a
      href="mailto:hello@fiston.dev"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-neutral-100 transition-colors"
    >
      <Mail className="mr-2 h-4 w-4" />
      Get in touch
    </a>
  );
};

export default HireMe;
