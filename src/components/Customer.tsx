import React from "react";

interface IProps {
    name?: string;
    age?: number;
    title?: string;
}

let Customer: React.FC<IProps> = ({ name, age, title }) => {
    return (
        <React.Fragment>
            <h2>Customer Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Nombre: {name}
                </li>
                <li className="list-group-item">
                    Edad: {age}
                </li>
                <li className="list-group-item">
                    Título: {title}
                </li>
            </ul>
        </React.Fragment>
    )
};

export default Customer;