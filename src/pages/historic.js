import Header from "../components/header"
import Footer from "../components/footer"
import styled from "styled-components";


export default function Historic() {

    return (
        <>
            <Header />
            <HabitsBody>
                <MyHabitsBody>
                    <MyHabits>
                        <p>Histórico</p>
                    </MyHabits>



                    <Nohabits>
                        <p>
                            Em breve você poderá ver o histórico dos seus hábitos aqui! 
                        </p>
                    </Nohabits>

                </MyHabitsBody>
            </HabitsBody>
            <Footer />

        </>
    )
}

const HabitsBody = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    width: 100vw;
`

const MyHabitsBody = styled.div`
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    margin-left: 20px;
`
const MyHabits = styled.div`
    margin-bottom: 28px;

    p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    }
`
const Nohabits = styled.div`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`