import Title from "../atoms/title";
import Timeline from "../molecules/timeline";

let Education = () => {
    return (<div data-testid="education" className="sectionGlassBackground">
        <Title type="sectionTitle"> Education</Title>
        <Timeline
            timelineItems={[
                {
                    title: "Master's in Computer Science",
                    period: [2015, "Present"],
                    description: "lorem ipsum",
                }, //for development purposes
                {
                    title: "Bachelor's in Computer Science",
                    period: [2013, 2015],
                    description: "lorem ipsum dolor",
                },
                {
                    title: "Highschool",
                    period: [2013, 2015],
                    description: "lorem ipsum dolor",
                },
            ]}
        ></Timeline>
    </div>)
}

export default Education;