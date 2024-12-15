import Tree from "./Tree";

export default function Forest({ district }) {
  return (
    <div
      style={{
        display: "flex", // フレックスボックスを使用
        justifyContent: "center", // 水平方向に中央揃え
        alignItems: "center", // 垂直方向に中央揃え
        minHeight: "100vh", // ビューポート全体の高さ
        padding: "16px", // ページ全体の余白を追加
      }}
    >
      <div
        className="mt-4 p-6 bg-white rounded-lg"
        style={{
          maxWidth: "1200px", // 最大幅を設定
          width: "100%", // コンテナが親幅に適応
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {district.name}の森
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {district.shops.map((shop) => (
            <Tree key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  );
}
