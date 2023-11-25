import { LoginForm } from "./LoginForm";
import { Home } from "./Home";
import { useUserContext } from "../Context/UserContext";

function Auth() {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? <LoginForm /> : <Home />}</>;
}

export { Auth };
