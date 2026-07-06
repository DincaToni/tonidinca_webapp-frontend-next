import Education from "../organisms/education";
import Experience from "../organisms/experience";
import Hero from "../organisms/hero";
import TechStack from "../organisms/techStack";

let HomePageTemplate = () => {
  return (
    <>
      <Hero></Hero>
      <Experience></Experience>
      <Education></Education>
      <TechStack></TechStack>
    </>
  );
};

export default HomePageTemplate;
