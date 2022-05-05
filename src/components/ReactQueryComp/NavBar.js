import React from 'react';
import {PAGES} from './index';
 
const NavBar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage(PAGES.PLANETS)}>Planets</button>
            <button onClick={() => setPage(PAGES.PEOPLE)}>People</button>
        </nav>
     );
}
 
export default NavBar;