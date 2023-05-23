import * as goalsAPI from './goals-api'

export async function getAllGoals() {
    const allGoals = await goalsAPI.getGoalsRequest()
    return allGoals
}

export async function createGoal(goal) {
    const newGoal = await goalsAPI.createGoalRequest(goal)
    return newGoal
}