import React from 'react';
import { CONFIG } from 'src/config-global';
import { SessionListView } from 'src/sections/training-session/product-list-view';
export const metadata = { title: `Training Session - ${CONFIG.appName}` };

const TrainingSession = () => {
  return (
    <div>
      <SessionListView />
    </div>
  );
};

export default TrainingSession;
