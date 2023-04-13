import { useState } from 'react';
import * as readingsService from '../../utilities/readings-service'

export default function ReadingForm({ user, setUser }){
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
            <label htmlFor="pages">How many pages did you read?
            <input type="number" name="pages" id='pages' onChange={handleChange} value={reading}/>
            </label>
            <br />
            <input type="submit" value="Add Reading" />
        </form>
    )
}