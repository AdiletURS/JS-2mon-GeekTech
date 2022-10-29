import React, { Component } from 'react'

class AboutUs extends Component {
    constructor(props){
       super(props) 
       this.state ={
        a: false,        
       }
    }

    handleChange = () => {
        this.setState({
            a: !this.state.a
            })
        console.log(this.state.a)
            }
  render() {
    return (
     <>
     {this.state.a 
     ?
     <p>текст</p>
    :
    false
    }
     <button onClick={this.handleChange}>кнопка</button>
     </>
    )
  }
}

export default AboutUs




