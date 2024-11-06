export default function ArticleCommentSectionView({commentSection,comment_count}) {
  return (
    <div className="commentSection">
        <h2>Comments: {comment_count}</h2>
        {commentSection.map((comment)=>{
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
