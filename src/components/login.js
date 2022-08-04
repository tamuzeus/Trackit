import trackit from "../assents/trackit.png";
import styled from "styled-components";

export default function Login() {

    return (

        <ArticleComponent>
            <div>
                <img src={trackit} alt="trackit"></img>
            </div>

            <DivLoginInfos>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
            </DivLoginInfos>

            <div>
                <ButtonEnter>
                    <p>Entrar</p>
                </ButtonEnter>
            </div>


            <div>
                <ButtonSignUp >
                    <p>Não tem uma conta? Cadastre-se!</p>
                </ButtonSignUp>
            </div>
        </ArticleComponent>
    )
}

const ArticleComponent = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
`;


const DivLoginInfos = styled.article`
    display: flex;
    flex-direction: column;
`

const ButtonEnter = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-bottom: 25px;

    p{
        color: white;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
    }
`

const ButtonSignUp = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    p{
        
    height: 17px;
    left: 74px;
    top: 451px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    }
`

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 10px;

    &::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    }

`