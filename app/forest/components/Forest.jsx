import Tree from "./Tree";

export default function Forest({ district }) {
  return (
    <div
      className="mt-4 p-6 bg-white rounded-lg"
      style={{ border: "1px solid #e5e7eb" }} // 境界線を薄い灰色に設定
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
  );
}
