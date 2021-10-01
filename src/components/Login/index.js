import { useAuth0 } from "@auth0/auth0-react";
import Button from "components/Button";

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();

    return <Button href="#" onClick={() => loginWithRedirect()}>Login</Button>
}