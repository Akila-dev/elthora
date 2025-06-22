"use client";

import { useRef, useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CanvasLoader = ({ onExit }) => {
  const { progress } = useProgress();

  //   const container = useRef(null);

  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    return () => {
      if (onExit) {
        // Since there's an unmount signal, do nothing here, animation is handled manually
      }
    };
  }, []);

  useEffect(() => {
    if (onExit) {
      gsap.to(ref.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: onExit,
      });
    }
  }, [onExit]);

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
        ref={ref}
        className="w-screen h-screen flex-center !bg-dark relative"
      >
        <div className="flex-center flex-col w-15 translate-y-1/2">
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
