import Link from 'next/link'
import Image from 'next/image'

function movies({data, categoryQuery}){
    return(
        <div className="movies-list">
            <ul>
                {
                    data?.map((item, index)=>(
                        <li key={index}>
                            <Link href={`/${categoryQuery}/${item.id}`}>
                                <Image src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} width="600"  height="900" alt="logo" loading="eager" priority={true}/>
                                <h2>{item.title || item.name}</h2>
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default movies