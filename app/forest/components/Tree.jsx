"use client";

import React, { useState } from "react";

export default function Tree({ shop }) {
  const [likes, setLikes] = useState(0); // いいねの状態を管理

  // 成長度を計算する関数
  const growth = calculateGrowth(shop) + likes; // いいねの数を成長度に加算
  const growthLevel = Math.min(Math.floor(growth / 10), 9); // 最大成長度9に制限
  const treeImage = `/tree-${growthLevel}.png`; // 動的に画像ファイル名を生成

  // 投稿数をローカルストレージから安全に取得
  let totalPosts = 0;
  try {
    const storedData = JSON.parse(localStorage.getItem(`shop_${shop.id}`));
    totalPosts = storedData?.data?.total || 0;
  } catch (e) {
    console.warn("ローカルストレージからのデータ取得に失敗:", e);
  }

  return (
    <div
      className="p-6 rounded-lg"
      style={{ backgroundColor: "#F6F6F6" }} // 背景色を設定
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">{shop.name}</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://prtimes.jp/main/html/searchrlp/company_id/${shop.id}`}
        className="text-blue-500 hover:underline text-[12px]" // フォントサイズを小さく変更
      >
        PR TIMESで詳細を見る
      </a>
      <div
        className="h-96 w-60 rounded-lg flex items-center justify-center"
        style={{
          overflow: "hidden",
          display: "flex", // Flexboxを適用
          justifyContent: "center", // 水平方向の中央揃え
          alignItems: "center", // 垂直方向の中央揃え
        }}
      >
        {/* 現在の木の状態を画像で表示 */}
        <img
          src={treeImage}
          alt="Tree"
          className="object-contain h-auto max-h-full max-w-full"
          style={{
            display: "block", // ブロック要素に変更
            margin: "auto", // 画像を中央揃え
          }}
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          投稿数: <span className="font-semibold">{totalPosts}</span>
        </p>
        <p>
          インプ数: <span className="font-semibold">{shop.inputs}</span>
        </p>
        <p>
          メディア掲載:{" "}
          <span className="font-semibold">{shop.mediaMentions}</span>
        </p>
        <p>
          いいね数: <span className="font-semibold">{likes}</span>
        </p>
      </div>
      {/* いいねボタン */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setLikes((prevLikes) => prevLikes + 1)} // いいねを1増やす
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          👍 育てる
        </button>
      </div>
    </div>
  );
}

// 成長度を計算する関数
function calculateGrowth(shop) {
  return shop.inputs + shop.posts * 2 + shop.mediaMentions * 3;
}
