import { useState } from 'react';
import * as goalsService from '../../utilities/goals-service'

export default function GoalForm(){
    const [goal, setGoal] = useState('');
    const [goalName, setGoalName] = useState('');
    const [pageGoal, setPageGoal] = useState('');
    const [timeGoal, setTimeGoal] = useState('');
    function handleChange(evt){
        setGoalName(evt.target.value)
    }
    function makeChange(evt){
        setPageGoal(evt.target.value)
    }
    function manageChange(evt){
        setTimeGoal(evt.target.value)
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        goalsService.createGoal(goal)
        setGoalName('');
        setPageGoal(0);
        setTimeGoal(0);
    }   

    return (
        <form action="/goals" onSubmit={handleSubmit} class="form-container">
            
            <label htmlFor="goalName">Name your Goal <spacer type="vertical" width='50'> </spacer> 
            <input type="text" name="goalName" id='goalName' onChange={handleChange} value={goalName}/>
            </label>
            <br />
            <label htmlFor="pageGoal">How many pages do you want to read?
            <input type="number" name="pageGoal" id='pageGoal' onChange={makeChange} value={pageGoal}/>
            </label>
            <br />
            <label htmlFor="timeGoal">How long do you want to read for?
            <input type="number" name="timeGoal" id='timeGoal' onChange={manageChange} value={timeGoal}/>
            minutes
            </label>
            <br />
            <input type="submit" value="Add goal" />
        </form>
    )
}