// Код меню с формой авторизации взят с https://www.codeply.com/go/XefCTinzkY/bootstrap-4-navbar-with-login-form
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import './Layout.css';
import Menu from '../Menu/index';
import MainPage from '../MainPage/index';
import ModalPassword from '../ModalPassword/index';

function Layout(){
    return (
        <div>                        
            <Menu/>                        
            <MainPage/>            
            <ModalPassword/>
        </div>
    );
}
export default Layout;