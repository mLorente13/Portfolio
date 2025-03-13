import TimelineItem from "../components/TimelineItem";

export default function Education() {
    const education = [
        {
            title: "Higher vocational training (upper secondary education)",
            place: "Es Liceu",
            date: "Sep. 2023 - Current",
            description:
                "The general competence of this cycle is to develop, implement, and maintain web applications using various models and technologies, ensuring secure data access and adhering to standards for accessibility, usability, and quality.",
        },
        {
            title: "Intermediate vocational training (upper secondary education)",
            place: "Es Liceu",
            date: "Sep. 2021 - Jun. 2023",
            description:
                "The general competence of this cycle is to install and maintain services on fixed and mobile networks, Internet services and single-user and multi-user computer systems.",
        },
        {
            title: "Compulsory secondary education",
            place: "IES Binissalem",
            date: "Sep. 2017 - Jun. 2021",
            description: "Focus on entrepreneurship and innovation",
        },
    ];
    return (
        <main className="w-11/12 lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col flex-wrap pt-15 pb-30 md:py-22 min-h-screen">
            <section className="mx-auto w-full bg-slate-900/60 p-3 rounded-lg">
                <h1 className="w-full text-6xl">
                    Formation<span className="text-orange-400">.</span>
                </h1>
                <section className="m-3 border-l-2">
                    {education.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            place={item.place}
                            date={item.date}
                            description={item.description}
                            isLast={index === 0}
                        />
                    ))}
                </section>
            </section>
        </main>
    );
}
