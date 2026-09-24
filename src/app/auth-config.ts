import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '5888a461-c9d7-42af-bcaa-d82d1b315928',
    authority: 'https://login.microsoftonline.com/fbec9670-388c-4d95-b46b-93caf0c6e844',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200'
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false
    }
  }
};

export const loginRequest = {
  scopes: ['api://44ba8d56-0ba2-4cd3-beb3-da37d84624e8/access_as_user']
};

export const protectedResources = {
  apiGateway: {
    endpoint: 'http://localhost:8080',
    scopes: ['api://44ba8d56-0ba2-4cd3-beb3-da37d84624e8/access_as_user']
  }
};
