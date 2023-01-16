import React from "react";

interface IState{};
interface IProps{};

let About: React.FC<IProps> = () => {
    return(
        <React.Fragment>
            <h3>About Component</h3>
        </React.Fragment>
    )
}

export default About;