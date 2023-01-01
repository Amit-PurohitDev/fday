import { HeaderWrapper, CtaSection } from "../../style/HeaderSt";
import { Cta, ProfileIcon } from "../../components/common/Cta";
import expAsset from "../../constants";
import { TitleLabel } from "../common/Title";

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleLabel logoTitle={true} titleLabel="Fun Friday App" />
      <CtaSection>
        <Cta img={expAsset.icons.Notification} alternate="notification" />
        <Cta img={expAsset.icons.Cart} alternate="Cart" />
        <ProfileIcon img={expAsset.images.Profilepic} alternate="Profile" />
      </CtaSection>
    </HeaderWrapper>
  );
};

export default Header;
