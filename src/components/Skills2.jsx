"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/lib/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Skills2() {
  return (
    <>
      <div className="mb-10">
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          breakpoints={{
            340: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* {SkillData.map((skill, index) => (
          <p key={index} className="font-bold">
            {skill.name}
          </p>
        ))} */}

        <div className="card bg-base-300 w-96 shadow-xl  ">
          <div className="card-body">
            <div className="flex items-center justify-center">
              <h2 className="card-title">Skills</h2>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-row flex-wrap gap-4">
                {SkillData.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 py-0.5 px-2 font-bold  inline-block rounded reflective-background"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          breakpoints={{
            340: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
