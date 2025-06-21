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
      //   const tl = gsap.timeline({
      //     defaults: { duration: 1, ease: "power2.inOut", stagger: 0.1 },
      //   });
      //   tl.to(".progress-title", {
      //     // transform: "blur(50px)",
      //     opacity: 0,
      //   });
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
        <div className="flex-center flex-col w-15">
          <div
            id="progress-bar"
            className="h-[0.3em] w-full bg-white/50 flex justify-start items-center rounded overflow-clip"
          >
            <div
              style={{ width: parseInt(progress) + "%" }}
              className="h-full bg-white"
            ></div>
          </div>

          <h2 className="text-white text-center !font-medium">
            {parseInt(progress)}%
          </h2>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
