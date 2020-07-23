import React from 'react'
function room(props)
{
    return(
        <div className="roo">
            <div className="cont">
                <img src={props.i1}/>
                <img src={props.i2}/>
                <img src={props.i3}/>
            </div>
            <h2>{props.title}</h2>
            <pre>{props.size}       {props.bed}       {props.max}</pre>
            <p>{props.desc}</p>
            <h5><i class="far fa-check-circle"></i>{props.pro1}</h5>
            <h5><i class="far fa-check-circle"></i>{props.pro2}</h5>
            <h5><i class="far fa-check-circle"></i>{props.pro3}</h5>
            <button className='b1'>CHECK RATES</button>
            <button className='b2'>Compare<i class="fas fa-arrow-right"></i></button>
        </div>
    )
}
export default room