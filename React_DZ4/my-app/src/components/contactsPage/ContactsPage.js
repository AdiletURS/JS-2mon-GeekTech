import React, { Component } from 'react'

 class ContactsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }
    
    ChangeInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    addClick = () => {
        console.log(this.state.username)
    }
    clearClick = () => {
        this.setState({
            username: ''
            })
        }

  render() {
    return (
        <>  
            <input  type="text" 
                    placeholder="name"
                    value={this.state.username}
                    onChange={this.ChangeInput}/>
            <button onClick={this.addClick}>add</button>
            <button onClick={this.clearClick}>clear</button>
      </>
    )
  }
}
export default ContactsPage