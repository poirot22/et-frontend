import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Infrastructure = () => {
  return (
    <VerticalTimeline>
      <div className="timeline-row">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Title 1</h3>
          <p>Description 1</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-5"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Title 2</h3>
          <p>Description 2</p>
        </VerticalTimelineElement>
      </div>

      <div className="timeline-row">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Title 3</h3>
          <p>Description 3</p>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElement components as needed */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work mb-5"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(33, 150, 243)" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Title 2</h3>
          <p>Description 2</p>
        </VerticalTimelineElement>
      </div>
    </VerticalTimeline>
  );
};

export default Infrastructure;
