import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RocketIcon from '@mui/icons-material/Rocket';

export const navigationConfig = [
  {
    icon: <HomeIcon  />,
    name: "Home",
    url: "/",
    size: 2,
  },
  {
    icon: <InfoIcon />,
    name: "About MASA Dearborn",
    url: "/aboutus/leadership-team",
    size: 3,
  },
  {
    icon: <RocketIcon />,
    name: "Our Projects",
    url: "/projects",
    size: 2,
  }
]