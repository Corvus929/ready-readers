import { useState } from 'react';

export default function ReadingForm(){
    const [reading, setReading] = useState('');
    function handleChange(evt){
        setReading(evt.target.value)
    }

    function handleSubmit(evt){
        evt.preventDefault();
        alert(reading)
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