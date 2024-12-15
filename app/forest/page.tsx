"use client";

import { useEffect, useState } from "react";
import ShoppingDistrictSelector from "./components/ShoppingDistrict";
import Forest from "./components/Forest";
import History from "./components/History";

const initialData = [
  {
    id: 1,
    name: "高円寺純情商店街",
    shops: [
      { id: 35029, name: "小杉湯", inputs: 10, posts: 5, mediaMentions: 2 },
      {
        id: 149777,
        name: "ラーメン健太",
        inputs: 15,
        posts: 8,
        mediaMentions: 3,
      },
      {
        id: 116200,
        name: "コクテイル書房",
        inputs: 8,
        posts: 4,
        mediaMentions: 1,
      },
    ],
  },
  {
    id: 2,
    name: "高円寺パル商店街",
    shops: [
      {
        id: 69670,
        name: "特定非営利活動法人東京高円寺阿波おどり振興協会",
        inputs: 20,
        posts: 12,
        mediaMentions: 5,
      },
      {
        id: 41636,
        name: "合同会社IZU",
        inputs: 12,
        posts: 6,
        mediaMentions: 2,
      },
    ],
  },
];

const mappingList = initialData.map((district) => ({
  map_id: district.id,
  shop_ids: district.shops.map((shop) => shop.id),
}));

export default function ShoppingDistrictForest() {
  const [currentDistrictId, setCurrentDistrictId] = useState(1);
  const [loading, setLoading] = useState(true); // ローディング状態を管理

  useEffect(() => {
    const fetchAllShops = async () => {
      for (const district of initialData) {
        for (const shop of district.shops) {
          await fetchShopData(shop.id); // shop_idごとにAPI呼び出し
        }
      }
      setLoading(false);
    };

    fetchAllShops();
  }, []);

  const fetchShopData = async (shopId: number) => {
    const cacheKey = `shop_${shopId}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      console.log(`Cache hit for shop_id: ${shopId}`);
      return JSON.parse(cachedData);
    }

    try {
      const response = await fetch(`/api/proxy?shop_id=${shopId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data for shop_id: ${shopId}`);
      }

      const data = await response.json();

      localStorage.setItem(cacheKey, JSON.stringify(data));
      console.log(`Fetched and cached data for shop_id: ${shopId}`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching data for shop_id: ${shopId}`, error);
    }
  };

  const districts = initialData;
  const currentDistrict = districts.find((d) => d.id === currentDistrictId);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <ShoppingDistrictSelector
          districts={districts}
          currentDistrictId={currentDistrictId}
          onSelectDistrict={setCurrentDistrictId}
        />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl mb-8">
        <Forest district={currentDistrict} />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
        <History district={currentDistrict} mappingList={mappingList} />
      </div>
    </div>
  );
}
