#  Museum Site

### Motivation
<p> Artist and artifacts are more praised but less explored
This project is an effort to preserve the art and craft o the history </p>

### why?
<p> This project was actually build to learn React js and Material UI this is the first project of mine based on react js. This whole project to the last semi-colon belongs to me </p>

## overview
###  Frontend:
- ```React js```
- ```Hover js```
- ```Swiper js```
- ```Material Ui```
- ```THREE js```
- ``` cloudinary```

##### Frontend Folder structure
📦src  
 ┣ 📂components  
 ┃ ┣ 📜AnnouncementBar.jsx  
 ┃ ┣ 📜Artist.jsx  
 ┃ ┣ 📜Backdrop.jsx  
 ┃ ┣ 📜Banner.jsx  
 ┃ ┣ 📜Card.jsx  
 ┃ ┣ 📜CardComponent.jsx  
 ┃ ┣ 📜CollectionHighlight.jsx  
 ┃ ┣ 📜Details.jsx  
 ┃ ┣ 📜Events.jsx  
 ┃ ┣ 📜footer.jsx  
 ┃ ┣ 📜Gallery.jsx  
 ┃ ┣ 📜Genre.jsx  
 ┃ ┣ 📜GenreItem.jsx  
 ┃ ┣ 📜header.jsx  
 ┃ ┣ 📜HeroSlide.jsx  
 ┃ ┣ 📜Highlights.jsx  
 ┃ ┣ 📜History.jsx  
 ┃ ┣ 📜loading.jsx  
 ┃ ┣ 📜Medium.jsx  
 ┃ ┣ 📜MediumItem.jsx  
 ┃ ┣ 📜MockUp.jsx  
 ┃ ┣ 📜MoreArtifacts.jsx  
 ┃ ┣ 📜Podcast.jsx  
 ┃ ┣ 📜Search.jsx  
 ┃ ┣ 📜SearchedItem.jsx  
 ┃ ┗ 📜VIdeo.jsx  
 ┣ 📂Context  
 ┃ ┗ 📜AuthContext.js  
 ┣ 📂Pages  
 ┃ ┣ 📜Artifact.jsx  
 ┃ ┣ 📜Artists.jsx  
 ┃ ┣ 📜Artwork.jsx  
 ┃ ┣ 📜Collections.jsx  
 ┃ ┣ 📜Home.jsx  
 ┃ ┣ 📜Login.jsx  
 ┃ ┣ 📜Medium.jsx  
 ┃ ┣ 📜Profile.jsx  
 ┃ ┗ 📜Register.jsx  
 ┣ 📂utils  
 ┃ ┣ 📜fetchArtistBanner.js  
 ┃ ┣ 📜ProtectedRoute.js  
 ┃ ┗ 📜server.js  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜index.js  
 
 #### Frontend Routes ( with Images )
 ```/``` ```Home Route```
 
 ![](https://i.ibb.co/yQc4d4p/Screenshot-88.png)
 ![Home](https://i.ibb.co/jH0rJvn/Screenshot-81.png)
 ![](https://i.ibb.co/fMfSGD7/Screenshot-82.png)
![](https://i.ibb.co/tD5cpXP/Screenshot-83.png)
![](https://i.ibb.co/rvbhwf1/Screenshot-84.png)
![](https://i.ibb.co/WWWG4dx/Screenshot-85.png)
---
```/profile``` ``` User Profile Route```
![](https://i.ibb.co/6Wrm5rg/Screenshot-86.png)

```/atrists```  ``` Major artists route```
![](https://i.ibb.co/9t3fcPR/Screenshot-87.png)

```/artist/:id``` ```Individual artist route```
![](https://i.ibb.co/4Kn19D7/Screenshot-89.png)
![](https://i.ibb.co/0mp4pm7/Screenshot-90.png)

```/explore``` ``` Route to display explorable artifacts```
![](https://i.ibb.co/1mJ46rK/Screenshot-91.png)
![](https://i.ibb.co/JCHKWmY/Screenshot-92.png)
```/explore/:id``` ``` individual explore page```
![](https://i.ibb.co/NxZFrLJ/Screenshot-94.png)
```/artifact/:id```  ```individual artifact and details```
![](https://i.ibb.co/tXfPsj1/Screenshot-95.png)
![](https://i.ibb.co/GWs0J6v/Screenshot-96.png)
```/explore```  ```Search feature for artist and or artifacts```
![](https://i.ibb.co/pxgMyw6/Screenshot-97.png)

#### Other component
##### Loading Screen display
![](https://i.ibb.co/bzPypTJ/Screenshot-93.png)
---
### Backend
#### folder structure
📦server  
 ┣ 📂controller  
 ┃ ┗ 📜authController.js  
 ┣ 📂middleware  
 ┃ ┣ 📜authMiddleware.js  
 ┃ ┗ 📜uploadMiddleWare.js  
 ┣ 📂models  
 ┃ ┗ 📜User.js  
 ┣ 📂routes  
 ┃ ┗ 📜authRoutes.js  
 ┣ 📂utils  
 ┃ ┗ 📜db.js  
 ┗ 📜server.js
#### hosting platform
- Heroku ( backend )
- Netlify (Frontend)

### Contribution?
#### Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`