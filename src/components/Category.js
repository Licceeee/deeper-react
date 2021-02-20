import React from 'react';
import { Link } from "react-router-dom";
import './Category.css';

const Category = ({ name, description, questionSet, handleSelection }) => {

    return (


        <Link to='/question' className="col-md-3 router-link" onClick={() => handleSelection(questionSet)}>
            {/* <div className="col-md-3"> */}
                <div className="profile-card-4 text-center">
                    {/* <img src="https://st.mngbcn.com/static/assets/img/landings/blackFriday/black_shop.jpg" 
                            alt={name} className="img img-responsive" /> */}
                    <div className="profile-content">
                        {/* <div className="profile-name">
                            {name}
                        </div> */}
                        <h3>{name}</h3>
                        <div className="profile-description">{description}</div>
                        <div className="row">
                            <div className="col-6">
                                <div className="profile-overview">
                                    <p>QUESTIONS</p>
                                    <h4>{questionSet.length}</h4></div>
                            </div>
                            <div className="col-6">
                                <div className="profile-overview">
                                    <p>LIKES</p>
                                    <h4>250</h4></div>
                            </div>
                
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </Link>
    );
}

export default Category;
