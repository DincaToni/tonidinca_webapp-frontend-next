type timelineItemType = {
  title: string;
  period: [number, number | "Present"];
  description: string[];
};

let TimelineItem = ({ item }: { item: timelineItemType }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.period[0] + " - " + item.period[1]}</p>
      <p>{item.description}</p>
    </div>
  ); //item.description should be a list
};

export default TimelineItem;
