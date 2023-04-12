import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import GoalsPage from '../GoalsPage/GoalsPage';
import ReadingsPage from '../ReadingsPage/ReadingsPage';
import GoalsDetails from '../GoalsDetailPage/GoalsDetailPage';
import ReadingsDetails from '../ReadingsDetailPage/ReadingsDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/goals" element={<GoalsPage />}/>
            <Route path="/goals/details" element={<GoalsDetails />}/>
            <Route path="/readings" element={<ReadingsPage />}/>
            <Route path="/readings/details" element={<ReadingsDetails />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
