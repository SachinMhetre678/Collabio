"use client"; // Ensure this is at the top

import React from 'react';
import { LiveblocksProvider } from '@liveblocks/react';
import NotificationBox from '../_components/NotificationBox'; // Adjust the path as necessary
import liveblocksConfig from '../../../../liveblocks.config'; // Correct import path
import { Room } from '../../../Room';
import SideNav from '../_components/SideNav'
function Workspace({params}) {
  return (
    <div>
      <Room params={params}>
        <SideNav params={params} />
        </Room>
    </div>
  )
}

export default Workspace
