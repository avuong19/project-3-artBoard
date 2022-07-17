import React from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

import Auth from '../../utils/auth';

const Dashboard = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <main>
        <Header />
        <Link to="/explore"> EXPLORE</Link> 
        <a href="/" onClick={logout}>
                LOGOUT
              </a>

        {/* display for api images that have been commented on that will show up on feed */}
        </main>
    );
};

export default Dashboard;