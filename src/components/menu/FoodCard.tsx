import { useState } from "react";
import { Clock, Award, Flame } from "lucide-react";
import type { MenuItem } from "src/presentation/interfaces/menu";
import { cn } from "@lib/utils";

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  return (
    <div
      className={cn(
        "bg-cardBgLight dark:bg-cardBgDark rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg",
        isExpanded ? "md:col-span-2" : ""
      )}
      onClick={toggleExpand}
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold ">{item.name}</h3>
            <p className=" font-semibold mt-1">{formatPrice(item.price)}</p>
          </div>
          <div className="flex space-x-1">
            {item.preparationTime && (
              <span className="text-amber-500" title="Tiempo de preparación">
                <Clock className="h-5 w-5" />
              </span>
            )}
            {item.recommended && (
              <span className="text-blue-500" title="Recomendado">
                <Award className="h-5 w-5" />
              </span>
            )}
            {item.spicy && (
              <span className="text-red-500" title="Picante">
                <Flame className="h-5 w-5" />
              </span>
            )}
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col md:flex-row gap-4">
              {item.image && (
                <div className="md:w-1/3">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
              )}
              {item.description && (
                <div className={item.image ? "md:w-2/3" : "w-full"}>
                  <p className="">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
