export default function ArticlePageView({articleData}) {
  return (
    <div className="article">
        <h1>{articleData.title} </h1>
        <div className="articleInfo">
        <p>Author: {articleData.author}</p>
        <p>Posted On: {articleData.created_at}</p>
        <p>votes: {articleData.votes}</p>
        </div>
        <img className="imgArticlePost" src={articleData.article_img_url}/>
        <p>{articleData.body}</p>
        <div className="articleEnd">
        <h2>Comments: {articleData.comment_count}</h2>
        <button>Up Vote</button>
        <button>Down Vote</button>
        </div>
    </div>
  )
}
