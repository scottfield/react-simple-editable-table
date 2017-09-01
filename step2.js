import React from 'react';

export default function UserTable(props) {
    return (
        <table>
            <THead titles={["name", "sex", "age"]}/>
            <TBody users={props.users}/>
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
        </tr>
        </thead>
    );
}

export function TBody(props) {
    return (
        <tbody>
        {
            props.users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.sex}</td>
                        <td>{user.age}</td>
                    </tr>
                )
            })
        }
        </tbody>
    );
}