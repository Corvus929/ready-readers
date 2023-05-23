import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span><img src="https://i.imgur.com/BKapvE1.png" alt="cute logo" /></span>
      <Link to="/readings">Readings</Link>
      &nbsp; | &nbsp;
      <Link to="/readings/new">New Reading</Link>
      &nbsp; | &nbsp;
      <span>Ready reader {user.name} ? Get ready, set, read!</span>
      &nbsp; | &nbsp;
      <Link to="/goals">Goals</Link>
      &nbsp; | &nbsp; &nbsp;
      <Link to="/goals/new">New Goals</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}