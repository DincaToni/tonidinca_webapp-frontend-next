import { render,screen } from "@testing-library/react";
import TimelineItem from "../components/atoms/timelineItem";

describe("Timeline item Component",()=>{
    test("renders timeline item",()=>{
        let item = {
            title:"Grand Regent",
            period: [2000, "Present"] as [number, number|"Present"],
            description: "Ruler of the Viltrum empire"
        }

        render(<TimelineItem item={item}></TimelineItem>)
        expect(screen.getByTestId("timelineItem")).toBeInTheDocument();
    })
})