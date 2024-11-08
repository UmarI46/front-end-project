import { useContext, useEffect, useState } from "react"
import { sortByContext } from "../contexts/SortByProvider"
import { orderByContext } from "../contexts/OrderByProvider"

export default function ArticleSortBy({allArticles}) {
    const {setPickSort}= useContext(sortByContext)
    const {pickSort}= useContext(sortByContext)
    const {setPickOrder}= useContext(orderByContext)
    const {pickOrder}= useContext(orderByContext)

    const handlePickChange= (event)=>{
        setPickSort(event.target.value)
    }
    const handleOrderChange= (event)=>{
        setPickOrder(event.target.value)
    }

    useEffect(()=>{},[pickSort, pickOrder])

  return (
    <>
        <form>
            <label>
                Sort By:
                <select value={pickSort} onChange={handlePickChange}>
                    <option value="created_at">Date</option>
                    <option value="author">Author</option>
                    <option value="votes">Votes</option>
                </select>
            </label>

            <br/>

            <label>
                Order By:
                <select value={pickOrder} onChange={handleOrderChange}>
                    <option value="DESC">Descending</option>
                    <option value="ASC">Ascending</option>
                </select>
            </label>
        </form>

    
    </>
  )
}
