import axios from 'axios'
import { cache } from 'react'

let key = process.env.NEXT_PUBLIC_TMDB_API

export const getCategoryList = async (category, genre, page)=>{
    let url = `https://api.themoviedb.org/3/${category}/${genre}?api_key=${key}&language=en-US&page=${page}`
    const res = await axios.get(url, { cache: 'no-store'})
    return res.data
}


export const getMovieDetail = async (category, id)=>{
    let url = `https://api.themoviedb.org/3/${category}/${id}?api_key=${key}&language=en-US`
    const res = await axios.get(url, { cache: 'no-store'})
    return res.data
}

export const getMovieCredits = async (category, id)=>{
    let url = `https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${key}&language=en-US`
    const res = await axios.get(url, { cache: 'no-store'})
    return res.data
}

export const getMovieSimilar = async (category, id)=>{
    let url = `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${key}&language=en-US`
    const res = await axios.get(url, { cache: 'no-store'})
    return res.data
}
