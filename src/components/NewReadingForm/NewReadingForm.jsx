import { useState } from 'react';
import * as readingsService from '../../utilities/readings-service'

export default function ReadingForm(){
    const [reading, setReading] = useState(0);
    function handleChange(evt){
        setReading(evt.target.value)
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        readingsService.createReading(reading)
        setReading(0);
    }   
    return (
        <form action="/readings" onSubmit={handleSubmit}>
            <h2>New Reading!</h2>
            <label htmlFor="pages">How many pages did you read?
            <input type="number" name="pages" id='pages' onChange={handleChange} value={reading}/>
            <input type="submit" value="Add Reading" />
            </label>
        </form>
    )
}