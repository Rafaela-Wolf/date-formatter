# Date Formatter

A lightweight, interactive web application that allows users to display today's date in multiple formats. Users can select a date format from a dropdown menu, and the date will be dynamically displayed according to the chosen format.

## Features

- Display today's date in various formats.
- Easy-to-use dropdown for selecting different date formats.
- Responsive design optimized for mobile and desktop views.
- Modern and minimalist user interface with SVG icons.
- Real-time date formatting using JavaScript.

## Supported Date Formats

The following date formats are available for selection:

1. **Day, Month, Year** (`dd/mm/yyyy`)
2. **Month, Day, Year** (`mm/dd/yyyy`)
3. **Year, Month, Day** (`yyyy/mm/dd`)
4. **Day Month Year** (`dd Month yyyy`) – Ex: 05 November 2024
5. **Day, Month, Year, Hours, Minutes** (`dd/mm/yyyy hh:mm`) – Ex: 05/11/2024 14:30

## Getting Started

To run this project locally, all you need is a web browser. This project does not require any additional software or dependencies.

## File Structure

- **`index.html`**: Contains the main structure of the page, including HTML tags for displaying the date and the dropdown selector.
- **`src/css/reset.css`**: Resets default browser styles to ensure consistency across different browsers.
- **`src/css/style.css`**: Main stylesheet that defines the layout, colors, typography, and other design aspects.
- **`src/css/responsive.css`**: A stylesheet dedicated to ensuring the design adapts smoothly to smaller screens like mobile devices.
- **`src/js/index.js`**: JavaScript that manages the date formatting logic and updates the displayed date based on user interaction.

## How It Works

- **Default Date**: Upon loading, the page automatically displays the current date in the default format (`dd/mm/yyyy`).
- **Date Selection**: The user can choose a format from the dropdown menu. Once a selection is made, the displayed date updates in real time to reflect the chosen format.
- **Real-Time Updates**: The app uses JavaScript to manipulate the content of the `#current-date` paragraph, displaying the date according to the selected format.

## Example

When you open the app, you will see a dropdown that allows you to select the format of the date. After selecting an option, the displayed date will update automatically. For example:

- **Format:** `dd/mm/yyyy`
  - **Result:** `05/11/2024`
  
- **Format:** `dd Month yyyy`
  - **Result:** `05 November 2024`

- **Format:** `dd/mm/yyyy hh:mm`
  - **Result:** `05/11/2024 14:30`

## Responsive Design

The application is fully responsive, ensuring a seamless experience across different devices:

- **Mobile:** The layout adjusts for smaller screens with optimized font sizes and form controls.
- **Desktop:** The interface remains centered and user-friendly on larger screens.