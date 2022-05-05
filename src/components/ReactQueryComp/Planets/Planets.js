import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
    const planets =  await fetch('https://swapi.dev/api/planets');
    return planets.json();
}

const Planets = () => {

    const { isLoading, isError, data, error } = useQuery('planets', fetchPlanets, {
        cacheTime: 10000, // Cache data for how much time
        staleTime: 0 // after how much time data becomes stale
    });
    console.log('planets',{data, isError,isLoading, error})
    return <div>
        <h2>Planets</h2>
        {JSON.stringify({data, isError,isLoading, error})}
        <div>
            {data ? <div>
                {
                    data.results.map(({name, diameter}) => {
                        return <Planet key={name} name={name} diameter={diameter}/>
                    })
                }
            </div> :  null}
        </div>
    </div>
}
 
export default Planets;