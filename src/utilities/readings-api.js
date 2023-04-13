import sendRequest from "./send-request";
const BASE_URL = '.api/readings'

export async function createReadingRequest(readingData) {
    const newReading = { text: readingData}
    return sendRequest(BASE_URL, 'POST', newReading);
}