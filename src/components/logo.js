import React, {Component} from 'react'
import comp from '../images/comp.png'
class logo extends Component
{
    constructor()
    {
        super()
        this.state={
            lang:"English",
            scrolled:true,
            b:false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            const pos=window.scrollY<10
            if(pos!==true){this.setState({scrolled:false})}
            else{this.setState({scrolled:true})}
        })
    }
    mon()
    {
        this.setState({b:true})
    }
    mof()
    {
        this.setState({b:false})
    }

    render()
    {
        return(
            <div className={this.state.scrolled ? "main":"small"}>
                <button className="member" onMouseEnter={()=>this.mon()} onMouseLeave={()=>this.mof()} ><pre><i class="fas fa-hat-wizard"></i>     Sign In     <i class="fas fa-angle-down"></i></pre></button>
                <img src={comp} alt="Hotel Logo" className="logo"/>
                <button className="lang"><pre>{this.state.lang}      <i class="fas fa-angle-down"></i></pre></button>
                <button className="lang">My Bookings</button>
            </div>
        )
    }
}
export default logo