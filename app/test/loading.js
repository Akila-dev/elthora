const Loading = () => {
  return (
    <div className="w-screen h-screen flex-center !bg-dark relative">
      <div className="flex-center flex-col w-15">
        <div
          id="progress-bar"
          className="h-[0.3em] w-full bg-white/50 flex justify-start items-center rounded overflow-clip"
        >
          <div style={{ width: "0%" }} className="h-full bg-white"></div>
        </div>

        <h2 className="text-white text-center !font-medium">0%</h2>
      </div>
    </div>
  );
};

export default Loading;
