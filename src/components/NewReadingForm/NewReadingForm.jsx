import { useState } from 'react';
import * as readingsService from '../../utilities/readings-service'

export default function ReadingForm(){
    const [bookName, setBookName] = useState('');
    const [pages, setPages] = useState(0);
    const [time, setTime] = useState(0);
    function handleChange(evt){
        setBookName(evt.target.value)
    }
    function doChange(evt){
        setPages(evt.target.value)
    }
    function makeChange(evt){
        setTime(evt.target.value)
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        readingsService.createReading(bookName, pages, time)
        setBookName('');
        setTime(0);
        setPages(0);
    }   

    return (
        <div class='form-container'> 
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="bookName">What book did you read?
                <input type="text" name="bookName" id='bookName' onChange={handleChange} value={bookName}/>
                </label>
                <label htmlFor="pages">How many pages did you read?
                <input type="number" name="pages" id='pages' onChange={doChange} value={pages}/>
                pages</label>
                <label htmlFor="time">How long did you read for?
                <input type="number" name="time" id='time' onChange={makeChange} value={time}/>
                minutes </label>
                <br />
                <input type="submit" value="Add Reading" />
            </form>
        </div> 
    )
}