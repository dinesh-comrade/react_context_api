/* eslint-disable jsx-a11y/anchor-is-valid */
import { useUserContext } from "../Context/UserContext";

function Header() {
  const { user, logOut } = useUserContext();
  console.log(user);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid p-3">
          <a className="navbar-brand">React Context API</a>
          <form className="d-flex justify-content-center align-items-center">
            <a className="nav-link" href="#">
              Welcome, {user.name}
            </a>
            {user.isGuestUser && (
              <button className="btn btn-primary rounded-pill" type="submit">
                Login
              </button>
            )}
            {!user.isGuestUser && (
              <button
                className="btn btn-primary rounded-pill"
                type="submit"
                onClick={logOut}
              >
                Logout
              </button>
            )}
          </form>
        </div>
      </nav>
    </>
  );
}

export { Header };
