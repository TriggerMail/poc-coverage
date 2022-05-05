import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
    const people =  await fetch('https://swapi.dev/api/people');
    return people.json();
}

const People = () => {

    const { isLoading, isError, data, error } = useQuery('people', fetchPeople);
    console.log('people', { isLoading, isError, data, error });
    return <div>
        <h2>People</h2>
        <div>
            {data ? <div>
                {
                    data.results.map(({name, height}) => {
                        return <Person key={name} name={name} height={height}/>
                    })
                }
            </div> :  null}
        </div>
    </div>
}
 
export default People;