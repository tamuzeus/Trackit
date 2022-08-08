import axios from 'axios';

const BASE_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit`;

function postSignUp(infos) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, infos);
  return promise;
}

function postLogin(infos) {
  const promise = axios.post(`${BASE_URL}/auth/login`, infos);
  return promise;
}

function postHabits(infos, token) {
  const promise = axios.post(`${BASE_URL}/habits`, infos, token);
  return promise;
}

function getHabits(token) {
    const promise = axios.get(`${BASE_URL}/habits`, token);
    return promise;
} 

function deleteHabits(habit_id, token) {
    const promise = axios.delete(`${BASE_URL}/habits/${habit_id}`, token);
    return promise;
}

function getHabitsToday() {
    const promise = axios.get(`${BASE_URL}/habits/today`);
    return promise;
} 

function checkHabits(habit_id) {
    const promise = axios.post(`${BASE_URL}/habits/${habit_id}/check`);
    return promise;
}

function uncheckHabits(habit_id) {
    const promise = axios.post(`${BASE_URL}/habits/${habit_id}/uncheck`);
    return promise;
}


export { postSignUp, postLogin, postHabits, getHabits, deleteHabits, getHabitsToday, checkHabits, uncheckHabits};
