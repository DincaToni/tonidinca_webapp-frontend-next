import DefaultButton from "../atoms/defaultButton";

let LanguageSelector = ({languages}:{languages:string[]}) => {
  return (
    <div className="flex justify-items-start gap-[10px] bg-white/15 rounded-[50px] p-[5px]">
      {languages.map((language)=><DefaultButton >{language}</DefaultButton>)}
      
    </div>
  );
};

export default LanguageSelector;
