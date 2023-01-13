import React from "react";

interface IState { }
interface IProps { }

export class CustomerClass extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3>Customer Class Component</h3>
            </React.Fragment>
        );
    }

}