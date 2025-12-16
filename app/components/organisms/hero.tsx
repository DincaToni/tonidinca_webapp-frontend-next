import LanguageSelector from "../molecules/languageSelector";
import Title from "../atoms/title";
import DescriptiveHeroText from "../atoms/descriptiveHeroText";

let Hero = () => {
  return (
    <div className="sectionGlassBackground">
      <div className="flex flex-row justify-between w-full">
        <div>Logo</div>
        <LanguageSelector />
      </div>
      <div className="flex flex-col items-center py-[60px]">
        <div>
          <Title type="heroTitle">FullStack Developer</Title>
        </div>
        <DescriptiveHeroText>
          Crafting seamless digital solutions
        </DescriptiveHeroText>
      </div>
    </div>
  );
};

export default Hero;
