import sendRequest from "./send-request";
const BASE_URL = '/api/goals'

export function getGoalsRequest(){
    return sendRequest(BASE_URL, 'GET')
}

export async function createGoalRequest(GoalData) {
    const newGoal = { text: GoalData}
    return sendRequest(BASE_URL, 'POST', newGoal);
}