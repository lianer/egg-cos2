import COS from 'cos-nodejs-sdk-v5';

declare module 'egg' {
  interface Application {
    cos2: COS;
  }
}

export {};
