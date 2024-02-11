import React, { useRef, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion"

function Foreground() {


  const ref = useRef(null);

  const data = [
    {
      desc: "  This is the background color of the card",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "  This is the background color of the card",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "  This is the background color of the card",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },


    {
      desc: "  This is the background color of the card",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: " shubham",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },



    
    {
      desc: " shubham",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: " shubham",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: " shubham",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },

  ];

  useState();

  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/250 flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
