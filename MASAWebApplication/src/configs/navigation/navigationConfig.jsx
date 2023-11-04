import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BoltIcon from '@mui/icons-material/Bolt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Groups2Icon from '@mui/icons-material/Groups2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaidIcon from '@mui/icons-material/Paid';
import VideocamIcon from '@mui/icons-material/Videocam';

export const navigationConfig = {
    "Overview": [
      {
        icon: <HomeIcon />,
        name: "Home",
        url: "/",
        size: 12,
      },
      // {
      //   icon: <InfoIcon />,
      //   name: "About Masa-Dearborn",
      //   url: "/aboutus",
      //   size: 3,
      // },
      // {
      //   icon: <RocketIcon />,
      //   name: "Our Projects",
      //   url: "/projects",
      //   size: 3,
      // },
      // {
      //   icon: <PaidIcon />,
      //   name: "Sponsors",
      //   url: "/home",
      //   size: 3,
      // },
      // {
      //   icon: <VideocamIcon />,
      //   name: "Media",
      //   url: "/home",
      //   size: 3,
      // },
      // {
      //   icon: <RocketLaunchIcon />,
      //   name: "Launch Facilities",
      //   url: "/home",
      //   size: 3,
      // },
    ],
    "Our Projects": [
      {
        icon: <RocketIcon />,
        name: "Project HAZMAT",
        url: "/leadershipteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Certification Flights",
        url: "/projectmanagement",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project 2 Boosted 2 Bear",
        url: "/electricalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project Boosted Bear",
        url: "/mechanicalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project Overwatch",
        url: "/mechanicalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Test Rocket Series",
        url: "/mechanicalteam",
        size: 3,
      }
    ],
    "About MASA-Dearborn": [
      {
        icon: <Groups2Icon />,
        name: "Leadership Team",
        url: "/aboutus/leadership-team",
        size: 3,
      },
      {
        icon: <AccountTreeIcon />,
        name: "Project Management Team",
        url: "/aboutus/project-management-team",
        size: 3,
      },
      {
        icon: <BoltIcon />,
        name: "Electrical Team",
        url: "/aboutus/electrical-team",
        size: 3,
      },
      {
        icon: <PrecisionManufacturingIcon />,
        name: "Mechanical Team",
        url: "/aboutus/mechanical-team",
        size: 3,
      }
    ],
    "Media": [
      {
        icon: <CalendarMonthIcon />,
        name: "2016-2017",
        url: "/leadershipteam",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2017-2018",
        url: "/projectmanagement",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2018-2019",
        url: "/electricalteam",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2021-2022",
        url: "/mechanicalteam",
        size: 3,
      }
    ]
  }