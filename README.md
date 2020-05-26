# introduction-page  
**This is only a study application for learning Front-end with Javascript Technologies and is not recommend to use in production environment**  

## Description
This application was created to learning Front-end approach with ReactJS and Responsive layouts with css grid.  
The application has functionalities as show photo and name in header, show a description, list experiences and  
list repositories from Github using [Github Api](https://developer.github.com/v3/).
  
## Steps to run application  
### Settings to run application  
This application requires create file `config.profile.js` in path `./src/`,  
there is a file example named as `config.profile.example.js`:  
  
```
const user = {
  username: "USERNAME GITHUB",
  name: "NAME",
  photo: "LINK TO PHOTO", // optional, it's possible uses Github's profile photo 
  decription: "WRITE A DESCRIPTION",
  experiences: [
    {
      company: "COMPANY NAME",
      start_at: "DATE OF THE BEGINNING AT IN JOB",
      ends_at: "DATE OF THE FINISHED AT IN JOB", // optional, if value is null, it's describe as a current experience
      description: "DESCRIPTION ABOUT EXPERIENCE",
    },
  ],
};

export default user;
```  
  
### Run a local build  
  
Create a build of the application `yarn build`:  
`$ yarn build`  
Run a local server from build of the application `yarn serve -s build`:  
`$ yarn serve -s build`  
  
### Run page to development
  
Run a application to development `yarn start`:  
`$ yarn start`
