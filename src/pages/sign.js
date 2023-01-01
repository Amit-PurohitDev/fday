import React, { useEffect, useRef, useState } from "react";
import {
  SignWrpper,
  SignContainer,
  SignUp,
  Form,
  FormContainer,
  FormLabel,
  FromInput,
  Login,
  After,
  Overlay,
  TextContent,
  ButtonContainer
} from "../style/SignSt";

const Sign = () => {

    const [ curr, setCurr ] = useState("signup");
    
    const switc = (e) => {
        if(e.target.getAttribute("type") === "login"){
            setCurr("login");
        }else if(e.target.getAttribute("type") === "signup"){
            setCurr("signup");
        }
    }

  return (
    <SignWrpper>
      <SignContainer  curr={curr}>
        <SignUp curr={curr}>
          <p className="title">Sign up</p>
          <Form curr={curr}>
            <FormContainer>
              <FormLabel>Name</FormLabel>
              <FromInput />
            </FormContainer>
            <FormContainer>
              <FormLabel>Email</FormLabel>
              <FromInput />
            </FormContainer>
            <FormContainer>
              <FormLabel>User Name</FormLabel>
              <FromInput />
            </FormContainer>
            <FormContainer>
              <FormLabel>Password</FormLabel>
              <FromInput />
            </FormContainer>
            <FormContainer>
              <FormLabel>RE-confirm password</FormLabel>
              <FromInput />
            </FormContainer>
            <ButtonContainer>
              <button>cancel</button>
              <button>Submit</button>
            </ButtonContainer>
          </Form>
        <After onClick={switc} type="login">LOG-IN</After>
        </SignUp>
        <Login curr={curr}>
          <p className="title">Login</p>
          <Form curr={curr}>
            <FormContainer>
              <FormLabel>Name</FormLabel>
              <FromInput />
            </FormContainer>
            <FormContainer>
              <FormLabel>Email</FormLabel>
              <FromInput />
            </FormContainer>
            <ButtonContainer className="ButtonContainer">
              <button>cancel</button>
              <button>Submit</button>
            </ButtonContainer>
          </Form>
          <After onClick={switc} type="signup">sign-up</After>
        </Login>
        <Overlay curr={curr}>
            <TextContent>
                <h1>Wlecome to our Website</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsa magni odio quidem. Ea, tempore. Nobis, totam. Facere fugiat, eum distinctio, hic libero enim voluptatem molestias, placeat dolor sunt officiis. </p>
            </TextContent>
        </Overlay>
      </SignContainer>
    </SignWrpper>
  );
};

export default Sign;
