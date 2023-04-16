import * as goalsAPI from './goals-api'

export async function getAllGoals() {
    const allGoals = await goalsAPI.getGoalsRequest()
    return allGoals
}

export async function createGoal(goalData) {
    goalsAPI.createGoalRequest(goalData)
}