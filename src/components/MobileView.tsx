import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Virtual } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/virtual";
import { StoryProps } from "@/types";
import Button from "./Button";

export default function MobileView({ story, title }: StoryProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="mt-10 text-4xl font-bold text-center">{title}</h2>
      <div className="w-full mx-100 flex justify-evenly items-center h-[70vh] relative">
        <article
          className={`prose prose-xl w-[50vw]   mx-auto whitespace-pre-line flex flex-col text-center font-amaticSC text-6xl  
          }`}
        >
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            speed={600}
            observer={true}
            observeParents={true}
            className="w-[50vw] h-[60vh] "
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {story.map((fragment, i) => (
              <SwiperSlide key={i} className="h-full w-full">
                {({ isActive }) => (
                  <div
                    className={`flex flex-col justify-between h-full ${
                      isActive ? "" : "hidden"
                    }`}
                  >
                    <div
                      className={` text-4xl pt-3 h-full mb-0 ${
                        i === story.length - 1 ? "font-bold" : ""
                      }
                      `}
                    >
                      {fragment}
                    </div>
                    {i === story.length - 1 && (
                      <Button>
                        <a href="/story" className="text-decoration-line: none">
                          Nowa Bajka
                        </a>
                      </Button>
                    )}
                    <p className="mb-0 text-xl">
                      {i + 1}/{story.length}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between pt-6">
            <button onClick={() => swiperRef.current?.slidePrev()}>←</button>

            <button onClick={() => swiperRef.current?.slideNext()}>→</button>
          </div>
        </article>
      </div>
    </div>
  );
}
