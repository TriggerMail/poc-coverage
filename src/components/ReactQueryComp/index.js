import React, { useState } from 'react';
import NavBar from './NavBar';
import People from './People/People';
import Planets from './Planets/Planets';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export const PAGES = {
    PEOPLE: 'people',
    PLANETS: 'planets'
}

const ReactQueryComp = () => {
    const [page, setPage] = useState(PAGES.PLANETS)
    return ( 
        <>
        <QueryClientProvider client={queryClient}>
        <div>
        <NavBar setPage={setPage}/>
        <div className='content'>
            {page === PAGES.PEOPLE ? <People/> : <Planets/>}
        </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
        </>
     );
}
 
export default ReactQueryComp;