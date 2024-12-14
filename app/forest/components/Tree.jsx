"use client";

import { useSpring, animated } from "@react-spring/web";

export default function Tree({ shop }) {
  const growth = calculateGrowth(shop);

  const treeStyle = useSpring({
    height: `${50 + growth * 1.5}px`,
    width: `${30 + growth * 0.8}px`,
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="bg-sky-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{shop.name}</h3>
      <div className="relative h-64">
        <animated.div
          style={treeStyle}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-green-800 to-green-400"
        >
          <div className="absolute bottom-0 left-1/2 w-4 h-1/3 bg-brown-600 transform -translate-x-1/2" />
          <div className="absolute bottom-1/3 left-0 w-full h-2/3">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M50 0 L0 100 H100 Z"
                fill="currentColor"
                className="text-green-600"
              />
            </svg>
          </div>
        </animated.div>
      </div>
      <div className="mt-2 text-sm">
        <p>インプ数: {shop.inputs}</p>
        <p>投稿数: {shop.posts}</p>
        <p>メディア掲載: {shop.mediaMentions}</p>
      </div>
    </div>
  );
}

function calculateGrowth(shop) {
  // 成長度の計算（例: インプ数、投稿数、メディア掲載数の合計）
  return shop.inputs + shop.posts * 2 + shop.mediaMentions * 3;
}
