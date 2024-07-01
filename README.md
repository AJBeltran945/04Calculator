# Angular Calculator

## Overview

This is an aesthetically pleasing and functional calculator built using Angular and Tailwind CSS. The calculator supports basic arithmetic operations, input handling via both on-screen buttons and keyboard, and additional functionalities like backspace and decimal point operations.

## Features

- **Responsive Design**: Works seamlessly on various screen sizes.
- **Keyboard Support**: Allows input via keyboard keys.
- **Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **Decimal Point**: Allows input of decimal numbers.
- **Backspace**: Provides functionality to delete the last character.
- **Clear**: Resets the calculator display.

## Technologies Used

- **Angular**: JavaScript framework for building the user interface and handling the logic.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **TypeScript**: Enhances JavaScript by adding types for better developer tooling and error checking.

## Components and Files

### `app.component.ts`

This is the root component of the application, serving as the container for the calculator component.

### `calculator.component.ts`

The main TypeScript file handling the logic for the calculator:

- **Properties**:
  - `display`: Stores the current input and result displayed on the calculator screen.

- **Methods**:
  - `appendToDisplay(value: string)`: Adds a number or decimal point to the display.
  - `getLastNumber()`: Retrieves the last entered number to manage decimal point entries.
  - `clearDisplay()`: Clears the entire display.
  - `performOperation(operator: string)`: Appends an arithmetic operator to the display.
  - `calculateResult()`: Evaluates the expression in the display and shows the result.
  - `backspace()`: Removes the last character from the display.
  - `handleKeyDown(event: KeyboardEvent)`: Handles keyboard events for input, operations, and control keys.

### `calculator.component.html`

The HTML template defining the structure and layout of the calculator:

- **Display**: Shows the current input or result.
- **Buttons**: 
  - Numeric buttons (`0-9`)
  - Operators (`+`, `-`, `*`, `/`)
  - Decimal point (`.`)
  - Clear (`C`)
  - Backspace (`←`)
  - Equals (`=`)

### `calculator.component.css`

CSS file applying styles to the calculator using Tailwind CSS classes:

- **Styling**:
  - Button hover effects.
  - Button active states.
  - Specific styling for backspace and equals buttons.
  - Background colors and text styles.

## Installation and Setup

### Prerequisites

- Node.js and npm installed.
- Angular CLI installed globally.

### Steps

1. **Clone the repository**:
<pre>
\`\`\`bash
    git clone https://github.com/AJBeltran945/04Calculator.git
    cd 04Calculator
\`\`\`
</pre>

2. **Install dependencies**:
<pre>
\`\`\`bash
    npm install
\`\`\`
</pre>

3. **Clone the repository**:
<pre>
\`\`\`bash
    ng serve
\`\`\`
</pre>

4. **Clone the repository**:
<pre>
\`\`\`bash
    git clone https://github.com/AJBeltran945/04Calculator.git
    cd 04Calculator
\`\`\`
</pre>

## Usage

- **Click** on the numeric buttons to input numbers.
- **Click** on the operator buttons to perform arithmetic operations.
- **Click** the decimal point to add decimals to numbers.
- **Click** the equals button to calculate the result.
- **Click** the clear button to reset the input.
- **Click** the backspace button to remove the last character.
- **Use the keyboard** to input numbers, operators, and control the calculator.

## Keyboard Shortcuts

- **Numeric Keys (`0-9`)**: Input numbers.
- **Operators (`+`, `-`, `*`, `/`)**: Perform operations.
- **Decimal Point (`.`)**: Input decimal.
- **Enter (`Enter` or `=`)**: Calculate result.
- **Backspace (`Backspace`)**: Remove the last character.
- **Clear (`Escape` or `c`)**: Clear the display.

## Screenshots

![Calculator](https://github.com/AJBeltran945/04Calculator/blob/master/images/Screenshot.png)

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact

For any inquiries or feedback, please contact [ajbeltran945@gmail.com](mailto:ajbeltran945@gmail.com).
