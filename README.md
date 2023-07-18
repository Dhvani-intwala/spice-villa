<h1 align="center"> Spice villa - Booking website</h1>

You can view the live site here:-

---

## [Content](#content)

- [Overview](#overview)
- [User Experience (UX)](#user-experience-ux)
  - [Project goals](#project-goals)
  - [User Stories](#user-stories)
  - [Agile Methodology](#agile-methodology)
  - [Design](#design)
    - [Wireframes](#wireframes)
    - [Database Schema](#database-schema)
- [Features](#features)
  - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks Libraries Programs](#frameworks-libraries-programs)
- [Testing](#testing)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Remaining Bugs](#remaining-bugs)
  - [Deployment](#deployment)
    - [Deploy on heroku](#deploy-on-heroku)
    - [FORK THE REPOSITORY](#fork-the-repository)
    - [CLONE THE REPOSITORY](#clone-the-repository)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)

## Overview

This is a project designed and developed to create a complete experience for the clients of Spice Villa Restaurant. The users are given the possibility to create a booking, see the restaurant menu. All these functionalities can be accessed by any user with an account, considering that the staff members have special permissions for controlling the data.
The website was created for real-life situations, but the restaurant's name is fictive.
Spice Villa - booking website was developed using Python (Django), HTML, CSS and JavaScript by storing the data in a PostgreSQL database.

## User Experience

### Project goals

The overall goal of the website is to create a restaurant webpage that is enticing for the visitors that generates an interest and curiosity to visit the restaurant. Visitors should be able to find general information about the restaurant as well as finding the menu offerings. In addition, visitors should be able to make a reservation for a table directly on the webpage. It will also provide a booking management admin panel for the staff members.

## Features

### Navbar

- The navbar shows all the sections that the user can enter and provides a quick and easy means of
  navigating the site. The link to make a booking is enlarged to make it extra easy to find and use.

  ![Navbar]()

### Hero

The hero section makes for a great first impression of the site and thus the restaurant for the visitor.
It also encompasses the links that the user most likely needs the most often which is the menu link
and a link to Book a Table.
![Hero]()

### Menu

On the Menu page there is a list with all the menu elements. Every item represents a meal with
details such as Name, Image, Price, and Ingredients. The list design is simple and attractive.

![Menu]()

## Deployment

### Deploy on Heroku

1.  Create Pipfile

In the terminal enter the command ` pip3 freeze > requirements.txt`, and a file with all requirements will be created.

2. Setting up Heroku

   - Go to the Heroku website (https://www.heroku.com/)
   - Login to Heroku and choose _Create App_
   - Click _New_ and _Create a new app_
   - Choose a name and select your location
   - Go to the _Resources_ tab
   - From the Resources list select _Heroku Postgres_
   - Navigate to the _Deploy_ tab
   - Click on _Connect to Github_ and search for your repository
   - Navigate to the _Settings_ tab
   - Reveal Config Vars and add your Cloudinary, Database URL (from Heroku-Postgres) and Secret key.

3. Deployment on Heroku

   - Go to the Deploy tab.
   - Choose the main branch for deploying and enable automatic deployment
   - Select manual deploy for building the App

### Fork the repository

For creating a copy of the repository on your account and change it without affecting the original project, use<b>Fork</b> directly from GitHub:

- On [My Repository Page](https://github.com/useriasminna/italianissimo-booking-website), press <i>Fork</i> in the top right of the page
- A forked version of my project will appear in your repository<br></br>

### Clone the repository

For creating a clone of the repository on your local machine, use<b>Clone</b>:

- On [My Repository Page](https://github.com/useriasminna/italianissimo-booking-website), click the <i>Code</i> green button, right above the code window
- Chose from <i>HTTPS, SSH and GitClub CLI</i> format and copy (preferably <i>HTTPS</i>)
- In your <i>IDE</i> open <i>Git Bash</i>
- Enter the command <code>git clone</code> followed by the copied URL
- Your clone was created
<hr>

## Credits

### Code

- [Django Documenation](https://www.djangoproject.com/) was used to provide examples of code solutions and Django functionality.
- [Bootstrap Documenation](https://getbootstrap.com/) was used to provide examples of Bootstrap functionality and building blocks.
- [Code Institute walkthrough](https://codeinstitute.net/) as inspiration and code examples, the code institute walkthroughs "Hello Django" and "I Think Therefore I Blog" was used.

### Content

### Media

- Most of the pictures for the project was taken from [Google](https://www.google.de)

### Acknowledgements

- The tutor support team at Code Institute for their support.
- My Code Institute Mentor for feedback and suggestions.
- The Code Institute Slack community.

[Back to top](#toc)
