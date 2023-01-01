import React from "react"
import expAsset from "../constants";
import { ConnectWrapper, Section, Wrap, ContentWrap } from "../style/ConnectSt";
import { ImageWrap, LineHR } from "./common/Cta";
import { Label, TitleLabel } from "./common/Title";

const Connects = () => {
    return(
        <ConnectWrapper>
            <Section>
            <Label label="Party Chat" />
                <ContentWrap>
                    <TitleLabel titleLabel="Scott Pilgrim +7 Others"/>
                    <Wrap>
                        <ImageWrap wid="20" height="20" img={expAsset.icons.Mic} alt="mic"/>
                        <ImageWrap wid="20" height="20" img={expAsset.icons.Phone} alt="mic"/>
                    </Wrap>
                </ContentWrap>
            </Section>
            <LineHR wid="100" hght="1" color={expAsset.colors.lightmode.blue}/>
            <Section>
                <ContentWrap>
                    <input placeholder="Type a message..." />
                    <ImageWrap wid="20" height="20" img={expAsset.icons.Connect} alt="mic"/>
                </ContentWrap>
            </Section>
        </ConnectWrapper>
    )
} 

export default Connects;