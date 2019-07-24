import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Menu.css';
import Login from '../Login/index';

function Menu(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
            <div className="container">
        <a className="navbar-brand" href="#">Brand</a>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
            &#9776;
        </button>
        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
            <ul className="nav navbar-nav">
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="#" className="nav-link">More</a></li>
            </ul>
            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>
                <li className="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right mt-2">
                       <li className="px-3 py-2">
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
                                    <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                </div>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div id="modalPassword" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h3>Forgot password</h3>
                <button type="button" className="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">
                <p>Reset your password..</p>
            </div>
            <div className="modal-footer">
                <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button className="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
    </div>
    );
}
export default Menu;

 