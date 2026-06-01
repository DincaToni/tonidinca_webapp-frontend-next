import { render,screen } from "@testing-library/react";
import LanguageSelector from "../components/molecules/languageSelector";

describe("Language Selector component",()=>{
    test("renders component",()=>{
        render(<LanguageSelector languages={["English", "Deutsch","Romana"]}></LanguageSelector>)
        expect(screen.getByTestId("languageselector")).toBeInTheDocument();
    })
    test("only 1 button is always active",()=>{
        render(<LanguageSelector languages={["English", "Deutsch","Romana"]}></LanguageSelector>)
    })
})