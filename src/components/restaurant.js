import React from 'react'
import Search from './search.js'
import Eat from './eat.js'
import r1 from '../images/r1.jpg'
import r2 from '../images/r2.jpg'
import r3 from '../images/r3.jpg'
import r4 from '../images/r4.jpg'
import r5 from '../images/r5.jpg'
import r6 from '../images/r6.jpg'
import r8 from '../images/r8.jpg'
function restaurant()
{
    return(
        <div className="restaurant">
            <div className="desc">
                <h1>Restaurants</h1>
                <p>We are proud of Bellagio dining’s famous names, freshest ingredients imported daily and lavish settings making each bite an experience to be savored—but we offer something far greater to place us in a class all our own.</p>
            </div>
            <Search/>
            <div class="t">
                <div style={{display:'flex'}}>
                <Eat i={r1} cui='INDIAN ' rate=' Rs 1400 for 2' ti='Quick Eats' des='Need a quick bite? Then we suggest our most casual fare. A light snack stop for any time of day.' bt='Book a Table'/>
                <Eat i={r2} cui='CHEESY ' rate=' Rs 400 for 1' ti='Magic Blast' des='Treat yourself with Rs 400 in food and beverage credit, per night. Quality is all that matters.' bt='Book a Table'/>
                <Eat i={r3} cui='ITALIAN ' rate=' Rs 1000 for 2' ti='Italian Code' des='Tour the bolder side of India with innovative small plates from our decorated chef.' bt='Book a Table'/>
                <Eat i={r4} cui='CHEESY ' rate=' Rs 700 for 1' ti='Magic Bites' des='The best brunch in India has arrived! Magic Bites will satisfy your every craving all day every day.' bt='Book a Table'/>
                </div><div className="w">
                <Eat i={r5} cui='INDIAN ' rate=' Rs 1800 for 2' ti='The Wand Club' des='An elegant restaurant featuring contemporary Indian cuisine. A finger licking experience.' bt='Book a Table'/>
                <Eat i={r3} cui='DESSERT ' rate=' Rs 500 for 2' ti='The Sweet Code' des='A perfect reason to save a part of tummy for sweet. A heavenly place for getting your favourite desserts.' bt='Book a Table'/>
                <Eat i={r6} cui='AMERICAN ' rate=' Rs 900 for 2' ti='SteakHouse' des='A perfect place where you get juicy and fresh steak. A delicacy you will never forget.' bt='Book a Table'/>
                <Eat i={r8} cui='ASIAN ' rate=' Rs 1500 for 2' ti='The Noodles Hub' des='Contemporary dining, featuring traditional noodle dishes from Malaysia, Thailand, Japan, China and Vietnam.' bt='Book a Table'/></div>
            </div>
        </div>
    )
}
export default restaurant