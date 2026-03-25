# COLORS-Lab

## Description

COLORS is a web-based application built for COP 4331 (Processes for Object-Oriented Software Development) that allows users to manage a personal collection of color names. Users can create an account, log in, add colors to their collection, and search through their saved colors. The application demonstrates full-stack web development using the LAMP stack architecture.

## Technologies Used

This project is built using the following technologies:

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla JS)
  - MD5.js for password hashing

- **Backend:**
  - PHP (API endpoints)
  - MySQL database

- **Server:**
  - Apache web server

- **Architecture:**
  - LAMP Stack (Linux, Apache, MySQL, PHP)

## Project Structure

```
COLORS-Lab/
├── api/                    # Backend API endpoints
│   ├── AddColor.php       # Add a color to user's collection
│   ├── Login.php          # User authentication
│   └── SearchColors.php   # Search user's color collection
├── public/                # Frontend files
│   ├── index.html        # Login page
│   ├── color.html        # Main application page
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   │   ├── code.js       # Main application logic
│   │   └── md5.js        # MD5 hashing library
│   └── images/           # Image assets
└── README.md
```

## Setup Instructions

### Prerequisites

- A web server with PHP support (Apache recommended)
- MySQL database server
- PHP 7.0 or higher

### Database Setup

1. Create a MySQL database named `COP4331`
2. Create a database user with the following credentials:
   - Username: `TheBeast`
   - Password: `WeLoveCOP4331`
   - Grant this user full privileges on the `COP4331` database

3. Create the required tables:

   **Users Table:**
   ```sql
   CREATE TABLE Users (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       firstName VARCHAR(50),
       lastName VARCHAR(50),
       Login VARCHAR(50) UNIQUE,
       Password VARCHAR(50)
   );
   ```

   **Colors Table:**
   ```sql
   CREATE TABLE Colors (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       UserId INT,
       Name VARCHAR(50),
       FOREIGN KEY (UserId) REFERENCES Users(ID)
   );
   ```

### Application Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/luciano093/COLORS-Lab.git
   ```

2. Deploy the files to your web server:
   - Copy the contents of the repository to your web server's document root (e.g., `/var/www/html/` for Apache)
   - Ensure the `api` and `public` directories are accessible via HTTP

3. Configure the API endpoint:
   - Open `public/js/code.js`
   - Update the `urlBase` variable to point to your API directory:
     ```javascript
     const urlBase = 'http://your-domain.com/api';
     ```

4. Set appropriate file permissions:
   ```bash
   chmod 755 api/*.php
   chmod 755 public/*.html
   ```

## How to Run and Access the Application

### Starting the Application

1. Ensure your Apache and MySQL servers are running:
   ```bash
   sudo service apache2 start
   sudo service mysql start
   ```

2. Access the application in your web browser:
   ```
   http://your-domain.com/public/index.html
   ```
   Or, if running locally:
   ```
   http://localhost/public/index.html
   ```

### Using the Application

1. **Login Page** (`index.html`):
   - Enter your username and password
   - Click "Do It" to log in
   - If you don't have an account, you'll need to create one directly in the database

2. **Main Application Page** (`color.html`):
   - Once logged in, you'll be redirected to the main page
   - **Add a Color**: Enter a color name in the "Color To Add" field and click "Add Color"
   - **Search Colors**: Enter a search term in the "Color To Search For" field and click "Search Color"
   - **Logout**: Click the "Log Out" button to end your session

### Session Management

- The application uses cookies to maintain user sessions
- Sessions expire after 20 minutes of inactivity
- You'll be automatically redirected to the login page if your session expires

## Assumptions and Limitations

### Assumptions

- The application assumes a standard LAMP stack environment
- MySQL is running on localhost with the specified credentials
- The web server has PHP enabled and configured
- Users are created directly in the database (no registration UI provided)

### Limitations

- **No User Registration**: The application does not include a user registration interface; users must be added directly to the database
- **Password Security**: Passwords are currently stored in plain text in the database (MD5 hashing is commented out in the code)
- **No Password Reset**: There is no password recovery or reset functionality
- **Single Database Configuration**: Database credentials are hardcoded in the PHP files
- **Limited Error Handling**: Error messages are basic and may not cover all edge cases
- **No Color Deletion**: Users can add and search colors but cannot delete them
- **No Input Validation**: Limited validation on user inputs (color names, search terms)
- **Session Management**: Simple cookie-based sessions without robust security measures

### Security Considerations

⚠️ **Warning**: This application is designed for educational purposes and should not be used in production without significant security enhancements, including:
- Implementing proper password hashing (bcrypt/Argon2)
- Using environment variables for database credentials
- Adding CSRF protection
- Implementing input sanitization and validation
- Using prepared statements (already implemented) consistently
- Adding HTTPS support
- Implementing proper session management with secure cookies

## AI Usage

This project was developed as part of a university course (COP 4331). The README.md file was created with assistance from an AI coding assistant to ensure comprehensive documentation covering all required aspects: application description, technologies used, setup instructions, usage guidelines, and limitations.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Course Information

- **Course**: COP 4331 - Processes for Object-Oriented Software Development
- **Project**: LAMP Stack Color Management Application
