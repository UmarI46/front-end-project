import { useEffect, useState } from "react"
import { commentSection } from "../utils/api"


export default function ArticleCommentSection({article_id}) {
    const [isError, setIsError]= useState(false)
    const [isLoading, setIsLoading]= useState(true)
    const [commentSectionData, setCommentSectionData]= useState()

    console.log(article_id)

    useEffect(()=>{
        setIsError(false)
        setIsLoading(true)

        commentSection(article_id)
        .then((response)=>{
            console.log(response.comments)
            setCommentSectionData(response.comments)
            setIsLoading(false)
        })
        .catch((error)=>{
            setIsError(true)
        })
    },[])

    if(isError) return <h1>Error</h1>
    if(isLoading)return <h1>Loading...</h1>

  return (
    <div className="commentSection">
        {commentSectionData.map((comment)=>{
            return (
            <div className="comment" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p id="commentBody">{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <p>Posted On: {comment.created_at}</p>
            </div>
            )
        })}
    </div>
  )
}
