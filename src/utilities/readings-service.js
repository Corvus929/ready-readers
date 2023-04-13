import * as readingsAPI from './readings-api'


export async function createReading(readingData) {
    // const token = await usersAPI.signUp(userData);
    // localStorage.setItem('token', token);
    // return getUser();
    readingsAPI.createReadingRequest(readingData)
}