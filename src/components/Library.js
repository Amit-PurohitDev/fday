import {
  LibraryWrapper,
  BottomSection,
  TopSection,
  LibRow,
  LibImg,
  LibTime,
  LibCta,
  Content,
  SubTitleWrapper,
} from "../style/LibrarySt";
import lib from "../strings/Lib";
import expAsset from "../constants";
import { ImageWrap, Status } from "./common/Cta";

const libData = [
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        date:"12 DEC",
        year:"2020",
        img: expAsset.images.Profilepic ,
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
    {
        title:"Watch Dogs 3",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"22 OCT",
        year:"2021",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"Cyber Punk",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"12 DEC",
        year:"2020",
        state:{
            status:"Download",
            st: false,
        }
    },
    {
        title:"GTA 5",
        platform:"PS4 & PS5",
        img: expAsset.images.Profilepic ,
        date:"19 JAN",
        year:"2017",
        state:{
            status:"Installed",
            st:true,
        }
    },
]

const Library = (props) => {
  return (
    <LibraryWrapper>
      <TopSection icon={true}>
        <SubTitleWrapper>{lib.title}</SubTitleWrapper>
        <img src={expAsset.icons.Arrow} alt={props.alt} />
      </TopSection>
      <BottomSection>
        {
            libData.map((items, idx) => {
                return(
                    <LibRow key={idx}>
                    <LibImg>
                      <ImageWrap img={items.img} wid="50" height="50" rad="10"/>
                      <Content>
                        <span>{ items.title }</span>
                        <span>{ items.platform }</span>
                      </Content>
                    </LibImg>
                    <LibTime>
                      <span>{ items.date }</span>
                      <span>{ items.year }</span>
                    </LibTime>
                    <LibCta>
                        <Status status={ items.state.status } colurs={ items.state.st } />
                    </LibCta>
                  </LibRow>
                )       
            })
        }
      </BottomSection>
    </LibraryWrapper>
  );
};

export default Library;
