import { render, screen } from "@testing-library/react";
import Timeline from "../components/molecules/timeline";

describe("Timeline Component",()=>{
    test("renders component",()=>{
        let TimelineTestItems = [{
            title:"Grand Regent",
            period: [2000, "Present"] as [number, number|"Present"],
            description: "Ruler of the Viltrum empire"
        },
    {
            title:"Assistant to the regional manager",
            period: [1500, 2000] as [number, number|"Present"],
            description: "Second in command"
        },
    {
            title:"Customer Help",
            period: [1000, 1500] as [number, number|"Present"],
            description: "Make burgers"
        }]

        render(<Timeline timelineItems={TimelineTestItems}></Timeline>)

        expect(screen.getByTestId("timeline")).toBeInTheDocument();
    })
})