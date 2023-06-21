import React from 'react';
import UsersResults from '../components/users/UsersResults';
import UserSearch from '../components/users/UserSearch'

const Home = () => {
    return (
        <div>
            <UserSearch />
            <UsersResults />
        </div>
    );
};

export default Home;