  import React from "react";

function Background() {
  return (
    <div>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute w-full py-10 flex justify-center text-zinc-600 text-center font-semibold text-xl  top-[5%]">
          Documents
        </div>
        <h1 className="absolute font-semibold top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </div>
  );
}

export default Background;
