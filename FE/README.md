<h2 align="center">My Portfolio build with React+Material-ui</h2>

<div align="center">

[![ReactJS](https://img.shields.io/badge/react-v17.0.1-%2361dafb)](https://reactjs.org/)
[![React-Router](https://img.shields.io/badge/react--router-v5.2.0-brightgreen)](https://reacttraining.com/react-router/)
[![Material-UI](https://img.shields.io/badge/%40material--ui-v4.11.2-%23764abc)](https://mui.com/)
[![NodeJS](https://img.shields.io/badge/%40material--ui-v4.11.2-%23764abc)](https://nodejs.org/en/docs/)
[![ExpressJS](https://img.shields.io/badge/%40ExpressJS-v4.16.1-%23764abc)](https://expressjs.com/)

</div>

#### 1、How to check

```bash
# Clone repository
git clone git@github.com:Emma-Deve/emma.git

# 进入walker-admin文件夹
cd emma

# 安装依赖
npm install
# 或者
yarn add

# start project
npm run start
#or
yarn start
# FE: http://localhost:3000
# BE: http://localhost:3002
added `cors` into the BE

```

#### 2、Document tree

##### 2.1、FE

```shell

   src
    ├── index.js
    ├── App.js
    ├── assets
    │   ├── img
    │   └── resume
    ├── components
    │   ├── PageContainer
    │   ├── HeaderLeftNav
    │   ├── MyButton
    │   ├── MyTimeLine
    │   ├── MyTitle
    │   ├── Particles
    │   ├── Profile
    │   └── SocialLink
    ├── routeList
    ├── styles
    │   └── reset.css
    └── views
        ├── Footer
        ├── SideBar
        ├── Header
        └── Main
            ├── Main.jsx
            ├── Main.scss
            ├── Contact
            ├── Experience
            ├── Home
            ├── Portfolio
            └── Projects

```

##### 2.2、BE

```shell

   src
    ├── index.js
    ├── router
    │   └── index.js
    ├── controller
    │   ├── experience.js
    │   ├── information.js
    │   ├── portfolio.js
    │   ├── project.js
    │   └── skill.js
    └── data
        ├── experience.js
        ├── information.js
        ├── portfolio.js
        ├── project.js
        └── skill.js

```
