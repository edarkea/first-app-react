import React from "react";
import { Link } from "react-router-dom";

interface IState { };
interface IProps { };

let About: React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">
                            About us
                        </p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad, aspernatur quibusdam itaque repellat provident assumenda maxime officiis iste quasi! Asperiores iste assumenda nemo fuga quasi reprehenderit eaque, eum omnis?
                            Omnis quia deserunt perspiciatis, nam a, distinctio delectus earum accusantium vel dolorum explicabo? Omnis, ratione. Suscipit, animi ex dicta excepturi provident maxime sunt explicabo possimus repellat neque dolores reiciendis ad.
                            Corrupti commodi ipsam officiis natus qui. Placeat voluptatem illo, labore maiores nostrum officia sapiente quibusdam impedit ipsum consequuntur veniam explicabo corporis quas cum at in sunt beatae ea? Aut, quibusdam?
                            Iure itaque error consequatur, odit minima inventore illo? Ea modi placeat beatae voluptates. Fugiat delectus consectetur soluta neque libero molestias reprehenderit, eligendi voluptas quasi dolorem odit ab deleniti laboriosam asperiores.
                            Suscipit cupiditate numquam culpa esse dolores ab doloribus sed, molestiae perferendis! Sapiente rem veniam incidunt, laudantium tempora odio iusto accusantium? Velit suscipit numquam nisi excepturi, dolorem quod voluptatum odio at.
                            Mollitia odio veritatis, sequi fugit natus dolorem beatae quas illum quae soluta laborum at quibusdam quod placeat. Mollitia doloremque error odit deleniti. Natus nam labore ab ad id, veritatis a.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className="btn btn-success mt-3">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;