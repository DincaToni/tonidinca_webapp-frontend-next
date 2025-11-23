import LanguageSelector from "../molecules/languageSelector";

let Hero = () => {
  return (
    <div className="sectionGlassBackground">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>Logo</div>
          <LanguageSelector />
        </div>
        <div>FullStack Developer</div>
        <div>Hero Description</div>
      </div>
    </div>
  );
};

export default Hero;
