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
      <div>
        {timelineItems.map((item) => (
          <div className="flex">
            <div className="bg-green min-w-3xs">list-symbol</div>
            <TimelineItem item={item}></TimelineItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
