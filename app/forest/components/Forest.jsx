import Tree from "./Tree";

export default function Forest({ district }) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">{district.name}の森</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {district.shops.map((shop) => (
          <Tree key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}
