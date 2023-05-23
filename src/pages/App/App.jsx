import * as readingsService from '../../utilities/readings-service';
import * as goalsService from '../../utilities/goals-service';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewGoal from '../NewGoalsPage/NewGoalsPage';
import GoalsPage from '../GoalsPage/GoalsPage';
import GoalsDetails from '../GoalsDetailPage/GoalsDetailPage';
// import ReadingDetail from '../ReadingDetailPage/ReadingDetailPage';
import ReadingsPage from '../ReadingsPage/ReadingsPage';
import EditReadingPage from '../EditReadingPage/EditReadingPage'
import NewReading from '../NewReadingPage/NewReadingPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [readings, setReadings] = useState([]);
  const [goals, setGoals] = useState([]);
  

  useEffect(function() {
      async function getReadings() {
      const readings = await readingsService.getAllReadings();
      }
      setReadings(readings)
      async function getGoals() {
        const goals = await goalsService.getAllGoals();
        setGoals(goals)
  }
  getReadings();
  getGoals();
  }, []);    
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <hr />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/goals" element={<GoalsPage goals={goals} />}/>
            <Route path="/goals/:id" element={<GoalsDetails goals={goals} />}/>
            <Route path="/goals/new" element={<NewGoal />}/>
            <Route path="/readings/new" element={<NewReading />}/>
            <Route path="/readings" element={<ReadingsPage readings={readings} />}/>
            <Route path="/readings/:id" element={<EditReadingPage readings={readings}/>}/>
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