import React from "react";

export default function UserTable(props) {
    return (
        <div>
            <table>
                <thead>
                <th>name</th>
                <th>sex</th>
                <th>age</th>
                </thead>
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

            </table>
        </div>
    );
}