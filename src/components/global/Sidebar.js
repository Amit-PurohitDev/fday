import React, {useState} from "react";
import expAsset from "../../constants";
import { SidebarWrapper, List, Dash } from '../../style/SidebarSt';
import { NavLink } from "react-router-dom";

const sideBarData = [
    {
        to:"/",
        alt:"Home",
        icon:expAsset.icons.Home,
    },
    {
        to:"/gallery",
        alt:"Gallery",
        icon:expAsset.icons.Gallery,
    },
    {
        to:"/profile",
        alt:"Profile",
        icon:expAsset.icons.Profile,
    },
    {
        to:"/chat",
        alt:"chat",
        icon:expAsset.icons.Connect,
    },
    {
        to:"/users",
        alt:"Users",
        icon:expAsset.icons.Users,
    }
];

const Sidebar = () => {

    const [ofTop, setOfTop] = useState(0);
    const [OfHeight, setOfHeight] = useState(0);
    
    function getOfset(e){
        setOfTop(e.currentTarget.offsetTop);
        setOfHeight(e.currentTarget.offsetHeight);
    };
    return(
        <SidebarWrapper>
            <List>
                {
                    sideBarData.map((item, idx) => {
                        return(
                            <li onClick={(e) => getOfset(e)} key={idx}><NavLink to={item.to} className="li"> <img src={item.icon} alt={item.alt} /></NavLink></li>
                        )
                    })
                }
            </List>
            <Dash height={OfHeight} top={ofTop} />
        </SidebarWrapper>
    )
}

export default Sidebar;