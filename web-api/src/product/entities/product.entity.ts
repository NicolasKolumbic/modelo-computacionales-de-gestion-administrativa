// Entidades relacionadas con la BASE DE DATOS, cada una representa una COLLECION de la Base MongoDB 
export class Product {
    id: string;       
    description: string;
    price:     number;
    stock: number;
    category: {id: string; description: string}
}
