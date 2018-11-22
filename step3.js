import React from 'react';

export default function UserTable(props) {
    return (
        <table>
            <THead titles={["name", "sex", "age"]}/>
            <TBody users={props.users} saveUser={props.saveUser}/>
        </table>
    );
}

export function THead(props) {
    return (
        <thead>
        <tr>
            {props.titles.map((title) => {
                return <th key={title}>{title}</th>
            })}
            <th>operation</th>
        </tr>
        </thead>
    );
}

export class TBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    editUser = (userId, user) => {
        this.setState({[userId]: {...user}});
    }
    updateUserInfo = (userId, field) => {
        return (e) => {
            const value = e.target.value;
            this.setState((state) => {
                const user = state[userId];
                return {[userId]: {...user, [field]: value}};
            });
        };
    }
    saveUser = (userId) => {
        const user = this.state[userId];
        if (user === undefined) {
            return;
        }
        this.props.saveUser(user);
        this.setState(state => {
            return {...state, [userId]: undefined};
        });
    }

    render() {
        return (
            <tbody>
            {
                this.props.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{this.state[user.id] ? <input onChange={this.updateUserInfo(user.id, 'name')} defaultValue={user.name}/> : user.name}</td>
                            <td>{this.state[user.id] ? <input onChange={this.updateUserInfo(user.id, 'sex')} defaultValue={user.sex}/> : user.sex}</td>
                            <td>{this.state[user.id] ? <input onChange={this.updateUserInfo(user.id, 'age')} defaultValue={user.age}/> : user.age}</td>
                            <td>
                                <button onClick={() => {
                                    this.editUser(user.id, user)
                                }}>edit
                                </button>
                                <button onClick={() => {
                                    this.saveUser(user.id);
                                }}>save
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        );
    }
}