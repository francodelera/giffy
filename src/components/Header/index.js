import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "components/Login";
import LogoutButton from "components/Logout";
import Profile from "components/Profile";
import './index.css';

export default function Header() {
    const { isAuthenticated } = useAuth0();
    return (
        <header className="gf-header">
            {isAuthenticated ?
                <>
                    <Profile />
                    <LogoutButton />
                </> :
                <LoginButton />
            }
        </header>
    )
}