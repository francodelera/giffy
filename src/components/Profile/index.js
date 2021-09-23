import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "components/Spinner";
import "./index.css";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <Spinner />

    return (
        isAuthenticated && (
            <div className="gf-profile">
                <img src={user.picture} alt={user.name}></img>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        )
    )
}