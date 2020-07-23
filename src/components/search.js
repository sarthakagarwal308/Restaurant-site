import React from 'react'
function search()
{
    return(
        <div className="search">
            <p>Filter By:</p>
            <input type='radio' id='open'/>
            <label for='open'>Open Now</label>
            <button className="norm">Price<i class="fas fa-angle-down"></i></button>
            <button className="norm">Cuisine<i class="fas fa-angle-down"></i></button>
            <button className="norm">Meal<i class="fas fa-angle-down"></i></button>
            <button id="clear">Clear All</button>
        </div>
    )
}
export default search