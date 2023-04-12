import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Little Logo here please cor dont forget me</span>
      <span>Ready readers? Get ready, set, read!</span>
      &nbsp; | &nbsp;
      <Link to="/readings">Readings</Link>
      &nbsp; | &nbsp;
      <Link to="/readings/new">New Reading</Link>
      &nbsp; | &nbsp;
      <Link to="/goals">Goals</Link>
      &nbsp; | &nbsp;
      <Link to="/goals/new">New Goals</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}