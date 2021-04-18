# Digital Audio Workstation

This project is deployed into: http://music-daw-abdo.netlify.app

### Setup instructions:

- Download repository code
- In the code folder, run `yarn install`
- run `yarn start`
- project should be launched on `http://localhost:3000`

### About the project:

I have decided to create this project through create-react-app, I felt it could be a faster choice for this project.
<br/>

##### Open source libraries used:

I have only used 2 libraries in this project

- `react-dragtastic` I used this library for simple drag and drop, to drag samples into track slots. I have decided to use it because it is very light-weight, and simple.
- `styled-components` I used this library as a helper for styling. I believe it makes styling in react so much simpler.

I used react's context api for state management in this project, as it is a simple project that only has one page.
I use localStorage (browser native api) to persist the saved tracks, so that saved tracks will still be there when the user refreshes the page.
<br/>

##### Testing:

I used `cypress` for simple front-end testing of this web application.
To run the tests, make sure the app is running on `http://localhost:3000`, then run `yarn run test`. To view the written tests, you can go to the folder `cypress\integration`.
<br/>

##### Features I will like to have in future versions:

Having an indicator (a vertical line) that goes through the track while it is playing, that helps with visual indication.
