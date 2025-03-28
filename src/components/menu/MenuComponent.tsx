import { MenuTabs } from "./MenuTabs";
import { menuItems } from "@constants/menu";
import { Clock, Award, Flame } from "lucide-react";

export default function MenuComponent() {
  return (
    <div>
      <div className=" dark:bg-menu bg-menuDark rounded-lg shadow-md p-4 md:p-6">
        <div className="flex flex-wrap justify-center  gap-4 mb-6">
          <div className="flex items-center ">
            <span className="text-amber-500 mr-1">
              <Clock className="h-4 w-4 inline" />
            </span>
            <span>Tiempo de preparación</span>
          </div>
          <div className="flex items-center  ">
            <span className="text-blue-500 mr-1">
              <Award className="h-4 w-4 inline" />
            </span>
            <span>Recomendado</span>
          </div>
          <div className="flex items-center  ">
            <span className="text-red-500 mr-1">
              <Flame className="h-4 w-4 inline" />
            </span>
            <span>Picante</span>
          </div>
        </div>

        <MenuTabs items={menuItems} />
      </div>
    </div>
  );
}
