import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner"
import { daysarray } from "../services/daysarray";
import { postHabits } from "../services/trackit";
import { useContext, useState } from "react";
import UserContext from "../context/context";

function Letters({ id, day, handleDays }) {

    const [changecolor, setChangecolor] = useState(false)

    return (
        <DayButtons changeColor={changecolor} name="days" onClick={() => {
            setChangecolor(!changecolor)
            handleDays(id)
        }}>
            <p>{day}</p>
        </DayButtons>
    )
}

export default function Createhabit() {

    const [clicked, setClicked] = useState(false)
    const [form, setForm] = useState({
        name: '',
        days: '',
    })
    const [load, setload] = useState(false)

    const { newhabit, SetNewhabit } = useContext(UserContext)
    const { bearertoken, setBearerToken } = useContext(UserContext);

    function handleForm(e) {
        e.preventDefault();
        setForm({
            ...form,
            name: e.target.value,
        });
    }

    function handleDays(value) {
        const hasValue = form.days.includes(value)
        let newDays = form.days
        if (hasValue) {
            newDays = newDays.filter((filt) => filt != value)
            return setForm(prev => ({
                ...prev,
                days: newDays,
            }))
        }
        return setForm(prev => ({
            ...prev,
            days: [...prev.days, value],
        }));
    }

    function sendHabit() {

        const body = {
            ...form
        }

        const promise = postHabits(body, bearertoken)
        setload(true)

        promise.catch(res => {
            alert('Hábito inválido! Faltam informações!');

            setClicked(false)
            setload(false)
        })

        promise.then(res => {
            alert('Hábito adicionado!')
            setload(false)
            setClicked(false)
            SetNewhabit(false)
        })
    }

    return (
        <CreateHabitBody>
            <Input type='text' placeholder='nome do hábito' onChange={handleForm} name='name' value={form.name} required disabled={load} />
            <ButtonsBody>
                {daysarray.map((value, index) =>
                    <Letters
                        id={value.id}
                        key={index}
                        day={value.dia}
                        handleDays={handleDays}
                    />
                )}
            </ButtonsBody>
            <InferiorBody>

                <Cancel disabled={load} onClick={() => { SetNewhabit(false) }}>Cancelar</Cancel>

                <div onClick={() => { setClicked(!clicked) }}>
                    {clicked ?
                        <Loadsave disabled={load}>
                            <ThreeDots color="#FFFFFF" height={46} width={46} />
                        </Loadsave>
                        :
                        <Salve onClick={sendHabit} disabled={load}>Salvar</Salve>}
                </div>

            </InferiorBody>
        </CreateHabitBody>
    )
}

const ButtonsBody = styled.div`
    display: flex;
`

const DayButtons = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.changeColor ? '#CFCFCF' : '#FFFFFF'};
    color: ${props => props.changeColor ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
`;

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

