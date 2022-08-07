import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components";
import Vector from "../assents/Vector.png";
import { useState } from "react";


export default function Today() {

    const [changer, setChanger] = useState(false)

    return (
        <Wrapper>
            <Header />

            <TodayBody>
                <TodayTittleSite>
                    <div><h2>Segunda, 17/05</h2></div>
                    <div><p>Nenhum hábito concluído ainda</p></div>
                </TodayTittleSite>

                <HabitArea>
                    <div>
                        <div><h2>Ler 1 capítulo de livro</h2></div>

                        <div>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </div>
                    </div>

                    <Check background={changer} onClick={() => setChanger(!changer)}>
                        <img src={Vector} alt="trackit"></img>
                    </Check>
                </HabitArea>
            </TodayBody>

            <Footer />
        </Wrapper>
    )

}

const Wrapper = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
    padding-top: 95px;
`
const TodayBody = styled.div`
    margin-left: 20px;
`

const TodayTittleSite = styled.div`
    margin-bottom: 28px;

    h2{
    width: 172px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    }

    p{
    height: 22px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    }
`

const HabitArea = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 85vw;
    padding-left: 19px;
    padding-top: 18px;
    font-family: 'Lexend Deca';
    color: #666666;
    display: flex;
    justify-content: space-between;

    h2{
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 7px;
    }

    p{
    font-size: 12.976px;
    line-height: 16px;
    }

`

const Check = styled.button`
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
    width: 69px;
    height: 69px;
    background: ${props => props.background? '#E7E7E7': '#8FC549'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`