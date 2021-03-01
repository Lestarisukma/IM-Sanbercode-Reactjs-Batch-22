import React, {Component} from 'react'
import Clock from './Clock'

class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        text: null,
        visibleTime: true
      }
      this.hideTimer.bind(this)
    }
    componentDidMount(){
        if (this.props.start !== undefined){
          this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
          () => this.tick(),
          1000
        ); 
      }

    componentDidUpdate(){
        if(this.state.time === 0 && this.state.visibleTime ){
            this.componentWillUnmount()
            this.hideTimer()
        }
    }

    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          time: this.state.time - 1
        });
    }
    
    hideTimer(){
        this.setState({visibleTime: !this.state.visibleTime})
    }
    render(){
        if(this.state.visibleTime){
            return(
                <div style={{display:"inline-flex",marginLeft:"65px"}}>
                    <>
                        <Clock />
                    </>
                    <h1 style={{marginLeft:"400px"}}>
                        Hitung Mundur: {this.state.time}
                    </h1>
                </div> 
            )
        }else{
            return (
                <>
                    {this.componentDidUpdate()}
                   
                </>
            ) 
        }
    }
  }
  export default Timer 