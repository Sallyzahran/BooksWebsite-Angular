export interface Category {


    _id :any
    name : string;
}


export interface Book {

    title:string,
    description?:string,
    categoryId?:Category,
 
    reviews?:Array<reviwes>,
    _id:string,
    image?:string
}

interface reviwes{

    rating:number,
    review:string,
    userId:string
}