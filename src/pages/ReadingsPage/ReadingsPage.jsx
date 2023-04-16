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
                        {/* <Link to='readings/' reading._id > */}

                            <h3>{reading.bookName}</h3>  
                            <h4>You read {reading.pages} pages</h4>
                            <h4>You read for {reading.time} minutes</h4>
                            <form action="" class='delete-form' onSubmit={handleSubmit}>
                                <button type='submit'>X</button>
                            </form>
                            {/* </Link> */}
                        </div>
                    )
                :
                <h3>You haven't shared any stories yet</h3>
            }
        </div >
        
    )
}