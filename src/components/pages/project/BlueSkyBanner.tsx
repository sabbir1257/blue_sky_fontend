import React from "react";
import Image from "next/image";
import banner from "../../../../public/images/land3.jpg"; // Update to your actual banner image path

const BlueSkyBanner = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Blue Sky City"
        fill
        className="object-cover brightness-50" // dark overlay
        priority
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold uppercase tracking-wider">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default BlueSkyBanner;
