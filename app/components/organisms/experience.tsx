import Title from "../atoms/title";
import Timeline from "../molecules/timeline";

let Experience = () => {
  return (
    <div data-testid="experience" className="sectionGlassBackground">
      <Title type="sectionTitle"> Experience</Title>
      <Timeline
        timelineItems={[
          {
            title: "dev",
            period: [2015, "Present"],
            description: ["lorem ipsum"],
          }, //for development purposes
          {
            title: "dev again",
            period: [2013, 2015],
            description: ["lorem ipsum dolor"],
          },
        ]}
      ></Timeline>
    </div>
  );
};

export default Experience;
