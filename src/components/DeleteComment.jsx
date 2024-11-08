import { deleteComment } from "../utils/api"
export default function DeleteComment({comment_id}) {

    function removeComment(){
        const deleteConformation= document.getElementById(`${comment_id}`)
        deleteConformation.style.display="block"
        deleteComment(comment_id)
    }

  return (
    <>
    <h1 id={comment_id} style={{display:"none"}}>DELETED</h1>
    <button id="deleteComment" onClick={removeComment}>Delete</button>
    </>
  )
}