
//Una interfaz define como están modelados los datos
export default interface ProductsI{
   readonly id: number,
    name: string,
    category: string,
    images: Array<String>, //link
    price: number,
    discount: number,
   //types: Array<string>,
}