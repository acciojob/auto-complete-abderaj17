  import React, { useState } from 'react'


const fruits = ["apple", "cherry", "banana", "data", "elderberry", "fig"];
const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredFruits, setFilteredFruits] = useState([]);

    const handleChange = (e)=>{
        const value = e.target.value;
        setSearchText(value);


    const filtered = fruits.filter((fruit)=>
    fruit.toLowerCase().includes(value.toLowerCase())
);
setFilteredFruits(filtered);
}


  return (
    <div>
        <label htmlFor='search'><strong>Search: </strong>
        <input type='text' onChange={handleChange}/>
       </label>
       {searchText && (
        <ul>
            {filteredFruits.length > 0 ? (
                filteredFruits.map((fruit, index)=> <li key={index}>
                    {fruit}
                </li>)
            ) : (
                <li>No match found</li>
            )}
        </ul>
       )}
    </div>
  );
}

export default Search;