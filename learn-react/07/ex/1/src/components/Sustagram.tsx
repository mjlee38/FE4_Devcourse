import { useRef, useState } from "react";

export default function Sustagram() {
  const [picture, setPicture] = useState([
    {
      index: 0,
      src: "https://dummyimage.com/600x400/000/fff&text=0",
    },
    {
      index: 1,
      src: "https://dummyimage.com/600x400/000/fff&text=1",
    },
    {
      index: 2,
      src: "https://dummyimage.com/600x400/000/fff&text=2",
    },
    {
      index: 3,
      src: "https://dummyimage.com/600x400/000/fff&text=3",
    },
    {
      index: 4,
      src: "https://dummyimage.com/600x400/000/fff&text=4",
    },
    {
      index: 5,
      src: "https://dummyimage.com/600x400/000/fff&text=5",
    },
  ]);

  const deletedImage = useRef<{ index: number; src: string }[]>([]);
  const deletePicutreHandler = (index: number) => {
    deletedImage.current = [...deletedImage.current, picture[index]];
    setPicture((picture) => picture.filter((_, i) => i !== index));
  };
  const recoveryPicutre = () => {
    if (deletedImage.current.length === 0) return;
    const [recoveryPic, ...remainPicture] = deletedImage.current;
    deletedImage.current = remainPicture;
    setPicture((picture) =>
      [...picture, recoveryPic].sort((a, b) => a.index - b.index)
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
            onClick={recoveryPicutre}
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {picture.map((value, index) => (
          <div className="group relative" key={value.index}>
            <a className="group" href="#">
              <img
                src={value.src}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
              onClick={() => deletePicutreHandler(index)}
            >
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
