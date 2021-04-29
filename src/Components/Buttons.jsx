import React from 'react';

const Button=(props)=>{
    const handleClick=()=>props.onClickFunction(props.increment)
    return(
        <div>
            <Button onClick={handleClick} >
               *{props.increment}
            </Button>
        </div>
    )
}

export {Button};