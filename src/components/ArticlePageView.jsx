export default function ArticlePageView({articleData}) {
  return (
    <>
      <div className="article">
          <h1>{articleData.title} </h1>
          <div className="articleInfo">
          <p>Author: {articleData.author}</p>
          <p>Posted On: {Date(articleData.created_at)}</p>
          </div>
          <img className="imgArticlePost" src={articleData.article_img_url}/>
          <p id="articleBody">{articleData.body}</p>
      </div>
    </>
  )
}
