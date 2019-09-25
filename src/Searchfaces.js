import React from 'react';

const Searchfaces = ({searchChange}) => {

    return (

        <div className='pa4'>
            <input type='search' placeholder='Search Faces' className='pa3 ba b--green bg-lightest-blue' onChange={searchChange}/>
        </div>
    );
}

export default Searchfaces; 