export default function DisplayNewComment({comment}) {
  return (
     <div className="comment" key={comment.comment_id}>
                    <h3>{comment.author}</h3>
                    <p id="commentBody">{comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <p>Posted On: {comment.created_at}</p>
    </div> 
  )
}
