import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.css';
export default function LogoutButton() {
    const { logout } = useAuth0();

    return <button className="btn-logout" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
}