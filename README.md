# Colorful Time Display

This JavaScript project is a simple web application that displays the current time in a colorful and interactive way. It allows users to change the background color of the page by entering a color code or name and clicking a button or by pressing the Enter key.

## Features

1. **Colorful Time Display:** The application displays the current time in hours, minutes, and seconds.

2. **Background Color Change:** Users can change the background color of the web page by performing one of the following actions:
   - Clicking the "Change Color" button.
   - Pressing the Enter key while the cursor is in the color input field.

## Usage

To use this project, follow these steps:

1. Open the HTML file in a web browser.

2. Enter a color code or color name in the input field with the id "incol".

3. Click the "Change Color" button to change the background color of the page to the chosen color.

4. Alternatively, press the Enter key while the cursor is in the color input field to change the background color.

## Code Overview

The project is implemented in JavaScript and consists of the following elements:

- `const color`: This variable is used to reference the input field with the id "incol" where the user can enter a color.

- `const colbutton`: This variable is used to reference the button with the id "changeColorButton" that triggers the background color change.

- `const body`: This variable is used to reference the `body` element of the web page.

- Event Listeners:
  - `colbutton.addEventListener("click", function ())`: This event listener listens for a click on the "Change Color" button and changes the background color of the page to the color entered by the user.

  - `incol.addEventListener("keypress", function (event))`: This event listener listens for keypress events in the color input field. If the Enter key (key code 13) is pressed, it changes the background color of the page to the color entered by the user.

## Dependencies

This project does not have any external dependencies. It uses basic HTML, CSS, and JavaScript.


## Author

This project was created by Utkarsh Gupta. You can reach out to the author at utkarshguptaf2@gmail.com

Feel free to customize this README file with your name, contact information, and any additional information you find relevant.
