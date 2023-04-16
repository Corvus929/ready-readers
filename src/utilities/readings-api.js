import sendRequest from "./send-request";
const BASE_URL = '/api/readings'

export function getReadingsRequest(){
    return sendRequest(BASE_URL, 'GET')
}

export async function createReadingRequest(reading) {
    const newReading = { reading: reading}
    return sendRequest(BASE_URL, 'POST', newReading);
}

export async function editReadingRequest(reading) {
    const editedReading = { reading: reading }
    return sendRequest(BASE_URL, 'PUT', editedReading)
}

export async function deleteReadingRequest(reading) {
    const deletedReading = { reading: reading }
    return sendRequest(BASE_URL, 'DELETE', deletedReading)
}