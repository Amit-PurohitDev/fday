import expAsset from "../../constants";
import {ImageWrap} from '../common/Cta';
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardTime,
  ProCard,
  Protitle,
  ProPara,
  ConSection,
  Sect,
  ConIntrest,
  Wrap
} from "../../style/CardSt";

export const Cards = (props) => {
  return (
    <CardWrapper>
      <CardImage wid={props.wid}>
        <img src={props.img} alt={props.alt} />
      </CardImage>
      <CardTitle>{props.title}</CardTitle>
      <CardTime>{props.time}</CardTime>
    </CardWrapper>
  );
};

const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus, maiores adipisci commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi."

export const ProfileCard = (props) => {
  return (
    <ProCard>
      { props.card === "para" ? <Protitle> About Me</Protitle> :
        props.card === "ref" ? <Protitle> reference </Protitle> : 
        <Protitle> Interest </Protitle>}
      { props.card === "para" ? <ProPara>{ para } </ProPara> : 
        props.card === "ref" ? 
              <ConSection>
                 <Sect>
                    <p>Peter Parker</p>
                    <p>Spider-Man Marvel</p>
                    <p>Phone: +555 000 5656</p>
                 </Sect>
                 <Sect>
                    <p>Sr. Tony Stark</p>
                    <p>Iron Man Marvel</p>
                    <p>Phone: +555 676 0988</p>
                 </Sect>
              </ConSection> :  
              <ConIntrest>
                <Wrap>
                <ImageWrap wid="20" height="20" img={expAsset.icons.Arrow} alt="mic"/>
                </Wrap>
                <Wrap>
                <ImageWrap wid="20" height="20" img={expAsset.icons.Cart} alt="mic"/>
                </Wrap>
                <Wrap>
                   <ImageWrap wid="20" height="20" img={expAsset.icons.Next} alt="mic"/>
                </Wrap>
                <Wrap>
                   <ImageWrap wid="20" height="20" img={expAsset.icons.Notification} alt="mic"/>
                </Wrap>
                <Wrap>
                   <ImageWrap wid="20" height="20" img={expAsset.icons.Mic} alt="mic"/>
                </Wrap>
              </ConIntrest>
      }
      
    </ProCard>
  );
};

