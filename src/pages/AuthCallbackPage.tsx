import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallbackPage() {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();
  const hadCreateUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user.email && !hadCreateUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
        hadCreateUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
}
