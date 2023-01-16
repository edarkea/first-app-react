import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IUser } from "../models/IUSer";
import { UserService } from "../services/UserService";

interface URLParams {
    id: string;

}

interface IState {
    loading: boolean;
    user: IUser;
    errorMessage: string;
};
interface IProps { };

let UserDetails: React.FC<IProps> = () => {
    let { id } = useParams<URLParams | any>();

    let [state, setState] = useState<IState>({
        loading: false,
        errorMessage: '',
        user: {} as IUser,
    });

    useEffect(() => {
        if (id) {
            UserService.getUser(id).then((response) => {
                setState({
                    ...state,
                    loading: false,
                    user: response.data
                })
            }).catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                })
            })
        }
    }, [id])

    let { loading, user, errorMessage } = state;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold"> User Details</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque, cumque animi, minima facere fugit porro quia impedit molestias deserunt praesentium accusamus exercitationem magnam similique aperiam dolore sapiente totam.</p>
                    </div>
                </div>
                {
                    Object.keys(user).length > 0 &&
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name: <span className="fw-bold">{user.name}</span>
                                </li>
                                <li className="list-group-item">
                                    Phone: <span className="fw-bold">{user.phone}</span>
                                </li>
                                <li className="list-group-item">
                                    Email: <span className="fw-bold">{user.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Company: <span className="fw-bold">{user.company.name}</span>
                                </li>
                                <li className="list-group-item">
                                    City: <span className="fw-bold">{user.address.city}</span>
                                </li>
                                <li className="list-group-item">
                                    Zip Code: <span className="fw-bold">{user.address.zipcode}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className="btn btn-success mt-3">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserDetails;