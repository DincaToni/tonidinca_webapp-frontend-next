'use client'

import RadioButton from "../atoms/radioButton";
import { useState, useEffect } from "react";

let LanguageSelector = ({ languages }: { languages: string[] }) => {
  const [languageState, setLanguageState] = useState("ENG")

  useEffect(() => { console.log(languageState) }, [languageState])
  let changeLanguage = (language: string) => {
    setLanguageState(language);
  }
  return (
    <div data-testid={"languageSelector"} className="flex justify-items-start gap-[10px] bg-white/15 rounded-[50px] p-[5px]">
      {languages.map((language) => <RadioButton checked={languageState === language} onClick={() => changeLanguage(language)}>{language}</RadioButton>)}

    </div>
  );
};

export default LanguageSelector;
