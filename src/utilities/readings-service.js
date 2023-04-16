import * as readingsAPI from './readings-api'

export async function getAllReadings() {
    const allReadings = await readingsAPI.getReadingsRequest()
    return allReadings
}

export async function createReading(reading) {
    const newReading = await readingsAPI.createReadingRequest(reading)
    return newReading
}

export async function editReading(reading) {
    const editReadings = await readingsAPI.editReadingRequest(reading)
    return editReadings 
}

export async function deleteReading(reading) {
    const deleteReading = await readingsAPI.deleteReadingRequest(reading)
    return deleteReading
}