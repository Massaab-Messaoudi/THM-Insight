import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';
import * as FcIcons from 'react-icons/fc';


export const SidebarData = [
  {
    title: 'THMInsight',
    cName: 'nav-text'
    
  },
  {
    title: 'Dashboard',
    path: '/',
    icon: <RiIcons.RiDashboardFill />,
    cName: 'nav-text'
  },
  {
    title: 'Graphs',
    path: '/graphs',
    icon: <GoIcons.GoGraph />,
    cName: 'nav-text'
  },
  {
    title: 'Alert',
    path: '/alert',
    icon: <GoIcons.GoAlert/>,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/report',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Map',
    path: '/map',
    icon: <RiIcons.RiMapPinUserLine />,
    cName: 'nav-text'
  },
  {
    title: 'Planning',
    path: '/planning',
    icon: <FcIcons.FcPlanner />,
    cName: 'nav-text'
  },
  {
    title: 'Help Conter',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings />,
    cName: 'nav-text'
  }
];