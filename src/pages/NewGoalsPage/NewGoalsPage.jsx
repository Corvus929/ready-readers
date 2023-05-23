import GoalForm from "../../components/NewGoalForm/NewGoalForm"

export default function NewGoal({ user, setUser }){
    return(
        <div>
            <h3>NewGoalForm</h3>
            <GoalForm user={user} setUser={setUser}/>
        </div>
    )
}
