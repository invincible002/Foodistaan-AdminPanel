import React from 'react'
import { AiFillPauseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


function Card({restaurant}) {

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-name">
                    <h3>{restaurant}</h3>
                </div>
                <div className="icons">
                    <div className="pause-button">
                        <AiFillPauseCircle className="pause-icon" />
                    </div>
                    <div className="edit-icon">
                        <AiFillEdit className="pause-icon" />
                    </div>
                </div>
            </div>

            <div className="orders-completed">
                <div className="card-stat-field">
                    <h5>Orders Completed</h5>
                </div>
                <div className="card-stat-value">
                    <h5>32</h5>
                </div>
            </div>

            <div className="sales-done">
                <div className="card-stat-field">
                    <h5>Sales Done </h5>
                </div>
                <div className="card-stat-value">
                    <h5>Rs. 350</h5>
                </div>
            </div>

            <div className="Revenue-Change">
                <div className="card-stat-field">
                    <h5>Revenue Change <h6>(Monthly)</h6></h5>
                </div>
                <div className="card-stat-value">
                    <h5 className="revenue-change-value">+10%</h5>
                </div>
            </div>

            <div className="Delivery">
                <div className="card-stat-field">
                    <h5>Delivery</h5>
                </div>
                <div className="card-stat-value">
                    <BootstrapSwitchButton
                        onstyle="success"
                        checked={false}
                        onlabel='on'
                        offlabel='off'
                        onChange={(checked: boolean) => {
                            this.setState({ isUserAdmin: checked })
                        }}
                    />
                </div>
            </div>

            <div className="Takeaway">
                <div className="card-stat-field">
                    <h5>Takeaway</h5>
                </div>
                <div className="card-stat-value">
                    <BootstrapSwitchButton
                        onstyle="success"
                        checked={false}
                        onlabel='on'
                        offlabel='off'
                        onChange={(checked: boolean) => {
                            this.setState({ isUserAdmin: checked })
                        }}
                    />
                </div>
            </div>

        </div>

    )
}

export default Card;