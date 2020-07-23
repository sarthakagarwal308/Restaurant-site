import React from 'react'
import Wed from './wed.js'
import w1 from '../images/w1.jpeg'
import w2 from '../images/w2.jpg'
import w3 from '../images/w3.jpg'
import w4 from '../images/w4.jpg'
function wedding(props)
{
    return(
        <div className='wedding'>
            <Wed i={w1} n="The Royal Chandelier" b={true} l="Wedding Hall" c="500" cost="90000" desc="The Big Pumpkin at The Club offers an exquisite outdoor patio for intimate wedding ceremonies. The Patio accommodates a maximum of 500 guests set theatre style and features relaxing background scenery of the waterfall. Outdoor ceremony packages include set up of tables and chairs, aisle runner, gazebo, white folding chairs and fruit infused water stations for your guests’ enjoyment."/>
            <Wed i={w3} n="The Big Pumpkin" b={false} l="Outdoor Garden Plot" c="400" cost="60000" desc="The Big Pumpkin at The Club offers an exquisite outdoor patio for intimate wedding ceremonies. The Patio accommodates a maximum of 400 guests set theatre style and features relaxing background scenery of the waterfall. Outdoor ceremony packages include set up of tables and chairs, aisle runner, gazebo, white folding chairs and fruit infused water stations for your guests’ enjoyment."/>
            <Wed i={w2} n="The Story Palace" b={true} l="Wedding Hall" c="450" cost="75000" desc="The Big Pumpkin at The Club offers an exquisite outdoor patio for intimate wedding ceremonies. The Patio accommodates a maximum of 450 guests set theatre style and features relaxing background scenery of the waterfall. Outdoor ceremony packages include set up of tables and chairs, aisle runner, gazebo, white folding chairs and fruit infused water stations for your guests’ enjoyment."/>
            <Wed i={w4} n="The Green Meadow" b={false} l="Outdoor Garden Plot" c="500" cost="59000" desc="The Green Meadow at The Club offers an exquisite outdoor patio for intimate wedding ceremonies. The Patio accommodates a maximum of 500 guests set theatre style and features relaxing background scenery of the waterfall. Outdoor ceremony packages include set up of tables and chairs, aisle runner, gazebo, white folding chairs and fruit infused water stations for your guests’ enjoyment."/>
        </div>
    )
}
export default wedding