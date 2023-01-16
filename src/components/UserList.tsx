import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUSer";
import { UserService } from "../services/UserService";

interface IState {
    loading: boolean,
    users: IUser[],
    errorMessage: string;
};
interface IProps { };

let UserList: React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        loading: true,
        users: [] as IUser[],
        errorMessage: ''
    });

    useEffect(() => {
        setState({ ...state, loading: true });
        UserService.getAllUsers().then((response) => {
            setState({
                ...state,
                loading: false,
                users: response.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        })
    }, []);

    let { loading, users, errorMessage } = state;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover shadow-lg">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>COMPANY</th>
                                    <th>WEBSITE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 && state.users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UserList;