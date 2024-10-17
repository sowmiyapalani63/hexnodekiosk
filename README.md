# You can view the live application [here]:(https://hexnodekiosk.vercel.app/).

# hexnodekiosk
Hexnode Kiosk is a comprehensive device management solution designed for businesses to lock down devices into kiosk mode, enabling control over which apps or websites can be accessed.
## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The **Hexnode Kiosk Project** is a web-based application built using **React**, **Tailwind CSS**, and **jQuery**. It provides users with a responsive and intuitive interface to manage kiosk settings, monitor activity, and handle user configurations.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, jQuery
- **Version Control**: Git, GitHub
- **Package Manager**: npm

## Project Structure
The project is organized into several directories and files for modularity and scalability:
/public # Public assets like images, fonts, etc. /src ├── components # Reusable React components ├── pages # Main pages of the application ├── styles # Tailwind CSS and other styling ├── services # jQuery and other utility scripts .gitignore # Git ignore rules package.json # Project metadata and dependencies README.md # Project documentation

## Setup Instructions

### Prerequisites:
- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Steps:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sowmiyapalani63/hexnode-kiosk.git
2.**Use npm to install all necessary dependencies**:
npm install
3.**run command**:
npm start
Styling
Tailwind CSS is used for styling. You can easily extend or modify the default styles by editing the tailwind.config.js file or directly using utility classes within your components.

jQuery Integration
The project uses jQuery for specific DOM manipulations and utility functions. Scripts are located in the /src/services folder and can be modified or extended as needed.
