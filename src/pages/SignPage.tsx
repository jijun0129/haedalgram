import styled from "styled-components";
import iphone from "../assets/iphone.png"
import logo from "../assets/logo.svg";
import { useState } from "react";
import SignInForm from "../components/sign/SignInForm";

const Main = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const IphoneImg = styled.img`
    height: 500px;
`;

const SignSection = styled.section`
    width: 300px;
    margin-left: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid var(--color-grey-2);
`;

const LogoImg = styled.img`
    width: 70%;
    height: 20%;
    padding: 30px 0;
`

const SignPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return <Main>
        <IphoneImg src={iphone} />
        <SignSection>
            <LogoImg src={logo} />
            {isSignIn ? <SignInForm /> : <></>}
      </SignSection>
    </Main>;
};

export default SignPage;