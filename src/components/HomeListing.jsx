import { Link } from "react-router-dom"

export default function HomeListing({allArticles}) {
  return (
    <div className="homeListing">
        {allArticles.map((article)=>{
            return (
                <div className="box" key={article.article_id}>
                    <Link to= "/articles/:article_id" state={{article_id:article.article_id}}>{article.title} </Link>
                    <br/>
                    <img className="imgHomeList" src={article.article_img_url}/>
                    <p>{article.author}</p>
                    <p>votes: {article.votes}</p>
                </div>
            )
        })}
    </div>
  )
}
