import React from 'react';
import './Login.css';

function Login(){
    return (        
        <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
            {/* eslint-disable-next-line */}
            <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>
            <li className="dropdown order-1">
                <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right mt-2">
                <li className="px-3 py-2">
                    {/* eslint-disable-next-line */}
                    <form className="form" role="form">
                            <div className="form-group">
                                <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" required=""/>
                            </div>
                            <div className="form-group">
                                <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" required=""/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                            <div className="form-group text-center">
                                {/* eslint-disable-next-line */}
                                <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                            </div>
                        </form>
                    </li>
                </ul>
            </li>
        </ul>              
    );
}
export default Login;

 