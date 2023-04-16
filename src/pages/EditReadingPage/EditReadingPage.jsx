import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import * as readingsService from '../../utilities/readings-service'

export default function EditForm({ readings }){
    let navigate = useNavigate();
    let { id } = useParams();
    const location = useLocation();
    const [reading, setReading] = useState({});

    useEffect(function() {
        async function getReading() {
            console.log(readings)
            let readingToEdit = await readings.find(reading => reading._id == id)
            console.log(location.state)
            setReading(location.state)
    }
    getReading();
    }, []);

    function handleChange(evt){
        setReading({...reading, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        console.log('submit p1')
        readingsService.editReading(reading)
        console.log('this is a reading', reading)
        navigate('/readings')
    }   

    return (
        <>
         <h1>Edit Reading</h1>
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
                    <input type="submit" value="Edit Reading" />
                </form>
        </div>   
        </> 
    )
}