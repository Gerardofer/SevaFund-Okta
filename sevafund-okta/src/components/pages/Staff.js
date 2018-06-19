import React, {Component} from 'react';

class Staff extends Component {
    state = {
        currentUserName: "",
        currentUserEmail: ""
    }
    
    componentDidMount(){
        const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        })
    }
    
    render(){
        const { currentUserName, currentUserEmail } = this.state;
        return(
            <div className="jumbotron">
                <h1>Hello { currentUserName }</h1>
                <p>Email: { currentUserEmail }</p>
                <p>Welcome to your portal</p>
            </div>
        );
    }
}

export default Staff;