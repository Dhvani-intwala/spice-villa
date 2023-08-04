# Testing

Back to [README.md](README.md)<br>

## Table of contents

* [Automated View Testing](#automated-view-testing)
* [Browser Testing](#browser-testing)
* [Code Validation](#code-validation)
* [Bugs](#bugs)


# Automated View Testing


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
- 


