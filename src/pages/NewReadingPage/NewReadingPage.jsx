import NewReadingForm from '../../components/NewReadingForm/NewReadingForm'

export default function NewReading({ user, setUser }){
    return (
        <div>
            <h1>New reading!</h1>
            <br />
            <NewReadingForm user={user} setUser={setUser} />
        </div>
    )
}