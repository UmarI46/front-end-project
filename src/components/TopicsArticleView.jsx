import { Link, useParams } from "react-router-dom"

export default function TopicsArticleView({allTopics, allArticles}) {
    const {topic}=useParams()
    return (
        <div>
        {allTopics.map((topicData) => {
            if(topicData.slug===topic){
          return(
            <div className="topicListing" key={topicData.slug}>
              <h1 id="topicName">{topicData.slug}</h1>
              <h2 id="topicDescription">{topicData.description}</h2>
              {allArticles.map((article)=>{
                  if(article.topic===topicData.slug){
                  return (
                    <div className="homeListing">
                    <div className="box" key={article.article_id}>
                        <Link to= {`/articles/${article.article_id}`} >{article.title} </Link>
                        <br/>
                        <img className="imgHomeList" src={article.article_img_url}/>
                        <p>{article.author}</p>
                        <p>votes: {article.votes}</p>
                    </div>
                    </div>
                )
                }
            })}
            </div>
            
          )}
        })}
        </div>
      )
}
