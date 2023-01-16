import React, { useState } from "react";

interface IProps {

}

interface IState {
    name: string;
    age: number;
    title: string;
}

let Employee: React.FC = () => {

    let [state, setState] = useState<IState>({
        name: 'Edinson Ayui',
        age: 25,
        title: 'Sistemas'
    });

    return (
        <React.Fragment>
            <h3>Employee Component</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    Nombre: {state.name}
                </li>
                <li className="list-group-item">
                    Edad: {state.age}
                </li>
                <li className="list-group-item">
                    Título: {state.title}
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Employee;