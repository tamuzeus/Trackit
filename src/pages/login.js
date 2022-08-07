import trackit from "../assents/trackit.png";
import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/trackit";

export default function Login() {
    const navigate = useNavigate()

    const [clicked, setClicked] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [load, setload] = useState(false)

    function handleForm(e) {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function sendLogin() {

        const body = {
            ...form
        }

        const promise = postLogin(body)
        setload(true)


        promise.catch(res => {
            alert('Login inválido!');
            setClicked(false)
            setload(false)

        })
        promise.then(res => {
            setload(false)
            const config = {
                headers: {
                    Authorization:`Bearer ${res.data.token}`
                }
            }
            console.log(config)
            navigate('/habitos');
        })
    }


    return (

        <ArticleComponent>
            <div>
                <img src={trackit} alt="trackit"></img>
            </div>

            <Forml>
                <DivLoginInfos>
                    <Input id="Email" type="email" placeholder="Email" onChange={handleForm} name='email' value={form.email} required disabled={load}/>
                    <Input id="Password" type="password" placeholder="Senha" onChange={handleForm} name='password' value={form.password} required disabled={load}/>

                    {/*"e" é a área  pega pelo onchange --- target capta o que foi pego ---- value retira o valor do que foi pego*/}
                </DivLoginInfos>

                <div onClick={() => { setClicked(!clicked) }}>
                    {clicked ?
                        <ButtonLoop disabled={load}>
                            <ThreeDots color="#FFFFFF" height={46} width={46} />
                        </ButtonLoop> :
                        <ButtonEnter onClick={sendLogin} disabled={load}>
                            <p>Entrar</p>
                        </ButtonEnter>}
                </div>
            </Forml>



            <ButtonSignUp>
                <Link to='cadastro'><p>Não tem uma conta? Cadastre-se!</p></Link>
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
        padding: 10px;
    }
`

const ButtonLoop = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    width: 303px;
    background: white;
    border-radius: 4.63636px;
    margin-bottom: 25px;
    background: #52B6FF;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
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