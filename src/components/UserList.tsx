import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUSer";
import { UserService } from "../services/UserService";
import { Link } from "react-router-dom";

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
                        <p className="h3 fw-bold text-success">UserList</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolore cumque eius ducimus rem exercitationem, quo nobis quas dicta iusto similique quidem vitae et inventore eligendi minus commodi alias architecto?</p>
                    </div>
                </div>
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
                                                <td>
                                                    <Link to={`/contacts/${user.id}`} className="text-decoration-none text-success fw-bold">{user.name}</Link>
                                                </td>
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