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

### User Stories
-  First Time Visitor Goals
  - As a first-time visitor I can read and learn about the location and history
    and get a feel for the restaurant.
  - As a first-time visitor I can find out what kind of food they serve from
    their menu.
  - As a first-time visitor I can find information about how to make a
    reservation at the restaurant.

- Returning Visitor Goals
  - As a returning visitor I can create an account so I can make a
    reservation online.
  - As a returning visitor I can view the menu to see if it has changed.

- Frequent User Goals
  - As a frequent visitor I can login and find my current bookings.
  -  As a frequent visitor I can change or cancel my booking in the login
    page.

### Agile Methodology

This project was developed using the Agile methodology.
All epics and user stories implementation progress were registered using Trello. Necessary goals and
priorities throughout the project were well defined. In addition, labels were used to further define
the priority of each user story in the Kanban board. As the user stories were accomplished, they
were moved in the Trello board from To Do, Progress and Done lists.

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

### About

The about section tells more about the restaurant and incorporates some of the design to further
enhance its unique selling points.

![About]()

### Testimonials

The testimonials show what some of the previous customers says of the restaurant and is a method
of providing social proof to increase customer conversion of the webpage.

![Testimonials]()

### Gallery

In the gallery visitors can see examples of its interior and what the restaurant looks like.

![Gallery]()

### Contact

The contact section includes all the necessary information about the restaurant that the visitor may
need to know about.

![Contact]()

### Account signup/Login

The account pages where the user can create an account in order to book a table, as well as login as
an existing user.

![signup/Login]()

###  Login page

The users accounts have been created using the django allauth module. This way, information about
the current user can be accessed from the template and displayed for confirming that the
authentication was successful.
Considering that the website is created for a restaurant, the profile of the user is created to display
essential information such as name and email.

![Login]()

### Booking page

In the booking page the customer can make a reservation using the form and save it. It will then
show up in the customers mybooking page.

![Booking page]()

### Mybookings

The current bookings for a customer are shown on the mybooking page, that way the customer can
get an overview of all bookings and check the date and time etc for each booking. Every booking has
a visual representation of a note with the details of the reservation written on it. The customer can
also delete a booking by clicking on the "delete" button.

Also, for giving the user the ability to manage his bookings, every element in the list comes with a
Delete Booking button.
The button triggers a modal for confirmation, that being a part of the defensive programming.

![Mybookings]()

### Book a Table

Every user that is authenticated can access the Bookings page for making a reservation. This feature
provides a form with multiple sections that appear successively, as steps in completing the booking.
The first section is for selecting the date and time interval of the booking

- The inputs are validated after the following rules:
   - The Date value should not be less than the current day;
   - For the current day the Start hour can't be less than the current hour;
   - End Hour should be greater than Start hour;
   - Start and End hours must be between 9:00 AM - 11:00;

![BookaTable]()

The next section appears only if the previous one is valid and it displays the tables existing in the
restaurant in the colour that matches their availability status. The user can now choose a table from
the dropdown, considering that it only contains the free tables. Also, there is a read-only input with
a value that represents the number of seats for each selected table, as an informative element.

![]()

Another part of the form is displayed with the contact details to be filled in. A better alternative
available for the users that are not staff members is to check the Book it on my name option. This
means that the form will automatically register the authenticated user&#39;s name and email as contact
details.

![]()


### Footer

The footer contains the essential information about the restaurant for easy access to the most
relevant contact information and social media links on all pages throughout the website.

![Footer]()


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
