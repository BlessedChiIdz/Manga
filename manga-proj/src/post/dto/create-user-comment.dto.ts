export class createUserCommentDto {
    title:string
    text:string
    userId:number
    mangaId:number
} 
export class createUserCommentWithParentDto extends createUserCommentDto{
    parentId:number
}