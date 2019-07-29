import React from 'react';
import './ModalPassword.css';

function ModalPassword(){
    return (
        <div id="modalPassword" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
    );
}
export default ModalPassword;

 