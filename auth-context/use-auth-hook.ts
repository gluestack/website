import { useContext } from "react";
import { AuthContext } from ".";

function useAuthHook() {
  const ctx = useContext(AuthContext);

  return [ctx.user, ctx.isLoading];
}

export default useAuthHook;
