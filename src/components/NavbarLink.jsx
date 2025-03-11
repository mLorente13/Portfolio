export default function NavbarLink({ path, text }) {
    return (
        <li>
            <a
                className="inline-block w-full py-2 px-4 text-decoration-none rounded-xl font-semibold box-border text-black"
                href={path}
            >
                {text}
            </a>
        </li>
    );
}
