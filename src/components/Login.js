import styled from "styled-components";

const Login = (props) => {
    return (<Container>
        <Content>
            <BgImage />
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Descriprion>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Descriprion>
                <CTALogoTwo src='/images/cta-logo-two.png' alt=""/>
            </CTA>

        </Content>
    </Container>)
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction:column;
    text-align: center;
    height: 100vh;
    
    `;
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding:80px 40px;
    height: 100%;
    `;

const BgImage = styled.div`
    height: 100%; 
    width:100%;
    background-position: top;   
    background-size:cover ;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    z-index: -1;
    top:0;
    left:0;
    right:0;
    `;
const CTA = styled.div`
    max-width:650px;
    width: 100%;
    display:flex;
    flex-flow: column wrap;
    
    `;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width:600px;
    min-height: 1px;
    display: block;
    width:100%;
`;
const SignUp = styled.a`
    font-weight: bold;
    letter-spacing:1.5px;
    margin-bottom:12px;
    width:100%;
    background-color:#0063e5;
    padding:16.5px 0;
    font-size:20px;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
        background-color: #0483ee;
    }
    &:active { background-color:red}
    
`;
const Descriprion = styled.p`
    letter-spacing:1.5px;
    color: hsla(0, 0%, 95.3%, 1);
    line-height: 1.6;
    font-size: 12px;
    margin:0 0 24px;

    `;
const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width:600px;
    display: inline-block;
    vertical-align: bottom;
    width:100%;

`;
export default Login;
