export interface BookInterface {
    title:string,
    description?:string,
    categoryId:string|category,
    authorId:string|author,
    statususers?:Array<statususers>,
    reviews?:Array<reviwes>,
    _id?:string

}

interface category{
    name:string
    _id:string

}

interface author{
    firsName:string,
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