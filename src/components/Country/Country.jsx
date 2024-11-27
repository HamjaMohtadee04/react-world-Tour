import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
   const {name,flags,population,area,capital,cca3} = country

   const [visited,setVisited] = useState(false)
   const handleVisited =()=>{
    setVisited(!visited)
   }


    return (
        <div className={`Country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited ? 'purple' : 'white'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital:{capital}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>code:{cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add visited Flags:</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'i have visited this country' : 'i want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry ={handleVisitedCountry}>
            </CountryDetail>
        </div>
    );
};

export default Country;