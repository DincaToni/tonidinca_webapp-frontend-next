import { render, screen } from "@testing-library/react";
import Experience from "@/app/components/organisms/experience";

describe("Experience section", ()=>{
    test("renders Experience section",()=>{
        render(<Experience></Experience>)
        expect(screen.getByTestId("experience")).toBeInTheDocument();
    })
})