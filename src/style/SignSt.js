import styled from "styled-components";
import expAsset from "../constants";

export const SignWrpper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  .title {
    width: 100%;
    background: #000;
    color: #fff;
    text-align: center;
    padding: 20px;
    position: absolute;
    top: 0px;
  }
`;

export const SignContainer = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: 0.2s;
  clip-path: ${(props) =>
    props.curr === "login"
      ? "polygon(0 0, 100% 0, 100% 100%, 57% 100%, 43% 81%, 0 81%)"
      : " polygon(0 0, 100% 0, 100% 81%, 54% 81%, 43% 100%, 0 100%)"};
  overflow: hidden;
  flex-direction: ${(props) =>
    props.curr === "signup"
      ? "unset"
      : props.curr === "login"
      ? "row-reverse"
      : "row"};
`;

export const SignUp = styled.div`
  width: ${(props) => (props.curr === "signup" ? "83%" : "54%")};
  height: 100%;
  background: #0fa363;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  display: ${(props) => (props.curr === "signup" ? "flex" : "none")};
  transition: 0.2s;
  z-index: 1;
  form {
    background: #0fa363;
    box-shadow: 20px 20px 60px #0d8b54, -20px -20px 60px #11bb72;
    display: block;
  }
`;

export const After = styled.div`
  color: #fff;
  position: absolute;
  right: ${(props) => (props.type === "login" ? "-27px" : "unset")};
  left: ${(props) => (props.type === "signup" ? "-27px" : "unset")};
  background-color: #a00000;
  padding: 15px 5px;
  writing-mode: vertical-lr;
  text-orientation: upright;
  cursor: pointer;
  border-top-right-radius: ${(props) =>
    props.type === "login" ? "10px" : "unset"};
  border-bottom-right-radius: ${(props) =>
    props.type === "login" ? "10px" : "unset"};
  border-top-left-radius: ${(props) =>
    props.type === "signup" ? "10px" : "unset"};
  border-bottom-left-radius: ${(props) =>
    props.type === "signup" ? "10px" : "unset"};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 4px;
  text-transform: uppercase;
  user-select: none;
  top: 25%;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 15px;
  gap: 15px;
  padding: 20px;
  display: none;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  width: 90%;
  border-radius: 10px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0px;
`;

export const FromInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
`;

export const Login = styled.div`
  width: 71%;
  height: 100%;
  background-color: #0f8ba3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  display: ${(props) => (props.curr === "login" ? "flex" : "none")};
  transition: 0.2s;
  z-index: 1;
  form {
    background: #0f8ba3;
    box-shadow: 20px 20px 60px #0d768b, -20px -20px 60px #11a0bb;
    display: block;
  }
  .ButtonContainer {
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
    width: 90%;
    border-radius: 10px;
    button {
      background: #0f8ba3;
      box-shadow: 5px 5px 10px #0d768b, -5px -5px 10px #11a0bb;
      border: 0;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      width: 50%;
      color: #eceaea;
      font-size: 16px;
      font-weight: 800;
    }
  }
`;

export const Overlay = styled.div`
  background: url(${expAsset.images.image1});
  width: ${(props) =>
    props.curr === "signup"
      ? "67.5%"
      : props.curr === "login"
      ? "52%"
      : "auto"};
  height: calc(100% - 18%);
  padding: 3%;
  box-shadow: 0px 0px 254px #cddc39;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const TextContent = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(76,42,35,0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  width: 90%;
  border-radius: 10px;
  button {
    background: #0fa363;
    box-shadow: 5px 5px 10px #0d8b54, -5px -5px 10px #24b376;
    border: 0;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    width: 50%;
    color: #eceaea;
    font-size: 16px;
    font-weight: 800;
  }
`;
