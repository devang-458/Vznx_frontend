import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
    const { user, loading, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) return;

        if (!user) {
            clearUser();
            navigate("/login")
        }
    }, [user, loading, clearUser, navigate])
<<<<<<< HEAD

    return { user, loading, clearUser };
=======
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
}