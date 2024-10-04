import { Pinyon_Script } from "next/font/google";
import React from "react";

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function Map() {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <span className={`text-4xl lg:text-6xl pb-6 ${pnyonScript.className}`}>
        Event Location
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d258.4765860796762!2d112.76325030756948!3d-7.743947768482974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDQnMzguMSJTIDExMsKwNDUnNDguMCJF!5e0!3m2!1sen!2sid!4v1728031850126!5m2!1sen!2sid"
        loading="lazy"
        width="250"
        height="300"
        allowFullScreen={false}
        className="rounded-md border-white border-4 lg:hidden"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d258.4765860796762!2d112.76325030756948!3d-7.743947768482974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDQnMzguMSJTIDExMsKwNDUnNDguMCJF!5e0!3m2!1sen!2sid!4v1728031850126!5m2!1sen!2sid"
        loading="lazy"
        width="650"
        height="500"
        allowFullScreen={false}
        className="rounded-md border-white border-4 lg:block hidden"
      />
    </div>
  );
}
