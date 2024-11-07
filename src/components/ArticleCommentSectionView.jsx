import { useContext, useState } from "react"
import { usernameContext } from "../contexts/UsernameProvider"
import DeleteComment from "./DeleteComment"
export default function ArticleCommentSectionView({commentSection,comment_count}) {
  const {username}= useContext(usernameContext)
  const [isOriginalCommenter, setIsOriginalCommenter]= useState(false)
  return (
    <div className="commentSection">
        <h2>Comments: {comment_count}</h2>

        {commentSection.map((comment)=>{

          if(username===comment.author){
            return (
              <div className="comment" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p id="commentBody">{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <p>Posted On: {comment.created_at}</p>
                <DeleteComment comment_id={comment.comment_id}/>
            </div>
            )
          }
          else{
            return (
              <div className="comment" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p id="commentBody">{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                <p>Posted On: {comment.created_at}</p>
            </div>
            )
          }

        })}
    </div>
  )
}

