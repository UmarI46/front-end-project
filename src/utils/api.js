import axios from 'axios'

const api =axios.create({baseURL:"https://back-end-project-ajfq.onrender.com/api"})

export const getAllArticles= () => {
    return api.get(`/articles`)
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            return error
        })
}

export const specificArticle= (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            return error
        })
}

export const commentSection= (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            return error
        })
}