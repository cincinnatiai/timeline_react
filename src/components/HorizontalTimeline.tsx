import React from "react";
import "./HorizontalTimeline.css";

interface TimelineItem {
  id: string;
  number: number;
  title: string;
  status: string;
}

const HorizontalTimeline = ({
  stageStatus,
}: {
  stageStatus: TimelineItem[];
}) => {
  const getExtrasClasses = (item: TimelineItem): string => {
    if (item.status === "DONE") {
      return "success";
    } else {
      return "";
    }
  };

  return (
    <div className="timeline-container">
      {stageStatus.map((item) => (
        <div
          key={item.number}
          className={`timeline-item ${getExtrasClasses(item)}`}
        >
          <div className={`timeline-content ${getExtrasClasses(item)}`}>
            {item.number}
          </div>
          <div className="timeline-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalTimeline;
export type { TimelineItem };
