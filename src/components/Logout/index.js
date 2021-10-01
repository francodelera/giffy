import { useAuth0 } from "@auth0/auth0-react";
import Button from "components/Button";

export default function LogoutButton() {
    const { logout } = useAuth0();

    return <Button href="#" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
}