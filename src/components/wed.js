import React from 'react'
function wed(props)
{
    const b=props.b;
    return(
        <div className='wed'>
            <div className="inner">
                <img src={props.i}/>
                <div className='abs'>
                    <h1>{props.n}</h1>
                    <hr/>
                        <h3> {b ? <i class="fas fa-hotel"></i>:<i class="fas fa-tree"></i>} {props.l}<br/>
                        <i class="fas fa-users"></i>{props.c}<br/>
                        <i class="fas fa-rupee-sign"></i>{props.cost}
                        </h3>
                    <hr/>
                    <p>{props.desc}</p>

                </div>
            </div>
        </div>
    )
}
export default wed