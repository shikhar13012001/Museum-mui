# Museum Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/b1520595-f28e-4de7-9562-efacb766a0ad/deploy-status)](https://app.netlify.com/sites/sonofogrelouvre/deploys)

### Motivation

<p> Artist and artifacts are more praised but less explored
This project is an effort to preserve the art and craft o the history </p>

### why?

<p> This project was actually build to learn React js and Material UI this is the first project of mine based on react js. This whole project to the last semi-colon belongs to me </p>

## overview

### Frontend:

- `React js`
- `Hover js`
- `Swiper js`
- `Material Ui`
- `THREE js`
- ` cloudinary`

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

`/` `Home Route`

![](https://i.ibb.co/yQc4d4p/Screenshot-88.png)
![](https://i.ibb.co/bzhBySD/Screenshot-118.png)
![](https://i.ibb.co/Kw0RLv1/Screenshot-119.png)
![](https://i.ibb.co/JkvJ9wG/Screenshot-120.png)
![](https://i.ibb.co/DMSkM11/Screenshot-121.png)
![](https://i.ibb.co/Z2LyLP6/Screenshot-122.png)
![](https://i.ibb.co/zndzx4L/Screenshot-123.png)
![](https://i.ibb.co/hCgqWTC/Screenshot-124.png)

---

`/profile` ` User Profile Route`
![](https://i.ibb.co/6Wrm5rg/Screenshot-86.png)

`/artists` ` Major artists route`

![](https://i.ibb.co/5kgVGCs/Screenshot-125.png)
![](https://i.ibb.co/5n64sGG/Screenshot-126.png)

`/artist/:id` `Individual artist route`
![](https://i.ibb.co/pyRBrpt/Screenshot-139.png)
![](https://i.ibb.co/jzF9FXF/Screenshot-140.png)
![](https://i.ibb.co/zQ5Dnwn/Screenshot-141.png)
![](https://i.ibb.co/16v8k18/Screenshot-142.png)

`/explore` ` Route to display explorable artifacts`
![](https://i.ibb.co/jWS8DP1/Screenshot-127.png)
![](https://i.ibb.co/4RjS0F0/Screenshot-128.png)
`/explore/:id` ` individual explore page`
![](https://i.ibb.co/5FBgZTd/Screenshot-130.png)
![](https://i.ibb.co/85VgcWD/Screenshot-131.png)
`/artifact/:id` `individual artifact and details`

![](https://i.ibb.co/Thjzx5F/Screenshot-132.png)
![](https://i.ibb.co/b7DF279/Screenshot-133.png)
![](https://i.ibb.co/nnGdBcS/Screenshot-134.png)
![](https://i.ibb.co/FsPRyHV/Screenshot-135.png)
![](https://i.ibb.co/F0VJZr0/Screenshot-136.png)

#### Other component

##### Loading Screen display

## ![](https://i.ibb.co/bzPypTJ/Screenshot-93.png)

#### Login and Sign up

![](https://i.ibb.co/DCS3Pqn/Screenshot-137.png)
![](https://i.ibb.co/JtLw1H0/Screenshot-138.png)

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
