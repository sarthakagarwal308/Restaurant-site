import React from 'react'
function eat(props)
{
    return(
        <div className='eat'>
            <div className="img-container">
                <div className="he"><img className="eatimg" src={props.i}/></div>
                <p style={{textTransform:'uppercase'}}>{props.cui}&nbsp; <div class='cir'></div>&nbsp; {props.rate}</p>
                <h3>{props.ti}</h3>
                <p>{props.des}</p>
                <button>{props.bt}</button>
            </div>

        </div>
    )
}
export default eat