import { checkToken } from '../../utilities/users-service'
import * as readingsService from '../../utilities/readings-service'
import { useEffect, useState } from 'react'

export default function ReadingsPage(){    
    const [readings, setReadings] = useState([]);

    useEffect(function() {
        async function getReadings() {
        const readings = await readingsService.getAllReadings();
        setReadings(readings)
    }
    getReadings();
    }, []);    

    async function handleCheckToken(){
        const expDate = await checkToken()
        console.log(expDate);
    }
    console.log(readings)
    return(
        <div>
            <h3>Your readings: </h3>
            {/* <button onClick={ handleCheckToken } >Check when token expires</button> */}
            { readings ?
                readings.map(reading => <h3>{reading.bookName}</h3>)
                :
                <h3>You haven't read any stories yet</h3>
            }
        </div>
        
    )
}