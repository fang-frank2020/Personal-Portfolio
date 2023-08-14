import Link from 'next/link';

export default function Navitem(props) {
    const { text } = props;

    return(
        <div className="NavItem" >
            <Link className="NavItemLink" href={text != "Home" ? "/" + text : "/"}>{text}</Link>
        </div>
    )
}