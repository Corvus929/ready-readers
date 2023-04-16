import * as readingsAPI from './readings-api'

export async function getAllReadings() {
    const allReadings = await readingsAPI.getReadingsRequest()
    return allReadings
}

export async function createReading(bookName, pages, time) {
    const newReading = await readingsAPI.createReadingRequest(bookName, pages, time)
    // readingsAPI.createReadingRequest(readingData)
    return newReading
}