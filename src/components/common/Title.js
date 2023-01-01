import { TitleWrapper, SubTitleWrapper, ListTitleWrapper, LabelWrapper, TitleLabelWrapper } from '../../style/TitleSt';

export const Title = (props) => {
    return (
        <TitleWrapper>
            {props.title}
        </TitleWrapper>
    )
};

export const SubTitle = (props) => {
    return (
        <SubTitleWrapper>{ props.SubTitle }</SubTitleWrapper>
    )
};

export const ListSubTitle = (props) => {
    return(
        <ListTitleWrapper>{props.title}</ListTitleWrapper>
    )
}

export const Label = (props) => {
    return(
        <LabelWrapper>{props.label}</LabelWrapper>
    )
}
export const TitleLabel = (props) => {
    return(
        <TitleLabelWrapper logoTitle={props.logoTitle}>{props.titleLabel}</TitleLabelWrapper>
    )
}
