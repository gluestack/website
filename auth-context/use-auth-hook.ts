import { useContext } from "react";
import { AuthContext } from "./index";

function useAuthHook() {
  const [user, isLoading, setUser] = useContext(AuthContext);

  return [user, isLoading, setUser];
}

export default useAuthHook;
