import TimelineItem from "../components/TimelineItem";

export default function Education() {
    const education = [
        {
            title: "Higher vocational training (upper secondary education)",
            place: "Es Liceu",
            date: "Sep. 2023 - Jun. 2025",
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

    const experienceItems = [
        {
            title: "Web Developer",
            place: "ROIG",
            date: "Jun. 2025 - Current",
            description:
                "Developing and maintaining web applications using modern technologies, ensuring high performance and responsiveness.",
        },
    ];

    return (
        <main className="w-11/12 lg:w-2/3 2xl:w-1/2 mx-auto flex flex-col gap-8 items-center justify-center flex-wrap pt-15 pb-30 md:py-22 min-h-screen">
            <section className="mx-auto w-full bg-gray-500/30 p-3 rounded-lg">
                <h1 className="w-full font-bold text-4xl">
                    Experience<span className="text-orange-400">.</span>
                </h1>
                <section className="m-3 border-l-2">
                    {experienceItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            place={item.place}
                            date={item.date}
                            description={item.description}
                            isLast={item.date.includes("Current")}
                        />
                    ))}
                </section>
            </section>

            <section className="mx-auto w-full bg-gray-500/30 p-3 rounded-lg">
                <h1 className="w-full font-bold text-4xl">
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
                            isLast={item.date.includes("Current")}
                        />
                    ))}
                </section>
            </section>
        </main>
    );
}
