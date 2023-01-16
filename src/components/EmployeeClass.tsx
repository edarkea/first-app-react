import React from "react";

interface IProps { };
interface IState {
    name: string,
    age: number;
    title: string;
};

export class EmployeeClass extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: 'Edinson Ayui',
            age: 27,
            title: 'Sistemas'
        }
    }
    render() {
        let { name, age, title } = this.state;
        return (
            <React.Fragment>
                <h3>Employee Class Component</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        Nombre: {this.state.name}
                    </li>
                    <li className="list-group-item">
                        Edad: {this.state.age}
                    </li>
                    <li className="list-group-item">
                        Título: {this.state.title}
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}