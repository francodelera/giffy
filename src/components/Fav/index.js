import { useAuth0 } from "@auth0/auth0-react";
import './Fav.css';

export default function Fav({ id }) {
    const { isAuthenticated } = useAuth0();
    const handleClick = () => {
        alert(id);
    }

    return isAuthenticated ? (
        <button className='gf-Fav' onClick={handleClick}>
            <span aria-label='Fav Gif' role='img'>💗</span>
        </button>
    )
        : ''
}