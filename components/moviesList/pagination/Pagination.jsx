'use client'

import Pagination from '@mui/material/Pagination'
import {useState, useEffect} from 'react'
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function PaginationComponent({page}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [pageData, setPageData] = useState(page)

    function handlePage(_, currentPage){
        const params = new URLSearchParams(searchParams)
        setPageData(currentPage)
        params.set('page', currentPage)
        router.push(`${pathname}?${params}`)
    }

  return (
    <div className='pagination'>
        <Pagination sx={{marginBottom: 5}} size="large" count={50} page={pageData} color="primary" onChange={handlePage}/>
    </div>
  )
}

export default PaginationComponent