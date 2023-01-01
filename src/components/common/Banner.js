import { BannerWrapper, LeftSection, RightSection } from "../../style/BannerSt";
import { Tab, CtaSlide } from "./Cta";
import { Title, SubTitle } from "./Title";

const Banner = (props) => {
  return (
    <BannerWrapper>
      <LeftSection>
        <Tab text="New" />
        <div>
          <Title title="Marvel Spider-Man:" />
          <SubTitle SubTitle="Myles Morales" />
        </div>
        <CtaSlide />
      </LeftSection>
      <RightSection></RightSection>
    </BannerWrapper>
  );
};

export default Banner;
