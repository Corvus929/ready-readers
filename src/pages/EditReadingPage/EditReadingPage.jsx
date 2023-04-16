import { useState } from 'react';
import { useParams } from 'react-router-dom'
import * as readingsService from '../../utilities/readings-service'
import { useNavigate } from 'react-router-dom';

export default function EditForm({ readings }){
    let navigate = useNavigate();
    let { readingId } = useParams();
    let readingToEdit = readings.find(reading => reading._id === readingId)
    console.log(readingToEdit)
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
        await readingsService.editReading(reading)
        navigate('/readings')
    }   

    return (
        <>
            <h1>Edit Reading</h1>
            <div class='form-container'> 
                <form action="" onSubmit={handleSubmit} >
                    <label htmlFor="bookName">What book did you read?
                    <input type="text" name="bookName" id='bookName' onChange={handleChange} value={readingToEdit.bookName}/>
                    </label>
                    <label htmlFor="pages">How many pages did you read?
                    <input type="number" name="pages" id='pages' onChange={handleChange} value={readingToEdit.pages}/>
                    pages</label>
                    <label htmlFor="time">How long did you read for?
                    <input type="number" name="time" id='time' onChange={handleChange} value={readingToEdit.time}/>
                    minutes </label>
                    <br />
                    <input type="submit" value="Add Reading" />
                </form>
            </div> 
        </>
    )
}