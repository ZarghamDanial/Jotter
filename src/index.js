import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import * as serviceWorker from 'react-service-worker';
import { BrowserRouter as Router } from 'react-router-dom';
import config from './config';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'jotter',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

//serviceWorker.unregister();
