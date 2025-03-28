export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: FoodType;
  description?: string;
  image?: string;
  preparationTime?: boolean;
  recommended?: boolean;
  spicy?: boolean;
}

export type FoodType =
  | "hot-drinks"
  | "cold-drinks"
  | "breakfast"
  | "lunch"
  | "dinner"
  | "sandwiches"
  | "tortas"
  | "typical";
