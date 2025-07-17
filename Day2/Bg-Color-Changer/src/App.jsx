import { useState } from "react";

function App() {
  const colors = [
    { name: "Red", value: "bg-red-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Pink", value: "bg-pink-500" },
    { name: "Yellow", value: "bg-yellow-400" },
    { name: "Cyan", value: "bg-cyan-400" },
    { name: "Purple", value: "bg-purple-500" },
  ];

  const [color, setColor] = useState(colors[0].value);

  return (
    <>
      <div className={`w-full h-screen flex items-end justify-center ${color}`}>
        <div className="w-[900px] bg-white h-auto mb-8 p-4 rounded-xl flex flex-wrap gap-4 items-center justify-center">
          {colors.map((col, index) => (
            <button
              key={index}
              onClick={() => setColor(col.value)}
              className={`px-4 py-2 ${col.value} text-white rounded`}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
