import React from 'react';
import Card from './Card';



const Cardlist = ({faces}) => {
    const cardFaces = faces.map((main, i) => {
        return <Card key={i} name={faces[i].name} coment={faces[i].coment} />
    });
    return (
        <div className='tc'>
            {cardFaces}
        </div>
    )
}

export default Cardlist;