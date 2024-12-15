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
    <h3
      className="text-xl font-bold text-gray-800 mb-4"
      style={{
        height: "3em", // 固定高さを設定
        lineHeight: "1.5em", // 行間を調整
        overflow: "hidden", // 溢れたテキストを隠す
        textOverflow: "ellipsis", // テキストが長い場合に省略
        whiteSpace: "nowrap", // テキストを1行に制限
      }}
    >
      {shop.name}
    </h3>
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
  // Ensure all inputs are numbers and handle undefined/null values
  const inputs = Number(shop.inputs) || 0;
  const posts = Number(shop.posts) || 0;
  const mediaMentions = Number(shop.mediaMentions) || 0;
  const likes = Number(shop.likes) || 0;

  // Weighted calculation based on logarithmic values
  const logPosts = Math.log(posts + 1);
  const logInputs = Math.log(inputs + 1);
  const logLikes = Math.log(likes + 1);

  // Score calculation based on defined weights
  const score =
    0.4 * logPosts + 0.3 * logInputs + 0.2 * mediaMentions + 0.1 * logLikes;

  // Normalizing the score to a 9-level maturity scale
  const minScore = 0; // Assuming all values are 0
  const maxScore =
    0.4 * Math.log(100 + 1) + // Hypothetical max posts
    0.3 * Math.log(1000 + 1) + // Hypothetical max inputs
    0.2 * 1 + // Max media mentions (1)
    0.1 * Math.log(1000 + 1); // Hypothetical max likes

  const maturityLevel = Math.ceil(
    ((score - minScore) / (maxScore - minScore)) * 9
  );

  return maturityLevel;
}
