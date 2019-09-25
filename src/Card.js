import React from 'react';



const Card = (props) => {
    return (
        <div className='bg-washed-yellow tc dib br3 pa3 ma2 grow bw2'>
            <img src={`https://api.adorable.io/avatars/265/happy@${props.name}.png`} alt='happy' />
            <h1>{props.name}</h1>
            <p>{props.coment}</p>

        </div>
    );
}

export default Card;