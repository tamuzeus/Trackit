import styled from "styled-components";
import { useEffect, useState } from "react";
import { daysarray } from "../services/daysarray";
import { getHabits } from "../services/trackit";
import { useContext } from "react";
import UserContext from "../context/context";
import { deleteHabits } from "../services/trackit";

function Letters({ name, days }) {
    
    const dicionary = {D: 0, S:1, T:2, Q:3, Q:4, S:5, S:6}
    const changeColor = days.includes(dicionary[name])

    return (
        <DayButtons changeColor={changeColor}>
            <p>{name}</p>
        </DayButtons>
    )
}

function BodyHabit({name, days, del}) {

    return (
        <HabitBody>
            <SuperiorBody>
                <HabitName>{name}</HabitName>
                <Trash onClick={() => del}>
                    <ion-icon name="trash-outline"></ion-icon>
                </Trash>
            </SuperiorBody>
            <div>
                {daysarray.map((value, index) => {
                    return (<Letters
                        name={value.dia}
                        key={index}
                        days={days}
                    />)
                })}
            </div>
        </HabitBody>
    )
}

export default function Habits() {
    const { bearertoken, setBearerToken, id, habits, setHabits } = useContext(UserContext);

    useEffect(() => {
        const promise = getHabits(bearertoken)
        promise.catch((res) => {
            console.log('error')
        })
        promise.then((res) => {
            setHabits(res.data)
        })
    }, [])

    function deletebutton (){
        const promise = deleteHabits(id, bearertoken)
        promise.catch(console.log('error'))
        promise.then(console.log('ok'))
    }

    return (
        <>
        {habits.map((array, index) => <BodyHabit
        name={array.name}
        days={array.days}
        del={deletebutton}
        key={index}
        />)}
        </>
    )
}

const HabitBody = styled.div`
    width: 85vw;
    height: 91px;
    padding-left: 19px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    overflow-y: auto;
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
    color: ${props => props.changeColor ? '#FFFFFF' : '#DBDBDB;'};
    background: ${props => props.changeColor ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
`