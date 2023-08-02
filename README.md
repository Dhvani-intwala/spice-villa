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

### Design

The theme for the project were chosen in accordance with the intended target market in mind for
the restaurant. With its fancy looks and feel, dark colours and luxurious details and effects, the
theme fits perfect for the goal of giving the visitor the impression that this is a very high quality
restaurant.



## Features

### Navbar

- The navbar shows all the sections that the user can enter and provides a quick and easy means of
  navigating the site. The link to make a booking is enlarged to make it extra easy to find and use.

  ![Navbar](/static/images/readme-img/Nav.png)

### Hero

The hero section makes for a great first impression of the site and thus the restaurant for the visitor.
It also encompasses the links that the user most likely needs the most often which is the menu link
and a link to Book a Table.
![Hero](/static/images/readme-img/Hero.png)

### Menu

On the Menu page there is a list with all the menu elements. Every item represents a meal with
details such as Name, Image, Price, and Ingredients. The list design is simple and attractive.

![Menu](/static/images/readme-img/menu-page.png)

### About

The about section tells more about the restaurant and incorporates some of the design to further
enhance its unique selling points.

![About](/static/images/readme-img/About.png)

### Testimonials

The testimonials show what some of the previous customers says of the restaurant and is a method
of providing social proof to increase customer conversion of the webpage.

![Testimonials](/static/images/readme-img/Testimonial.png)

### Gallery

In the gallery visitors can see examples of its interior and what the restaurant looks like.

![Gallery](/static/images/readme-img/Gallery.png)

### Contact

The contact section includes all the necessary information about the restaurant that the visitor may
need to know about.

![Contact](/static/images/readme-img/Contact.png)

### Account signup/Login

The account pages where the user can create an account in order to book a table, as well as login as
an existing user.

![signup/Login](/static/images/readme-img/sign-up.png)

###  Login page

The users accounts have been created using the django allauth module. This way, information about
the current user can be accessed from the template and displayed for confirming that the
authentication was successful.
Considering that the website is created for a restaurant, the profile of the user is created to display
essential information such as name and email.

![Login](/static/images/readme-img/login.png)


### Book a Table

Every user that is authenticated can access the Bookings page for making a reservation. This feature
provides a form with multiple sections that appear successively, as steps in completing the booking.
The first section is for selecting the date and time interval of the booking

- The inputs are validated after the following rules:
   - The Date value should not be less than the current day;
   - For the current day the Start hour can't be less than the current hour;
   - End Hour should be greater than Start hour;
   - Start and End hours must be between 9:00 AM - 11:00;

![Booking page](/static/images/readme-img/Booking_page.png)

The next section appears only if the previous one is valid and it displays the tables existing in the
restaurant in the colour that matches their availability status. The user can now choose a table from
the dropdown, considering that it only contains the free tables. Also, there is a read-only input with
a value that represents the number of seats for each selected table, as an informative element.

![BookaTable](/static/images/readme-img/Table.png)

Another part of the form is displayed with the contact details to be filled in. A better alternative
available for the users that are not staff members is to check the Book it on my name option. This
means that the form will automatically register the authenticated user's name and email as contact
details.

![Contact-details](/static/images/readme-img/Contact_user.png)

The last section contains an overview of the booking. If the reservation is submitted, a success message will appear
![overview](/static/images/readme-img/Overview_details.png)


### Mybookings

The users' accounts have been created using the django allauth module. This way, information about the current user can be accessed from the template and displayed for confirming that the authentication was successful.
Considering that the website is created for a restaurant, the profile of the user is created to display essential information such as name and email.

![Mybookings](/static/images/readme-img/mybooking.png)

Also, the my booking page contains one more feature that better experience with the website. 

-The feature is called Your upcoming bookings and is represented by a list of the bookings created by the currently authenticated user.
Every booking has a visual representation of a note with the details of the reservation written on it.

![Mybookings](/static/images/readme-img/sticky-img1.png)

Also, for giving the user the ability to manage his bookings, every element in the list comes with a Delete Booking button.
The button triggers a modal for confirmation, that being a part of the defensive programming.

![Mybookings delete](/static/images/readme-img/




### Footer

The footer contains the essential information about the restaurant for easy access to the most
relevant contact information and social media links on all pages throughout the website.

![Footer](/static/images/readme-img/footer.png)

## Technologies Used

### Languages

- Python
- Django
- JavaScript
- HTML5
- CSS3

### Frameworks, Libraries, Programs
- Python Built-in Modules:
  - [os](https://docs.python.org/3/library/os.html) 

- External Packages
  - [cloudinary](https://pypi.org/project/cloudinary/1.29.0/) 
  - [dj-database-url](https://pypi.org/project/dj-database-url/0.5.0/) 
  - [dj3-cloudinary-storage](https://pypi.org/project/dj3-cloudinary-storage/0.0.6/) 
  - [Django](https://pypi.org/project/Django/3.2.14/) 
  - [django-allauth](https://pypi.org/project/django-allauth/0.51.0/)
  - [gunicorn](https://pypi.org/project/gunicorn/20.1.0/)
  - [psycopg2](https://pypi.org/project/psycopg2/2.9.3/) 

### Programs & Tools

- [Google Fonts:](https://fonts.google.com/)
  - Was used to to incorporate font styles.  
- [Bootstrap](https://getbootstrap.com/)
  - Was used to create the front-end design.
- [GitPod:](https://gitpod.io/)
  - Gitpod was used as IDE to commit and push the project to GitHub.
- [GitHub:](https://github.com/)
  - Was used for all storing and backup of the code pertaining to the project.
- [Balsamiq:](https://balsamiq.com/)
  - Was used to create wireframes
- [LucidCharts:](https://www.lucidchart.com/)
  - Was used to create the database schema.

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

[Back to top](#content)
