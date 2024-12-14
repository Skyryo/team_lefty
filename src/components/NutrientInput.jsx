import { Button } from "./components/ui/button";

export default function NutrientInput({ label, value, onChange }) {
  const increment = () => onChange(Math.min(value + 1, 100));
  const decrement = () => onChange(Math.max(value - 1, 0));

  return (
    <div className="flex items-center justify-between">
      <span className="text-lg font-medium">
        {label}: {value}
      </span>
      <div className="space-x-2">
        <Button onClick={decrement} variant="outline" size="sm">
          -
        </Button>
        <Button onClick={increment} variant="outline" size="sm">
          +
        </Button>
      </div>
    </div>
  );
}
