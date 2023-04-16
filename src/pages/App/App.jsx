import * as readingsService from '../../utilities/readings-service'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import GoalsPage from '../GoalsPage/GoalsPage';
import ReadingsPage from '../ReadingsPage/ReadingsPage';
import GoalsDetails from '../GoalsDetailPage/GoalsDetailPage';
import ReadingDetail from '../ReadingDetailPage/ReadingDetailPage';
import EditReadingPage from '../EditReadingPage/EditReadingPage'
import NewReading from '../NewReadingPage/NewReadingPage';
import NewGoal from '../NewGoalsPage/NewGoalsPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [readings, setReadings] = useState([]);

  useEffect(function() {
      async function getReadings() {
      const readings = await readingsService.getAllReadings();
      setReadings(readings)
  }
  getReadings();
  }, []);    
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <hr />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/goals" element={<GoalsPage />}/>
            <Route path="/goals/:id" element={<GoalsDetails />}/>
            <Route path="/goals/new" element={<NewGoal />}/>
            <Route path="/readings/new" element={<NewReading />}/>
            <Route path="/readings" element={<ReadingsPage readings={readings} />}/>
            <Route path="/readings/:readingId" element={<EditReadingPage readings={readings}/>}/>
            {/* <Route path="/readings/:id" element={<ReadingDetail />}/> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
//pull all readings into a page
//readings to state