import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { APP_MOUNT_POINT } from './constants/app';

render(<App />, document.getElementById(APP_MOUNT_POINT));
