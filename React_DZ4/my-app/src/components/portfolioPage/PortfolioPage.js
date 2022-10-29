import React, { Component } from 'react'



class PortfolioPage extends Component {
    constructor(props){
        super(props) 
        this.state ={
         works: []       
        }
     }

     
    handleClick = () => {
        this.setState({
            works: ["Work1", "Work2", "Work3",'Wokr4']
            })
        console.log(this.state.works)
            }
 




  render() {
    return (
        <>
        <button onClick={this.handleClick}>get</button>
        <ul>
            {
              this.state.works.map(elem => <li>{elem}</li>)
            }
        </ul>
      </>
    )
  }
}

export default PortfolioPage

