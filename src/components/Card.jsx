import React from "react";

function Card({ value, setValue, index}) {
  const { artist, song, imgSrc, addToFav } = value;
  return (
    <div className="Cards">
      <div className="h-24 w-72 bg-black/50 sm:w-64 md:w-52 md:h-24 rounded-md  items-center flex gap-4 p-2 shadow-lg shadow-black/50">
        <div className="h-3/4 w-[40%] rounded-md overflow-hidden">
          <img className="object-cover h-full w-full" src={imgSrc} />
        </div>
        <div className=" w-[60%]  flex flex-col flex-wrap gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="leading-none font-medium text-sm text-black">
              {artist}
            </h1>
            <p className="leading-none text-xs font-medium opacity-85">
              {song}
            </p>
          </div>
          <button
          onClick={() => setValue(index)}
            className={`px-1 py-1 text-xs font-medium rounded-full mr-2 text-white/80  shadow-lg shadow-black/40 ${
              addToFav ? "bg-blue-800" : "bg-black/20"
            }`}
          >
            {addToFav ? "Added" : "Add to favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
