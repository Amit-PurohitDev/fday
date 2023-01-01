import React from "react";
import expAsset from "../constants";
import { ProBannerWrap, ProBannerContent, ProBannerDetail, ProBanImg, ProBanName, ProText } from '../style/ProBannerSt';

const ProfileBanner = () => {
    return(
        <ProBannerWrap>
            <ProBannerContent>
                <ProBanImg>
                    <img src={expAsset.images.Profilepic} alt="proban" />
                </ProBanImg>
                <ProBanName>
                    <ProText>Lorena</ProText>
                    <ProText>Anderson</ProText>
                    <ProText>UI/UX - Designer</ProText>
                </ProBanName>
            </ProBannerContent>
            <ProBannerDetail>

            </ProBannerDetail>
        </ProBannerWrap>
    )
}

export default ProfileBanner;