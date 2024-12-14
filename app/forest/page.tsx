"use client";

import { useEffect, useState } from "react";
import ShoppingDistrictSelector from "./components/ShoppingDistrict";
import Forest from "./components/Forest";

const initialData = [
  {
    id: 1,
    name: "中央商店街",
    shops: [
      { id: 1, name: "八百屋", inputs: 10, posts: 5, mediaMentions: 2 },
      { id: 2, name: "パン屋", inputs: 15, posts: 8, mediaMentions: 3 },
      { id: 3, name: "魚屋", inputs: 8, posts: 4, mediaMentions: 1 },
    ],
  },
  {
    id: 2,
    name: "駅前商店街",
    shops: [
      { id: 4, name: "カフェ", inputs: 20, posts: 12, mediaMentions: 5 },
      { id: 5, name: "本屋", inputs: 12, posts: 6, mediaMentions: 2 },
      { id: 6, name: "雑貨店", inputs: 18, posts: 9, mediaMentions: 4 },
    ],
  },
];

export default function ShoppingDistrictForest() {
  const [districts, setDistricts] = useState(initialData);
  const [currentDistrictId, setCurrentDistrictId] = useState(1);

  useEffect(() => {
    //setIntervalを用いて、inputs, posts, mediaMentionsを１ずつに増加する処理を実装
    const interval = setInterval(() => {
      setDistricts((prev) =>
        prev.map((d) => ({
          ...d,
          shops: d.shops.map((s) => ({
            ...s,
            inputs: s.inputs + 1,
            posts: s.posts + 1,
            mediaMentions: s.mediaMentions + 1,
          })),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDistrict = districts.find((d) => d.id === currentDistrictId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">商店街の森</h1>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
        <ShoppingDistrictSelector
          districts={districts}
          currentDistrictId={currentDistrictId}
          onSelectDistrict={setCurrentDistrictId}
        />
        <Forest district={currentDistrict} />
      </div>
    </div>
  );
}
