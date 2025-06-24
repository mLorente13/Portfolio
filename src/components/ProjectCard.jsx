import PropTypes from "prop-types";

export default function ProjectCard({
    title,
    description,
    links,
    image,
    tags,
}) {
    return (
        <article className="flex flex-wrap">
            <img
                className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg mx-auto w-full sm:w-1/2"
                src={image}
                alt={title}
            />
            <section className="rounded-b-lg md:rounded-bl-none md:rounded-r-lg w-full sm:w-1/2 box-border mx-auto flex justify-between flex-col gap-2 p-5 bg-gray-950/60">
                <header className="flex items-center justify-end gap-4">
                    {links.map((link, index) => (
                        <a
                            href={link}
                            key={link}
                            className="flex items-center gap-2 p-2 rounded-md border-2 text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/50 duration-200"
                        >
                            {index === 0 ? (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                    </svg>
                                    <span>Code</span>
                                </>
                            ) : (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 icon icon-tabler icons-tabler-outline icon-tabler-link"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M9 15l6 -6" />
                                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                    <span>Preview</span>
                                </>
                            )}
                        </a>
                    ))}
                </header>
                <section className="flex flex-wrap gap-2">
                    <h2 className="w-full text-2xl font-bold">{title}</h2>
                    <p className="w-full">{description}</p>
                    {tags.map((tag) => (
                        <span
                            className={
                                `flex items-center px-3 py-0.5 gap-2 rounded-2xl ` +
                                tag.class
                            }
                            key={tag.name}
                        >
                            <tag.icon className="h-4.5 w-4.5" />
                            {tag.name}
                        </span>
                    ))}
                </section>
            </section>
        </article>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            class: PropTypes.string.isRequired,
        })
    ).isRequired,
};
