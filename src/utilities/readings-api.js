import sendRequest from "./send-request";
const BASE_URL = '/api/readings'

export function getReadingsRequest(){
    return sendRequest(BASE_URL, 'GET')
}

export async function createReadingRequest(bookName, pages, time) {
    const newReading = { bookName: bookName, pages: pages, time: time}
    return sendRequest(BASE_URL, 'POST', newReading);
}