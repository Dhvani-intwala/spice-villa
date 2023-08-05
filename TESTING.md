# Testing

Back to [README.md](README.md)<br>

## Table of contents

* [Methodology](#methodology)
* [Manual Testing](#manual-testing)
* [Aditional Manual Testing](#aditional-manual-testing)
* [Browser Testing](#browser-testing)
* [Code Validation](#code-validation)
* [Bugs](#bugs)


## Methodology
Throughout the development of the project, testing was performed using Django debug pages and printing statements to verify that the code worked appropriately. In addition, thorough tests were performed, which are described below. They include manual testing to verify that all user stories and acceptance criteria are met, as well as testing and validating the code using various online tools, as shown below.


## Manual Testing

BDD, or Behaviour Driven Development, is the process used to test user stories in a non-technical way, allowing anyone to test the features of an app.

User Story | BDD Test | Pass
--- | --- | :---:
As a first time site user <br>I can easily see the purpose of the site from the landing page<br> so that I can see if the site is relevant to my needs. | Given that I'm a first time user<br>When I view/scroll down the homepage<br>Then I should see what the purpose of the site is and easy navigation throughout the website. | :white_check_mark:


#### Menu page
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| Customer can view menu page | Test menu link within the menu page | Being able to open and browse the menu without errors | PASS |

#### Registration 
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| Customer signup page | Test link is working | Customer is directed to the signup page | PASS |
| Customer signup - Form validation | Submit empty form | Form validation prompts the user | PASS |
| Customer signup - Form validation | Submit invalid email address | Form validation prompts the user | PASS |
| Customer signup - Form validation | Submit invalid password | Form validation prompts the user | PASS |
| Customer signup - Form validation | Submit non matching passwords | Form validation prompts the user | PASS |
| Customer signup - Form validation | Submit already taken username | Form validation prompts the user | PASS |
| Customer login page | Test link is working | Customer is directed to the login page | PASS |
| Customer login - Form validation | Submit incorrect password | Form validation prompts the user | PASS |
| Customer login - Form validation | Submit incorrect name | Form validation prompts the user | PASS |
| Customer Logout page | Test link is working | User is logged out | PASS |

#### Bookings 
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| Form validation Booking page | Check that each required field is working correctly in the form | Form validation prompts the user | PASS |
| Submit button Booking page | Click the submit button to check that the booking is saved | Sucess message and redirect to mybooking page | PASS |
| Bookings are shown on mybookings page | Check that each booking for a user are shown on the mybookings page | Individual cards of each booking is shown with the corresponding booking details | PASS |
| Bookings can be edited | Check that the edit button works and that the updated booking is submitted to the mybooking page when edited | Booking is updated with the corresponding booking details | PASS |
| Bookings can can be deleted | Check that the delete button works and that the deleted booking is removed from the mybooking page when deleted | Mybooking list is updated | PASS |

#### Navbar
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| Navbar | Check that each link is working correctly | Customer is able to open each link to browse the webpage for information about the restaurant | PASS |

#### Admin
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| Admin login - Form validation | Submit incorrect password | Form validation prompts the user | PASS |
| Admin login - Form validation | Submit incorrect name | Form validation prompts the user | PASS |
| Admin panel | Owner is able to update bookings | Booking is updated with the corresponding booking details | PASS |
| Admin panel | Owner is able to delete bookings | Booking is deleted from current booking list | PASS |
| Admin panel | Owner is able to update menu items | Menu item's are updated in Menu Page | PASS |
| Admin panel | Owner is able to delete menu items | Menu item is deleted in Menu Page | PASS |

## Aditional Manual Testing

#### Error Handling

* Ensure that **403 HTTP** errors display custom 403.html.
    - **Stress Test:** Input a route in the URL for accessing another user content
* Ensure that **404 HTTP** errors display the custom 404.html.
    - **Stress Test:** Input a random route in the URL that can't be found in the declared paths of the project
* Ensure that **500 HTTP** errors display the custom 500.html.
    - **Stress Test:** Set debug to false and try to access a path that has been breaked intentionally.

#### Interface Interaction

* Ensure all interactive elements respond appropriately:
    - **Desktop:**
        - All navbar elements correctly respond to hovering.
        - All buttons correctly respond to hovering.
        - All authentication links correctly respond to hovering
    - **Mobile:**
        - All navbar elements correctly respond to touch.
        - All buttons correctly respond to touch.
        - All authentication links correctly respond to touch



## Browser Testing
The website was tested on different browser for assuring the features work accordingly.
* Chrome
* Edge
* Safary
* Opera
* Firefox

## Code Validation

### HTML
The html code of the website was validated using [W3 Markup Validator](https://validator.w3.org/).<br>
At the time of deployment the validation have the following outcome:<br><br>

<img src="/static/images/readme-img/html.codevalidation.png"><br><br>

The following pages have been tested:
* Home
* Menu
* About
* Contact
* Chefs
* Gallary
* Booking a table
* My bookings
* Login/Register
* 403/404/500 custom pages

### CSS

The CSS code was validated using [W3 Jigsaw Validator](https://jigsaw.w3.org/css-validator/)<br>
At the time of deployment the validation for *style.css* has the following outcome:<br><br>

<img src="/static/images/readme-img/CSS-validation.png"><br><br>

### Javascript

The Javascript code was validated using using [JsHint](https://jshint.com/)<br>
At the time of deployment the validation for *script.js* has the following outcome:<br><br>

<img src="/static/images/readme-img/jshint.png"><br><br>

**Lighthouse reports:**<br>

<details>
<summary>Desktop</summary>
<img src="/static/images/readme-img/Desktop.png"><br><br>
</details>
<br>
<details>
<summary>Mobile</summary>
<img src="/static/images/readme-img/mobli_lighthouse.png"><br><br>
</details>

### PEP8 Python Linter Test
- [PEP8 CI Python Linter](https://pep8ci.herokuapp.com/) was used to check that the Python code meets PEP8 standards.

### Booking

<details>
<summary>models.py</summary>
<img src="/static/images/readme-img/Modal.png"><br><br>
</details>

<details>
<summary>forms.py</summary>
<img src="/static/images/readme-img/form.png"><br><br>
</details>

<details>
<summary>urls.py</summary>
<img src="/static/images/readme-img/url.png"><br><br>
</details>

<details>
<summary>views.py</summary>
<img src="/static/images/readme-img/view.png"><br><br>
</details>


## Bugs

- Reinstalled all necessary Libraries because 
- Removed Static folder from cloudinary and run command Pyhton manage.py collectstatic because after website was deployed the output in heroku doesn't matches the development version.
- Not able to Push to github there was a error with Github Password authentication which was removed by generating SSH key
<br><br>
<img src="/static/images/readme-img/Error4.png">


