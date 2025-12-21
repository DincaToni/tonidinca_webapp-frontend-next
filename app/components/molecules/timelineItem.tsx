type timelineItemType = {
  title: string;
  period: [number, number | "Present"];
  description: string[];
};

let TimelineItem = ({ item }: { item: timelineItemType }) => {
  return (
    <div className="relative mb-[40px] text-white before:absolute before:content-[''] before:left-[-46px] before:top-[5px] before:w-[14px] before:h-[14px] before:rounded-full before:bg-white before:ring-[4px] before:ring-white/30">
      <h3>{item.title}</h3>
      <p>{item.period[0] + " - " + item.period[1]}</p>
      <p>{item.description}</p>
    </div>
  ); //item.description should be a list
};

export default TimelineItem;
