import trackit from "../assents/trackit.png";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../services/trackit";

export default function SignUp() {
    const navigate = useNavigate()

    const [form, SetForm] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    })

    function handleForm(e) {
        e.preventDefault();

        SetForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function sendForm() {
        const body = {
            ...form
        }

        const promise = postSignUp(body)
        promise.catch(res => {
            alert('Email em uso ou campos inválidos, tente utilizar outro!')
        })
        promise.then(res => {
            alert('Conta criada!')
            navigate('/')
        })
    }

    return (

        <ArticleComponent>
            <div>
                <img src={trackit} alt="trackit"></img>
            </div>

            <Forml onSubmit={handleForm}>
                <DivLoginInfos>
                    <Input id="Email" type="email" placeholder="Email" onChange={handleForm} name='email' value={form.email} required />
                    <Input id="Password" type="password" placeholder="Senha" onChange={handleForm} name='password' value={form.password} required />
                    <Input id="Name" type="text" placeholder="Nick" onChange={handleForm} name='name' value={form.name} required />
                    <Input id="Image" type="url" placeholder="URL da imagem" onChange={handleForm} name='image' value={form.image} required />
                </DivLoginInfos>

                <div>
                    <ButtonEnter onClick={sendForm}>
                        <p> Cadastrar</p>
                    </ButtonEnter>
                </div>
            </Forml>

            <ButtonSignUp>
                <Link to='/'><p>Já tem uma conta? Faça Login!</p></Link>
            </ButtonSignUp>

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

const Forml = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    left: 36px;
    top: 381px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-bottom: 25px;

    Link{
        text-decoration: none;
    }

    p{
        color: white;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        padding: 10px;
        text-decoration: none;
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
    font-size: 19.976px;

    ::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    color: #DBDBDB;
    }

`