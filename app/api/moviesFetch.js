import axios from 'axios'
import { cache } from 'react'

let key = process.env.NEXT_PUBLIC_TMDB_API

export const getCategoryList = async (category, genre, page)=>{
    let url = `https://api.themoviedb.org/3/${category}/${genre}?api_key=${key}&language=en-US&page=${page}`
    const res = await axios.get(url, { cache: 'no-store'})
    return res.data
}
