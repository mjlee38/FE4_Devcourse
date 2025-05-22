export default function Sustagram() {
  const picture = [
    "https://cdn.pixabay.com/photo/2022/02/13/17/22/cartoon-easter-bunny-7011655_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/04/03/04/49/winter-9510493_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/23/17/16/switzerland-9287018_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/13/15/41/mountain-8251186_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/19/14/05/flower-8326809_1280.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {picture.map((src, index) => (
          <a key={index} className="group" href="#">
            <img
              src={src}
              width="400"
              height="400"
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
