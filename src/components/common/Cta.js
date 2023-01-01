import expAsset from "../../constants";
import {
  CtaWrapper,
  ProfileWrapper,
  TabWrapper,
  CtaSlideWrapper,
  StatusWrapper,
  NextWprapper,
  Imgwrapper,
  Line
} from "../../style/CtaSt";

const Cta = (props) => {
  return (
    <CtaWrapper>
      <img src={props.img} alt={props.alternate} />
    </CtaWrapper>
  );
};

const ProfileIcon = (props) => {
  return (
    <ProfileWrapper>
      <img src={props.img} alt={props.alternate} />
    </ProfileWrapper>
  );
};

const Tab = (props) => {
  return <TabWrapper>{props.text}</TabWrapper>;
};

const CtaSlide = (props) => {
  return (
    <CtaSlideWrapper>
      <div>01.12</div>
      <div>Purchase</div>
    </CtaSlideWrapper>
  );
};

const Status = (props) => {
  return <StatusWrapper colurs={props.colurs}>{props.status}</StatusWrapper>;
};

const Next = (props) => {
  return (
    <NextWprapper icon={props.icon} wid={props.wid} height={props.height}>
      <img src={expAsset.icons.Next} alt="next" />
    </NextWprapper>
  );
};

const ImageWrap = (props) => {
  return (
    <Imgwrapper icon={props.icon} width={props.wid} height={props.height} rad={props.rad}>
      <img src={props.img} alt={props.alt} />
    </Imgwrapper>
  );
};

const LineHR = (props) => {
  return(
    <Line wid={props.wid} hght={props.hght} color={props.color} />
  )
} 

export { Cta, ProfileIcon, Tab, CtaSlide, Status, Next, ImageWrap, LineHR };
