import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function ShoppingDistrictSelector({
  districts,
  currentDistrictId,
  onSelectDistrict,
}) {
  const currentDistrict = districts.find(
    (district) => district.id === currentDistrictId
  );

  return (
    <div className="mb-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {currentDistrict?.name}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {districts.map((district) => (
            <DropdownMenuItem
              key={district.id}
              onSelect={() => onSelectDistrict(district.id)}
            >
              {district.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
