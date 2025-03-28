import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FoodCard } from "./FoodCard";
import type { MenuItem, FoodType } from "src/presentation/interfaces/menu";
import {
  Coffee,
  CoffeeIcon as CoffeeOff,
  Sunrise,
  Sun,
  Moon,
  Sandwich,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

interface MenuTabsProps {
  items: MenuItem[];
}

interface TabInfo {
  value: FoodType;
  label: string;
  icon: React.ReactNode;
}

export function MenuTabs({ items }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabInfo[] = [
    {
      value: "hot-drinks",
      label: "Bebidas Calientes",
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      value: "cold-drinks",
      label: "Bebidas Frías",
      icon: <CoffeeOff className="h-4 w-4" />,
    },
    {
      value: "breakfast",
      label: "Desayunos",
      icon: <Sunrise className="h-4 w-4" />,
    },
    { value: "lunch", label: "Comidas", icon: <Sun className="h-4 w-4" /> },
    { value: "dinner", label: "Cenas", icon: <Moon className="h-4 w-4" /> },
    {
      value: "sandwiches",
      label: "Sándwiches",
      icon: <Sandwich className="h-4 w-4" />,
    },
    {
      value: "tortas",
      label: "Tortas",
      icon: <Utensils className="h-4 w-4" />,
    },
    {
      value: "typical",
      label: "Comida Típica",
      icon: <UtensilsCrossed className="h-4 w-4" />,
    },
  ];

  return (
    <Tabs
      selectedIndex={activeTab}
      onSelect={(index) => setActiveTab(index)}
      className="react-tabs"
    >
      <div className="mb-6 overflow-x-auto pb-2">
        <TabList className="flex w-full justify-start mb-0 border-b-0 whitespace-nowrap">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.value}
              className="flex items-center justify-center px-4 py-3 cursor-pointer  hover:text-secondary  transition-colors focus:outline-none "
              selectedClassName=" text-secondary dark:text-accent border-b-2 border-secondary dark:border-accent font-medium"
            >
              <div className="flex flex-col md:flex-row items-center">
                <span className="mb-1 md:mb-0 md:mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            </Tab>
          ))}
        </TabList>
      </div>

      {tabs.map((tab, index) => (
        <TabPanel key={tab.value}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items
              .filter((item) => item.type === tab.value)
              .map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
