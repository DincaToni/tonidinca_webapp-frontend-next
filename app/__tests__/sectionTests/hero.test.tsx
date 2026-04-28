import { render,screen } from "@testing-library/react";
import Hero from "@/app/components/organisms/hero";

describe ("Hero section", ()=>{
    test("renders Hero section", ()=>{
        render(<Hero></Hero>)
        expect(screen.getByTestId("hero")).toBeInTheDocument();

    })
})
