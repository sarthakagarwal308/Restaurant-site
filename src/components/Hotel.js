import React, { useState } from 'react'
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import Room from './room.js'
import r11 from '../images/r11.jpg'
import r12 from '../images/r12.jpg'
import r13 from '../images/r13.jpg'
import r21 from '../images/r21.jpg'
import r22 from '../images/r22.jpg'
import r23 from '../images/r23.jpg'
import r31 from '../images/r31.jpg'
import r32 from '../images/r32.jpg'
import r33 from '../images/r33.jpg'

function Hotel(){
    const [ x , setX ] = useState(0);
    const prev= ()=>{
        setX(x+100);
        console.log(x)
    }
    const next = ()=>{
        setX(x-100);
        console.log(x)
    }
    return(
        <div className="slide">
            <div className="slider">
                <button className="prev" onClick={prev}><i class="fas fa-angle-left fa-3x"></i></button>
                <button className="next" onClick={next}><i class="fas fa-angle-right fa-3x"></i></button>
                <div style={{transform:`translateX(${x}%)`}} className='contain'>
                    <img src    ={s3} alt="image"/>
                    <img src={s1} alt="image"/>
                    <img src={s2} alt="image"/>
                    <img src={s3} alt="image"/>
                    <img src={s1} alt="image"/>
                </div>
            </div>
            <div className="roo-container">
                <Room i1={r11} i2={r12} i3={r13} title="Basic Suite" size="470 sq. ft" bed="1 King Bed" max="Max Guest 2" pro1="Air Contidioned" pro2="24-hour in-room dining" pro3="Exclusive Comfort Pillow and Quilts" desc="Enjoy a warm and comforting beds and a fresh, natural aesthetic in these timeless suite rooms.Customize your stay with mood lighting, individual climate controls and reading lights, plus automatic drape and sheer controls." />
                <Room i1={r21} i2={r22} i3={r23} title="Deluxe Suite" size="500 sq. ft" bed="2 Queen" max="Max Guest 4" pro1="Air Conditioned" pro2="24-hour in-room dining" pro3="Fountain View from Room" desc="With a Fountain View these rooms offer beautiful vantage points . Inside, relax in impeccable surroundings, featuring a rich green tea and plum, or indigo and platinum, palette, with a marble foyer and eucalyptus furnishings." />
                <Room i1={r31} i2={r32} i3={r33} title="Cottage Suite" size="670 sq. ft" bed="2 King Bed" max="Max Guest 5" pro1="Air Conditioned" pro2="24-hour in room dining" pro3="Complemetary beakfast and dinner"  desc="Enjoy prime vantage points to view the famous Mountains. Have a little more space to unwind and enjoy panoramic views." />
            </div>
        </div>
    )
}
export default Hotel