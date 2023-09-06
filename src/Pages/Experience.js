import { School } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='pink'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2014' iconStyle={{background: "pink", color: "fff"}} icon={<School/>}></VerticalTimelineElement>
        <h3 className='vertical-timeline-element-title'>Naivasha Girls HighSchool,Naivasha</h3>
        <p>KCSE Certificate</p>
      </VerticalTimeline>
    </div>
  )
}

export default Experience