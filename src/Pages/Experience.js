import { School, Work } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='pink'>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='Sept 2014-Dec 2019' iconStyle={{background: "pink", color: "green"}} icon={<School/>}>
        <h3 className='vertical-timeline-element-title'>Kenyatta University, Nairobi</h3>
        <p>Bachelor of Science- BSC.Civil Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='Sept 2014-Dec 2019' iconStyle={{background: "pink", color: "fff"}} icon={<School/>}>
        <h3 className='vertical-timeline-element-title'>Kenyatta University, Nairobi</h3>
        <p>Bachelor of Science- BSC.Civil Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='Sept 2014-Dec 2019' iconStyle={{background: "pink", color: "fff"}} icon={<Work/>}>
        <h3 className='vertical-timeline-element-title'>Kenyatta University, Nairobi</h3>
        <p>Bachelor of Science- BSC.Civil Engineering</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
      
    </div>
  )
}

export default Experience