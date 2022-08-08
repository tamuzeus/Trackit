import dayjs from "dayjs";

const daysarray = [
    {
        dia: 'D',
        semana: 'Domingo',
        id: 0
    },
    {
        dia: 'S',
        semana: 'Segunda',
        id: 1

    },
    {
        dia: 'T',
        semana: 'Terça',
        id: 2
    },
    {
        dia: 'Q',
        semana: 'Quarta',
        id: 3
    },
    {
        dia: 'Q',
        semana: 'Quinta',
        id: 4
    },
    {
        dia: 'S',
        semana: 'Sexta',
        id: 5
    },
    {
        dia: 'S',
        semana: 'Sábado',
        id: 6
    },
]

const dayNumber = dayjs().day();
let weekday;
daysarray.forEach(value => {if (value.id == dayNumber) {weekday = value.semana;}});

export { daysarray, weekday };