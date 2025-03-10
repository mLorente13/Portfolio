export default function NavbarLink({ path, text, setActiveLink }) {
    return (
        <li className="w-1/4">
            <a
                className="inline-block w-full py-2 px-4 text-decoration-none rounded-xl font-semibold box-border text-black"
                href={path}
                onClick={(e) => {
                    setActiveLink(text);
                }}
            >
                {text}
            </a>
        </li>
    );
}
