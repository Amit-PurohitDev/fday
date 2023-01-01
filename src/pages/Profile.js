import React from "react";
import { Title } from "../components/common/Title";
import ProfileBanner from "../components/ProfileBanner";
import { Maincontent } from "../style/Common";
import { ProfileCard } from '../components/common/Card';

const Profile = () => {
    return(
        <Maincontent>
            <Title title="Profile" />
            <ProfileBanner />
            <ProfileCard card="para"/>
            <ProfileCard card="ref"/>
            <ProfileCard card="interest"/>
        </Maincontent>
    )
}

export default Profile;