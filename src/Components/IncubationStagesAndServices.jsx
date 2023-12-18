import { Typography } from '@material-tailwind/react';
import React from 'react';
import { IncubationStagesTimeline } from './IncubationStagesTimeline';


export default function IncubationStagesAndServices() {
  return (
    <div>
        <Typography variant='h4' color='white' className=' py-3 '> Our Incubation Stages and Services </Typography>

        <IncubationStagesTimeline />
    </div>
  )
}
