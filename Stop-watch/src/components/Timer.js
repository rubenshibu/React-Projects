import React, {Component} from 'react';

class Timer extends Component{

    clickReset= () =>{
        this.setState({
            clock: 0,
        })
    }

    componentDidMount(){
        this.timer= setInterval(this.ticker, 1000)
        console.log(this.timer);
    }
    
    ticker = () => {
        this.setState({
            clock: new Date() - this.props.start,
        });
    }

    constructor(props){
        super(props);
        this.state = {
            clock:0,
        };
        this.ticker = this.ticker.bind(this);
    }

    render(){
        var clock = Math.round(this.state.clock / 1000)
        return(

            <div>
                <p>You have been on this webpage since:</p><br/>
                <span>{clock}</span>
                <p>Seconds </p><br/>
                <button onClick={this.clickReset}>Reset</button>

            </div>

        );
    }
}

export default Timer;