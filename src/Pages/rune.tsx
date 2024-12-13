import React from "react";

export default function Rune() {
  // Dynamically import all images from the /Assets directory
  const bottleModules = import.meta.glob("../Assets/bottle*.png", { eager: true });
  const runeModules = import.meta.glob("../Assets/runes/*.png", { eager: true });

  // Extract and sort bottle images
  const bottles = Object.values(bottleModules).map((module) => module.default || module);

  // Extract and sort rune images by filename
  const runeImages = Object.entries(runeModules)
    .map(([path, module]) => ({
      path,
      src: module.default || module,
    }))
    .sort((a, b) => {
      const aIndex = parseInt(a.path.match(/(\d+)\.png$/)?.[1], 10); // Extract numeric part of filename
      const bIndex = parseInt(b.path.match(/(\d+)\.png$/)?.[1], 10); // Extract numeric part of filename
      return aIndex - bIndex;
    })
    .map((entry) => entry.src); // Only keep the image paths

  const [runes, setRunes] = React.useState([]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center text-2xl font-bold mb-8">Rune</h1>

      {/* Bottles Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 mx-auto w-1/2">
        {bottles.map((bottle, index) => (
          <div key={index} className="relative w-[13%] min-w-[120px]">
            <img src={bottle} alt={`Bottle ${index + 1}`} />
            {runes.length > index && (
              <img
                className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-6/12 w-16"
                src={runes[index]}
                alt={`Rune ${index}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Runes Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-1/3 items-center mx-auto">
        {runeImages.map((rune, index) => (
          <img
            key={index}
            className="bg-stone-600 border-[1em] aspect-sq border-stone-700 cursor-pointer hover:scale-105 transition-transform"
            src={rune}
            alt={`Rune option ${index}`}
            onClick={() => {
              if (!runes.includes(rune)) {
                setRunes((prevRunes) => [...prevRunes, rune]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
