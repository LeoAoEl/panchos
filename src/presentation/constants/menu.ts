import type { MenuItem } from "@interfaces/menu";

export const menuItems: MenuItem[] = [
  // Hot Drinks
  {
    id: "1",
    name: "Café Americano",
    price: 35,
    type: "hot-drinks",
    description: "Café espresso con agua caliente añadida.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: true,
    spicy: false,
  },
  {
    id: "2",
    name: "Cappuccino",
    price: 45,
    type: "hot-drinks",
    description: "Espresso con leche vaporizada y espuma de leche.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: false,
  },
  {
    id: "3",
    name: "Chocolate Caliente",
    price: 40,
    type: "hot-drinks",
    description: "Chocolate derretido con leche caliente y crema batida.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: false,
    spicy: false,
  },

  // Cold Drinks
  {
    id: "4",
    name: "Frappé de Caramelo",
    price: 55,
    type: "cold-drinks",
    description: "Café helado con caramelo, leche y hielo.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: false,
  },
  {
    id: "5",
    name: "Limonada",
    price: 35,
    type: "cold-drinks",
    description: "Limón fresco, agua y azúcar.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: false,
    spicy: false,
  },

  // Breakfast
  {
    id: "6",
    name: "Huevos Rancheros",
    price: 85,
    type: "breakfast",
    description:
      "Huevos fritos sobre tortilla con salsa ranchera, acompañados de frijoles.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: true,
  },
  {
    id: "7",
    name: "Avena con Frutas",
    price: 65,
    type: "breakfast",
    description: "Avena cocida con leche, canela y frutas de temporada.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: true,
    spicy: false,
  },

  // Lunch
  {
    id: "8",
    name: "Enchiladas Verdes",
    price: 95,
    type: "lunch",
    description:
      "Tortillas rellenas de pollo, bañadas en salsa verde con crema y queso.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: true,
  },
  {
    id: "9",
    name: "Sopa de Tortilla",
    price: 75,
    type: "lunch",
    description:
      "Caldo de tomate con tiras de tortilla, aguacate, queso y chile pasilla.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: false,
    spicy: true,
  },

  // Dinner
  {
    id: "10",
    name: "Chiles Rellenos",
    price: 110,
    type: "dinner",
    description:
      "Chiles poblanos rellenos de queso, bañados en salsa de tomate.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: true,
  },
  {
    id: "11",
    name: "Pollo a la Parrilla",
    price: 125,
    type: "dinner",
    description:
      "Pechuga de pollo a la parrilla con verduras asadas y puré de papa.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: false,
    spicy: false,
  },

  // Sandwiches
  {
    id: "12",
    name: "Club Sándwich",
    price: 85,
    type: "sandwiches",
    description:
      "Pan tostado con pollo, tocino, jamón, queso, lechuga y tomate.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: true,
    spicy: false,
  },
  {
    id: "13",
    name: "Sándwich Vegetariano",
    price: 75,
    type: "sandwiches",
    description:
      "Pan integral con aguacate, queso panela, lechuga, tomate y pepino.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: false,
    spicy: false,
  },

  // Tortas
  {
    id: "14",
    name: "Torta de Milanesa",
    price: 90,
    type: "tortas",
    description:
      "Pan telera con milanesa de res, aguacate, frijoles, queso, lechuga y tomate.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: false,
  },
  {
    id: "15",
    name: "Torta de Jamón",
    price: 75,
    type: "tortas",
    description: "Pan telera con jamón, queso, aguacate, lechuga y tomate.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: false,
    recommended: false,
    spicy: false,
  },

  // Typical Food
  {
    id: "16",
    name: "Pozole",
    price: 110,
    type: "typical",
    description:
      "Caldo tradicional con maíz cacahuazintle y carne de cerdo, acompañado de lechuga, rábano y tostadas.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: true,
  },
  {
    id: "17",
    name: "Tamales",
    price: 25,
    type: "typical",
    description:
      "Masa de maíz rellena de mole con pollo, envuelta en hoja de maíz.",
    image: "/placeholder.svg?height=200&width=200",
    preparationTime: true,
    recommended: true,
    spicy: true,
  },
];
