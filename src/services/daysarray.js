import dayjs from "dayjs";

const daysarray = [
    {
        dia: 'D',
        semana: 'Domingo',
        condition: false,
        id: 0
    },
    {
        dia: 'S',
        semana: 'Segunda',
        condition: false,
        id: 1

    },
    {
        dia: 'T',
        semana: 'Terça',
        condition: false,
        id: 2
    },
    {
        dia: 'Q',
        semana: 'Quarta',
        condition: false,
        id: 3
    },
    {
        dia: 'Q',
        semana: 'Quinta',
        condition: false,
        id: 4
    },
    {
        dia: 'S',
        semana: 'Sexta',
        condition: false,
        id: 5
    },
    {
        dia: 'S',
        semana: 'Sábado',
        condition: false,
        id: 6
    },
]

const dayNumber = dayjs().day();
let weekday;
daysarray.forEach(value => {if (value.id === dayNumber) {weekday = value.semana;}});

export { daysarray, weekday };