import { Link } from "./styles"

export default function Button({ children, href, onClick }) {
    return <Link href={href} onClick={onClick}>{children}</Link>
}