"use client";

import { useRef } from "react";
import { Html, useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CanvasLoader = () => {
  const { progress } = useProgress();

  const container = useRef(null);
  //   const tl = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut", stagger: 0.1 },
      });
      tl.to(".progress-title", {
        // transform: "blur(50px)",
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        ref={container}
        className="w-screen h-screen flex-center !bg-dark relative"
      >
        <h1 id="" className="progress-title text-white">
          ELTHORA
        </h1>
        {/* BOTTOM */}
        <div className="absolute bottom-0 w-full px-1 md:px-3">
          <div id="progress-text" className="flex-between text-white pb-0.5">
            <h4></h4>
            <h4>{progress.toFixed(2)}%</h4>
          </div>
          <div id="progress-bar" className="w-full h-2.5 md:h-3">
            <div className="h-3/4 w-full bg-white/50 flex justify-start items-center">
              <div
                style={{ width: parseInt(progress) + "%" }}
                className="h-full bg-white"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
