import { Link } from "./styles"

export default function Button({ children, href, onClick, size = 'small' }) {
    return <Link href={href} onClick={onClick} size={size}>{children}</Link>
}