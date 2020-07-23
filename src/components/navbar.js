import React, {Component} from 'react'
import Hotel from './Hotel.js'
import Restaurant from './restaurant.js'
import Wedding from './wedding.js'
import Nightlife from './nightlife.js'
import Review from './review.js'

class navbar extends Component
{
    constructor()
    {
        super()
        this.state={
            scrolled:false,
            col1:'white',
            col2:'white',
            col3:'white',
            col4:'white',
            col5:'white',
            b1:false,
            b2:false,
            b3:false,
            b4:false,
            b5:false
        }
    }
    componentDidMount(){
        this.setState({col1:'grey',b1:true})
        window.addEventListener('scroll',()=>{
            
            const pos=window.scrollY>10
            if(pos!==true){this.setState({scrolled:false})}
            else{this.setState({scrolled:true})}
        })    
    }   
    
    selector(op){
        this.setState({col1:"white",col2:"white",col3:"white",col4:"white",col5:"white",b1:false,b2:false,b3:false,b4:false,b5:false})   
        if(op==="1")this.setState({col1:"grey",b1:true})
        if(op==="2")this.setState({col2:"grey",b2:true})
        if(op==="3")this.setState({col3:"grey",b3:true})
        if(op==="4")this.setState({col4:"grey",b4:true})
        if(op==="5")this.setState({col5:"grey",b5:true})
    }
    
    render()
    {
        return(
            <div className={this.state.scrolled ? "scontainer":"container"}>
            <div className="navbar">
                <button className="room">Room Availability</button>
                <ul className="nav">
                    <li style={{backgroundColor:this.state.col1}} onClick={()=>this.selector("1")}><a>Hotel</a></li>
                    <li style={{backgroundColor:this.state.col2}} onClick={()=>this.selector("2")}><a>Restaurants</a></li>
                    <li style={{backgroundColor:this.state.col3}} onClick={()=>this.selector("3")}><a>Weddings</a></li>
                    <li style={{backgroundColor:this.state.col4}} onClick={()=>this.selector("4")}><a>Nightlife</a></li>
                    <li style={{backgroundColor:this.state.col5}} onClick={()=>this.selector("5")}><a>Reviews</a></li>
                </ul>
            </div>

                {this.state.b1 && <Hotel/>}
                {this.state.b2 && <Restaurant/>}
                {this.state.b3 && <Wedding/>}
                {this.state.b4 && <Nightlife/>}
                {this.state.b5 && <Review/>}
            </div>
        )
    }
}
export default navbar