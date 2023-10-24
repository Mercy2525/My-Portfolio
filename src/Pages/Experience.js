import { School } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='pink'>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='July 2023-Dec 2023' iconStyle={{background: "pink", color: "green"}} icon={<School/>}>
        <h3 className='vertical-timeline-element-title'>Moringa School, Nairobi</h3>
        <p>Full stack Software Development Program</p>
        <p>Focus: Web development with Flask, SQL and React JS.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='Sept 2014-Dec 2019' iconStyle={{background: "pink", color: "fff"}} icon={<School/>}>
        <h3 className='vertical-timeline-element-title'>Kenyatta University, Nairobi</h3>
        <p>Bachelor of Science- BSC.Civil Engineering</p>
        </VerticalTimelineElement>
        
        
       
      </VerticalTimeline>
      
    </div>
  )
}

export default Experience