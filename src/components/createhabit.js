import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner"
import { daysarray } from "../services/daysarray";

function Letters({ res, index }) {

    const [areacolor, setAreacolor] = useState(false)
    const [lettercolor, setLettercolor] = useState(false)

    return (

        <DayButtons background={areacolor} color={lettercolor} key={index} onClick={() => {
            setLettercolor(!lettercolor)
            setAreacolor(!areacolor)
        }}>{res}</DayButtons>
    )
}

export default function Createhabit() {

    const [clicked, setClicked] = useState(false)
    // const [load, setload] = useState(false)

    return (
        <CreateHabitBody>
            <Input type='text' placeholder='nome do hábito' />
            <div>
                {daysarray.map((res, index) => {
                    return (<Letters
                        res={res.dia}
                        key={index}
                        codition={res.condition}
                    />)
                })}
            </div>
            <InferiorBody>
                <Cancel>Cancelar</Cancel>
                <div onClick={() => { setClicked(!clicked) }}>
                    {clicked ?
                        <Loadsave>
                            <ThreeDots color="#FFFFFF" height={46} width={46} />
                        </Loadsave>
                        :
                        <Salve>Salvar</Salve>}
                </div>
            </InferiorBody>
        </CreateHabitBody>
    )
}

const CreateHabitBody = styled.div`
    width: 85vw;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 19px;
    padding-top: 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const Input = styled.input`
    width: 78vw;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    padding-left: 10px;
    margin-bottom: 8px;
`
const DayButtons = styled.button`
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
    width: 30px;
    height: 30px;
    left: 240px;
    top: 218px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.color ? '#FFFFFF' : '#DBDBDB;'};
    background: ${props => props.background ? '#CFCFCF' : '#FFFFFF;'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
`

const InferiorBody = styled.div`
    margin-top: 29px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: end;
`

const Cancel = styled.button`
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 20px;
`

const Salve = styled.button`
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
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin-right: 16px;
`

const Loadsave = styled.button`
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
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    margin-right: 16px;
    background: #52B6FF;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
`

