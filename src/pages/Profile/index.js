import React from 'react';
import { ProfileProvider } from './context';
import Profile from './Profile';

const index = () => {
    return (
        <ProfileProvider>
            <Profile />
        </ProfileProvider>
    );
};

export default index;