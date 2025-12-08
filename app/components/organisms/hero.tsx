import LanguageSelector from "../molecules/languageSelector";
import Title from "../atoms/title";

let Hero = () => {
  return (
    <div className="sectionGlassBackground">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>Logo</div>
          <LanguageSelector />
        </div>
        <div>
          <Title type="heroTitle">FullStack Developer</Title>
        </div>
        <div>Hero Description</div>
      </div>
    </div>
  );
};

export default Hero;
