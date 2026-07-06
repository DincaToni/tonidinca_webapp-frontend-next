import { render, screen } from "@testing-library/react";
import TechStack from "@/app/components/organisms/techStack";

describe("Tech Stack section", () => {
    test("renderes section", () => {
        render(<TechStack></TechStack>)
        expect(screen.getByTestId("techStack")).toBeInTheDocument();

    })
    //add test that all elements are present (count wise)
})
