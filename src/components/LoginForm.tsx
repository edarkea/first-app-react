import React from "react";

interface IState { 
    user: {
        username: string;
        password: string;
    }
};
interface IProps { };

let LoginForm: React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" placeholder="Login"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginForm;