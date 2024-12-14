"use client";

import React from "react";

export default function Tree({ shop }) {
  const growth = calculateGrowth(shop);

  // 成長度に応じた画像の選択
  let treeImage;
  if (growth < 10) {
    treeImage = "/tree-0.png"; // 芽の状態
  } else if (growth < 20) {
    treeImage = "/tree-1.png";
  } else if (growth < 30) {
    treeImage = "/tree-2.png";
  } else if (growth < 40) {
    treeImage = "/tree-3.png";
  } else if (growth < 50) {
    treeImage = "/tree-4.png";
  } else if (growth < 60) {
    treeImage = "/tree-5.png";
  } else if (growth < 70) {
    treeImage = "/tree-6.png";
  } else if (growth < 80) {
    treeImage = "/tree-7.png";
  } else if (growth < 90) {
    treeImage = "/tree-8.png";
  } else {
    treeImage = "/tree-9.png"; // 最大の成長状態
  }

  return (
    <div
      className="p-6 rounded-lg"
      style={{ backgroundColor: "#F6F6F6" }} // 背景色を設定
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">{shop.name}</h3>
      <div
        className="h-96 w-60 rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "#F6F6F6", // 背景色を画像と一致
        }}
      >
        {/* 現在の木の状態を画像で表示 */}
        <img
          src={treeImage}
          alt="Tree"
          className="object-contain h-full w-full"
          style={{
            backgroundColor: "#F6F6F6", // 背景色を画像周辺と統一
          }}
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          インプ数: <span className="font-semibold">{shop.inputs}</span>
        </p>
        <p>
          投稿数: <span className="font-semibold">{shop.posts}</span>
        </p>
        <p>
          メディア掲載:{" "}
          <span className="font-semibold">{shop.mediaMentions}</span>
        </p>
      </div>
    </div>
  );
}

// 成長度を計算する関数
function calculateGrowth(shop) {
  return shop.inputs + shop.posts * 2 + shop.mediaMentions * 3;
}
