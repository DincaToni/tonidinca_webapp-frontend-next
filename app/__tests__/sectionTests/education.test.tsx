import { render, screen } from "@testing-library/react";
import Education from "@/app/components/organisms/education";

describe("Education section", () => {
    test("renders Education section", () => {
        render(<Education></Education>)
        expect(screen.getByTestId("education")).toBeInTheDocument();
    })
})