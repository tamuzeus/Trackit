import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const percentage = 39;
    const navigate = useNavigate()

    return (
        <FooterPage>
            <p onClick={() => navigate('/habitos')}>Hábitos</p>

            <div onClick={() => navigate('/hoje')}>
                <CircularProgressbar 
                    value={percentage}
                    background
                    backgroundPadding={5}
                    text='Hoje'
                    styles={buildStyles({
                        trailColor: '#52B6FF',
                        backgroundColor: "#52B6FF",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        pathTransitionDuration: 0.5,
                    })}  
                />
            </div>
                     
            <p onClick={() => navigate('/historico')}>Histórico</p>
        </FooterPage>
    )

}

const FooterPage = styled.footer` 
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  width: 100vw;
  height: 70px;
  background-color: white;
  color: #52B6FF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Lexend Deca';
  font-weight: 400;
  line-height: 22px;

  p {
        font-size: 18px;
        color: #52B6FF;
        width: 150px;
        height: 40px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  div {
        width: 100px;
        position: absolute;
        bottom: 20px;
    }
`

