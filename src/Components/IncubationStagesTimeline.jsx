import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import { PiBuildingsFill, PiStorefrontBold } from 'react-icons/pi'

export function IncubationStagesTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Pre-Incubation: Partner With BUNI.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <List>
              <ListItem> Legal Support </ListItem>
              <ListItem> Shared Space and Services </ListItem>
            </List>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <PiStorefrontBold className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Startup Stage.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              <List>
                <ListItem>Training and mentorship Programs </ListItem>
                <ListItem>Financial MGT Progress </ListItem>
              </List>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <PiBuildingsFill className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Company Stage.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              <List>
                <ListItem>Market Linkages </ListItem>
                <ListItem>Networking </ListItem>
              </List>
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
