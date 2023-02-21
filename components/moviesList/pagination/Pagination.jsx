import Pagination from '@mui/material/Pagination'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'


function PaginationComponent({page}) {
    const router = useRouter();
    const searchParams = router.query
    const pathname = router.pathname

    const [pageData, setPageData] = useState(page)

    useEffect(()=>{
      setPageData(page)
    }, [page])

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