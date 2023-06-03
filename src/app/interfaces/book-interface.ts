export interface BookInterface {
    title:string,
    description?:string,
    categoryId?:category,
    authorId?:author,
    statususers?:Array<statususers>,
    reviews?:Array<reviwes>,
    _id:string,
    image?:string

}

interface category{
    name:string|undefined
    _id:string

}

interface author{
    firstName:string,
    LastName:string,
    image:string,
    DateOfBirth:string,
    _id:string

}

interface statususers{
    userId:string,
    status:string
}
interface reviwes{

    rating:number,
    review:string,
    userId:string
}


