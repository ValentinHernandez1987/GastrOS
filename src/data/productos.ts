export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Americano",
    precio: 45,
    categoria: "Café",
  },
  {
    id: 2,
    nombre: "Espresso",
    precio: 40,
    categoria: "Café",
  },
  {
    id: 3,
    nombre: "Capuccino",
    precio: 65,
    categoria: "Café",
  },
  {
    id: 4,
    nombre: "Latte",
    precio: 70,
    categoria: "Café",
  },
  {
    id: 5,
    nombre: "Chocolate",
    precio: 60,
    categoria: "Bebidas",
  },
  {
    id: 6,
    nombre: "Tamal Chipilín",
    precio: 45,
    categoria: "Tamales",
  },
  {
    id: 7,
    nombre: "Tamal Mole",
    precio: 55,
    categoria: "Tamales",
  },
  {
    id: 8,
    nombre: "Cheesecake",
    precio: 80,
    categoria: "Postres",
  },
];