import TimelineItem from "./timelineItem";

type timelineItemsType = {
  title: string;
  period: [number, number | "Present"];
  description: string[];
};

//add verification for period (years should not be lower than present - 100 or in the future) (joi)
//add testing for things like -> if input period is "Present" then result should be Present
//                            ->if input period is "2015" then result should be "2015"
//                            ->if input period is "1015" then result should be result of verification
//                            ->if input period is "3015" then result should be result of verification
//                            ->if input description is null/empty/more than 6/ length of any item in array is bigger than x then result should be result of verification

let Timeline = ({ timelineItems }: { timelineItems: timelineItemsType[] }) => {
  return (
    <>
      <div className="pl-[40px] relative before:absolute before:content-[''] before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-linear-to-b before:from-white before:to-transparent">
        {timelineItems.map((item) => (
          <TimelineItem item={item}></TimelineItem>
        ))}
      </div>
    </>
  );
};

export default Timeline;
