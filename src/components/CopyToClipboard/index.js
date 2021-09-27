import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './CopyToClipboard.css';
import Modal from "components/Modal";
import LoginPage from "pages/Login";

export default function CopyToClipboard({ url }) {
    const { isAuthenticated } = useAuth0();
    const [showModal, setShowModal] = useState(false);
    const tooltipRef = useRef();

    const handleClick = () => {
        if (!isAuthenticated) return setShowModal(true);
        navigator.clipboard.writeText(url);
        tooltipRef.current.innerText = '✅Copied!'
        tooltipRef.current.style.left = '-105px'
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <button className='gf-Copy' onClick={handleClick}>
                <span aria-label='Copy to clipboard' role='img'>📄</span>
                <div ref={tooltipRef} class="tooltip-text">Copy to clipboard</div>
            </button>
            {showModal && <Modal onClose={handleClose}><LoginPage /></Modal>}
        </>
    )
}