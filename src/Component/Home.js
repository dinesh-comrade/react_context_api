import { useUserContext } from "../Context/UserContext";

function Home() {
  const { user, logOut } = useUserContext();
  return (
    <div className="home-container">
      <form className="home-form">
        <h3>
          You are logged in as <span>{user.name}</span>
        </h3>
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
  );
}

export { Home };
