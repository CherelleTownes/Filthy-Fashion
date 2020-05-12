# FILTHY FASHION <!-- omit in toc -->

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  <!-- - [Dependencies](#Dependencies)  -->
- [Post-MVP](#Post-MVP)
 <!-- - [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)  -->

<br>

## Overview

_**Filthy Fashion** is a unique fashion web application where users can create an account and build a clothing item. A user has the option of selecting a dress, skirt, shirt, or bottoms. Once the user selects an item, the user can pick a color they would like the item to be and provide a detailed description of how they would like the item designed. This fashion forward web application gives the user freedom to build clothing items to their hearts desires._

### Core Features

_Flithy Fashion has multiple features tailored to provide the user a one of a kind fashion experience. The core features are listed below._

- _The user has the ability to create an account._
- _Once logged in, the user can choose a clothing item._
- _The user has the ability to select one color and provide detail on how they would like the item created._
- _Detailed description should include the neck line, choice between pants or shorts, ankle length of knee length to name a few._

### Goals

- _Full CRUD for the clothing variations table._
- _Implement Authentication_
- _All features are functional and working_
- _Each clothing item created is saved to individual user_


### Team

Created, designed, and developed by [Cherelle Townes](https://github.com/cherelletownes) for the General Assembly Software Engineering Immersive (February '20 Cohort) Unit 4 Project.


<br>

## MVP

_The **Filthy Fashion** MVP will function as a fullstack app. The backend will be built on a Ruby on Rails server, exposing RESTful JSON endpoints. have a RESTful JSON API._


## Client (Front End)

- Interactive **React** app, built using `npx create-react-app`.
    - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilized **React Router**, for client-side routing.
- Utilized Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.


#### Wireframes


<img src="Images/Wireframes/Dwf-1.png">

- Desktop/Mobile Landing

<img src="Images/Wireframes/Dwf-2.png">

- Desktop Sign-up

<img src="Images/Wireframes/Mwf-2.png" height="400">

- Mobile Sign-up

<img src="Images/Wireframes/Dwf-3.png">

- Desktop Log-in

<img src="Images/Wireframes/Mwf-1.png" height="400">

- Mobile Log-in

<img src="Images/Wireframes/Dwf-4.png">

- Desktop Create

<img src="Images/Wireframes/Dwf-5.png">

- Desktop All Variations

<img src="Images/Wireframes/Dwf-7.png">

- Desktop All Items

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Navbar.jsx
      |__ Clothing-Variations-Form.jsx
      |__ Colors-Form.jsx
      |__ Sign-up.jsx
      |__ Log-in.jsx
      |__ Create-Clothing-Item.jsx
      |__ Edit-Clothing-Item.jsx
      |__ Delete-Clothing-Item.jsx
      |__ All-Clothing-Items.jsx

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation Bar | functional |   n   |   n   | _The navigation will provide a link to home, login, and sign-out._       |
|   Categories    |   class    |   y   |   y   | _The clothing variation form will render type of variations a user can pick to create item._      |
| Colors Form | class |   n   |   n   | _The clothing variation form will render type of colors a user can pick to create item._                 |
|    Sign-Up Form    | class |   n   |   n   | _The sign-up form will allow the user to register for an account_ |
|    Log-in Form   | functional |   n   |   n   | _The log-in form will allow the user to log-in to an account._               |
|  Create-Clothing-Item | class |   y   |   y   | _The create clothing item will allow to user to select a clothing item they wish to create._       |
|   Update-Clothing-Item   |   class    |   y   |   y   | _The update clothing item will allow to user to edit their clothing item after it was created._      |
| Delete-Clothing-Item | class |   y   |   y   | _The delete clothing item will allow the user to delete a clothing item they created._                 |
|    All-Clothing-Items    | class |   y   |   y   | _The all clothing items component will allow the user to see all clothing items the created._ |


#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Header    |    L     |     1 hr      |    TBD     |    TBD    |
| Create CRUD Actions |    H     |     5 hrs      |     TBD     |     TBD     |
| Add Nav Bar    |    L     |     1 hr      |    TBD     |    TBD    |
| Creating Rails App |    H     |     1 hrs      |     TBD     |     TBD     |
| CSS for entire website    |    H    |     12 hrs      |    TBD     |    TBD    |
| Functionality  |    H     |     6 hrs      |     TBD     |     TBD     |
| Backend    |    H     |     12 hrs      |    TBD     |    TBD    |
| All components |    H     |     12 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     50 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

- Backend built with a **RESTful JSON API**.
  - Built with **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Database with 5 tables.
    - 1 user table. 1:m - partial-CRUD controller action (`create`)
    - 1 clothing type table. m:m full-CRUD full-CRUD (`index`, `show`, `create`, `update`, `delete`) 
    - 1 clothing variation. m:m full-CRUD (`index`, `show`, `create`, `update`, `delete`) 
    - 1 color table. m:m full-CRUD (`index`, `show`, `create`, `update`, `delete`) 
  - **Rails** is used to define models for interacting with the database.
  - Authentication implemented using **JWT**.


#### ERD Model

<img src="Images/P4-ERD.png">

-  Computer generated ERD model.


#### Data Heirarchy


``` structure

database_db
|__ users/
|__ clothing_items/
|__ clothing_colors/
|__ clothing_variations/
|__ colors/

```

#### Data Heirarchy

API endpoints

- localhost:3000/allitems
- localhost:3000/create
- localhost:3000/edit
- localhost:3000/delete

<br>

<!-- ### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>  -->

***


## Post-MVP

Allow the user to only see clothing variations according to the item selected. For example, if the user selected bottoms, the user will only see clothing variations for shorts or pants. They will not see sleeve options or neckline options. Add a color picker for the user to pick a color for their item.

***

<!-- ## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like. -->
