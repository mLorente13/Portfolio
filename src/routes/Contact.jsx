export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-lg">
                <span>Email:</span>
                <a
                    className="text-blue-500"
                    href="mailto:
                    [email protected]"
                >
                    [email protected]
                </a>
            </p>

            <p className="text-lg">
                <span>LinkedIn:</span>
                <a
                    className="text-blue-500"
                    href="https://www.linkedin.com/in/username"
                >
                    linkedin.com/in/username
                </a>
            </p>
        </div>
    );
}
