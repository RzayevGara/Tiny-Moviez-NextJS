'use client'

import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
    return (
        <div className='loading-skeleton main-content'>
            <ul>
                {
                    Array(20).fill().map((_, index)=>(
                        <li key={index}>
                            <Skeleton className='skeleton-img' sx={{ bgcolor: 'grey.800' }} animation="wave" variant="rounded"/>
                            <Skeleton animation="wave" variant="text" sx={{ fontSize: '3rem', bgcolor: 'grey.800' }} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
  }