import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from "./UserTable";
import HelloWorld from './HelloWorld';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {id: 1, name: 'jackie', sex: 'M', age: 18},
                {id: 3, name: 'darren', sex: 'M', age: 18},
                {id: 4, name: 'scott', sex: 'M', age: 18},
            ]
        };
    }

    saveUser = (user) => {
        const updatedUsers = this.state.users.map(u => {
            return u.id === user.id ? {...user} : u;
        });
        this.setState({users: updatedUsers});
    };

    render() {
      /*  if(true){
            return <HelloWorld/>
        }*/
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                {/*<HelloWorld name={"jackie"}/>*/}
                <UserTable users={this.state.users} saveUser={this.saveUser}/>
            </div>
        );
    }
}

export default App;
