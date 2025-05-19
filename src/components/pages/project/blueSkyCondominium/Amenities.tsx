import Image from "next/image";
import React from "react";
import banner from "../../../../../public/images/land3.jpg";
import resortStyle from "../../../../../public/images/condominium/Amenities1.jpg";
import Amenities1 from "../../../../../public/images/condominium/Amenities.jpg";
import Amenities2 from "../../../../../public/images/condominium/Amenities2.jpg";
import Amenities3 from "../../../../../public/images/condominium/Amenities3.jpg";
import GymFeatures from "./GymFeatures";

const Amenities = () => {
  return (
    <section>
      <div className="relative w-full md:h-[500px] h-40">
        <Image
          src={banner}
          alt="Blue Sky City"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white md:text-4xl text-3xl font-bold uppercase tracking-wider">
            Amenities
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:w-[1200px] mx-auto gap-20 items-center justify-center">
        <div className="">
          <h1 className="md:text-4xl text-3xl font-semibold py-3">
            Superior Resort-Style Blue Sky City
          </h1>
          <p>
            Manicured landscaping, curated flora and fauna, movie theatres, fine
            dining, prayer halls, restrooms, grand function halls, laundry,
            housekeeping, children’s play areas, steam rooms, saunas, and
            peaceful bodies of water. These are just some of the stunning
            resort-style Blue Ske City and services that inspire residents to
            experience an unprecedented life of luxurious wellbeing at Ananta
            Terraces.
          </p>
        </div>
        <div>
          <Image src={resortStyle} alt="Resort Style" className="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center px-4 py-8 md:py-28 bg-blue-500 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">1</h1>
          <p>Club House</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">9</h1>
          <p>Heated Swimming Pools</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">2</h1>
          <p>Squash Courts</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">1</h1>
          <p>Tennis Court</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">1</h1>
          <p>Basketball Court</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">840m</h1>
          <p>Jogging Track</p>
        </div>
      </div>

      <Image src={Amenities1} alt="Amenities" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 items-center justify-items-center px-4 py-8 md:py-16  text-center">
        <h1 className="col-span-1 sm:col-span-2 md:col-span-3 text-3xl font-semibold">
          Club House
        </h1>
        <p>Cafe</p>
        <p>Pool Table</p>
        <p>Table Tennis</p>
        <p>Sports Lounge</p>
        <p>2 Squash Courts</p>
      </div>
      <Image src={Amenities2} alt="Amenities" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-center justify-items-center px-4 py-8 md:py-16  text-center">
        <h1 className="col-span-1 sm:col-span-2 md:col-span-3 text-3xl font-semibold">
          Swimming Pool
        </h1>
        <p>
          1 Heated Swimming Pool <br />
          in every residential tower
        </p>
        <p>9 pools in total</p>
        <p>
          Each pool is <br /> 50 feet long
        </p>
        <p>
          Sauna & <br /> Steam Sauna
        </p>
      </div>
      <Image src={Amenities3} alt="Amenities" />
      <GymFeatures/>
    </section>
  );
};

export default Amenities;
