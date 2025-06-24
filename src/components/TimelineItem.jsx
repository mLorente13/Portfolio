import propTypes from "prop-types";

export default function TimelineItem({
    title,
    place,
    date,
    description,
    isLast,
}) {
    return (
        <article className="ps-4 my-8 relative">
            {isLast ? (
                <div className="h-4 w-4 bg-orange-400 animate-ping absolute top-4 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            ) : null}
            <div className="h-4 w-4 bg-orange-400 absolute top-4 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <section className="flex flex-col gap-2">
                <h2 className="text-lg md:text-2xl font-bold">{title}</h2>
                <p className="text-lg font-semibold text-orange-400/90">
                    {place}
                </p>
                <p className="text-lg font-light">{date}</p>
                <p className="text-lg font-light">{description}</p>
            </section>
        </article>
    );
}

TimelineItem.propTypes = {
    title: propTypes.string.isRequired,
    place: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    isLast: propTypes.bool.isRequired,
};
