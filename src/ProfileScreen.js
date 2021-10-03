import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import Nav from './Nav';
import './ProfileScreen.css';
import { selectUser } from './userSlice';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        className="" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile avatar" />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan premium)</h3>
                            <h4>Renewal date: 04/06/2021</h4>
                            <div className="profileScreen__plan">
                                <div className="profileScreen__plandetails">
                                    <h4>Netflix Standard</h4>
                                    <h5>1080p</h5>
                                </div>
                                <button className="profileScreen__subscribe">
                                    Subscribe
                                </button>
                            </div>
                            <div className="profileScreen__plan">
                                <div className="profileScreen__plandetails">
                                    <h4>Netflix Standard</h4>
                                    <h5>1080p</h5>
                                </div>
                                <button className="profileScreen__subscribe">
                                    Subscribe
                                </button>
                            </div>
                            <div className="profileScreen__plan">
                                <div className="profileScreen__plandetails">
                                    <h4>Netflix Standard</h4>
                                    <h5>1080p</h5>
                                </div>
                                <button className="profileScreen__subscribe current_plan">
                                    Current Package
                                </button>
                            </div>
                            <button className="profileScreen__signOut" onClick={() => auth.signOut()}>Sign out</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfileScreen;
