import React from 'react';

import config from '../../config/website';

const NotFound = () => {
  if (typeof window !== 'undefined') {
    window.location = config.pathPrefix;
  }

  return null;
};

export default NotFound;
