import { useState } from 'react';
import * as readingsService from '../../utilities/readings-service'
import { useNavigate } from 'react-router-dom';
export default function ReadingForm(){
    let navigate = useNavigate('')
    const [reading, setReading] = useState({
        bookName: '',
        pages: 0,
        time: 0,
    });

    function handleChange(evt){
        setReading({...reading, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        console.log('submit p1')
        readingsService.createReading(reading)
        console.log('this is a reading', reading)
        navigate('/readings')
    }     

    return (
        <div class='form-container'> 
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="bookName">What book did you read?
                <input type="text" name="bookName" id='bookName' onChange={handleChange} value={reading.bookName}/>
                </label>
                <label htmlFor="pages">How many pages did you read?
                <input type="number" name="pages" id='pages' onChange={handleChange} value={reading.pages}/>
                pages</label>
                <label htmlFor="time">How long did you read for?
                <input type="number" name="time" id='time' onChange={handleChange} value={reading.time}/>
                minutes </label>
                <br />
                <input type="submit" value="Add Reading" />
            </form>
        </div> 
    )
}