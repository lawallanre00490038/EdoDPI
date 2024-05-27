## Project Documentation

### Overview
This project is a Next.js application designed for candidate registration. It provides a user-friendly interface to register candidates, capturing details such as state, name, school, and score.

### Folder Structure

- `pages/`: Contains the page components of the application. The main file here is `app/page.tsx` which handles the candidate registration form.
- `components/`: Includes reusable UI components like `Navbar` and `AlertDialogSlide` which are used across the application.
- `public/`: Stores static files like images and fonts that are used in the application.
- `styles/`: Contains CSS files for styling the application.
- `api/`: This directory would typically contain server-side logic, handling requests such as POST for registering candidates.

### Libraries and Dependencies

- `next`: The core framework providing server-side rendering and generating static websites.
- `react`: A JavaScript library for building user interfaces.
- `@mui/material`: Provides Material-UI components used in the UI design.
- `react-toastify`: Used for displaying alerts or notifications to the user.

### Running the Project

1. **Uncommet the lines of code in the handleSubmit function in the candidate_registration/page.tsx**

2. **For the generate_certificate page, I am still working on the certificate display part But get the candidate number section working first and we will fix this**

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

