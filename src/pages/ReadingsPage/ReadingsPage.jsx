import * as readingsService from '../../utilities/readings-service'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ReadingsPage(){    
    const [readings, setReadings] = useState([]);

    useEffect(function() {
        async function getReadings() {
        const readings = await readingsService.getAllReadings();
        setReadings(readings)
    }
    getReadings();
    }, []);    

    async function handleSubmit(evt){
        evt.preventDefault();
        await readingsService.deleteReading(readings)
    }   

    return(
        <div>
            <h3>Your readings: </h3>
            { readings ?
                    readings.map((reading) =>
                        <div class='card'> 
                        <Link to={`/readings/${reading._id}`} state={reading} >
                            <h2>{reading.bookName}</h2>  
                            <h4>You read {reading.pages} pages in {reading.time} minutes </h4>
                            </Link>
                            <form action="" class='delete-form' onSubmit={handleSubmit}>
                                <button type='submit' value='X'>X</button>
                            </form>
                        </div>
                    )
                :
                <h3>You haven't shared any stories yet</h3>
            }
        </div >
        
    )
}