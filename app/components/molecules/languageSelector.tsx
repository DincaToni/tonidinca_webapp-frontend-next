import RadioButton from "../atoms/radioButton";
import { useDebugValue, useState } from "react";

let LanguageSelector = ({languages}:{languages:string[]}) => {
  const [languageState, setLanguageState] = useState("english")
  let changeLanguage= (language:string) => {
    setLanguageState(language);
  }
  return (
    <div data-testid={"language selector"} className="flex justify-items-start gap-[10px] bg-white/15 rounded-[50px] p-[5px]">
      {languages.map((language)=><RadioButton checked={languageState === language} onClick={changeLanguage(language)}>{language}</RadioButton>)}
      
    </div>
  );
};

export default LanguageSelector;
