import React from "react";
import Card from "./components/Card";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      artist: "Sherya",
      song: "Zihaal-e-Miskin",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFuq0Wzm8GzCQkYOxS_10K8c-ZrNlxl_UZw&s",
      addToFav: false,
    },
    {
      artist: "Arijit",
      song: "chal ghar chale",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAz39UfeOwPBPfHtfwMj79-4yjvofplK-I0v2P47G7w&s",
      addToFav: false,
    },
    {
      artist: "Zubin",
      song: "Mere ghar ram aaye",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYSMl6g5-7Oa99b3_EbFzDQHyFLfy8bXE1YQFZcIP8Q&s",
      addToFav: false,
    },
    {
      artist: "Sherya",
      song: "Zihaal-e-Miskin",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFuq0Wzm8GzCQkYOxS_10K8c-ZrNlxl_UZw&s",
      addToFav: false,
    },
    {
      artist: "Sherya",
      song: "Zihaal-e-Miskin",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFuq0Wzm8GzCQkYOxS_10K8c-ZrNlxl_UZw&s",
      addToFav: false,
    },
  ];
  const [val, setVal] = useState(data);

  const handelClick = (index) => {
    setVal((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, addToFav: !item.addToFav };
        return item;
      });
    });
  };
  return (
    <div className="h-screen w-full">
      <Navbar dataValue={val} />
      <div className="flex flex-wrap gap-4 mt-5 items-center justify-center px-1">
        {val.map((val, index) => (
          <Card value={val} key={index} setValue={handelClick} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
