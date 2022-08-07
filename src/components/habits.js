import styled from "styled-components";
import { useState } from "react";

function Letters({ res, index}) {

    const [areacolor, setAreacolor] = useState(false)
    const [lettercolor, setLettercolor] = useState(false)

    return (

        <DayButtons background={areacolor} color={lettercolor} key={index} onClick={() => {
            setLettercolor(!lettercolor)
            setAreacolor(!areacolor)
        }}>{res}</DayButtons>
    )
}

export default function Habits() {

    const daysarray = [
        {
            dia: 'D',
        },
        {
            dia: 'S',
        },
        {
            dia: 'T',
        },
        {
            dia: 'Q',
        },
        {
            dia: 'Q',
        },
        {
            dia: 'S',
        },
        {
            dia: 'S',
        },
    ]

    return (
        <HabitBody>
            <SuperiorBody>
                <HabitName>Exemplo</HabitName>
                <Trash>
                    <ion-icon name="trash-outline"></ion-icon>
                </Trash>
            </SuperiorBody>
            <div>
                {daysarray.map((res, index) => {
                    return (<Letters
                        res={res.dia}
                        key={index}
                        codition={res.condition}
                    />)
                })}
            </div>
        </HabitBody>
    )
}

const HabitBody = styled.div`
    width: 85vw;
    height: 91px;
    padding-left: 19px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
`

const HabitName = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`

const Trash = styled.button`
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
    margin-right: 14px;
`

const SuperiorBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    margin-top: 10px;
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