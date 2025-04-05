# Frontend Application

This document provides detailed instructions for configuring and running the application locally, as well as documentation of the technical choices made during development.

## Local Setup and Execution

### Prerequisites

- Node.js (version 18.x or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone [REPO_URL]
   cd [PROJECT_NAME]
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Access the application in your browser at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the built application

## Technical Documentation

### Architecture and Technical Choices

#### Framework and Structure

The application is developed with **Next.js**, a React framework that offers:
- Server-side rendering (SSR) and static site generation (SSG)
- Automatic image optimization
- File-based routing
- API routes for backend functionality

Project structure:
```
/apis            # Http Requests Logic
/app             # Next.js App Router routing structure
/components      # Reusable components
/constants       # Constants
/utils           # Utilities and helper functions
/stores          # Zustand State Management Stores
/schemas         # Yup Schemas Form Validations
/public          # Static files
/hooks           # For Custom Hooks
/data            # Common Data like sidebar links
```

#### Technologies Used

1. **Tailwind CSS v4**
   - Utility-first CSS framework for rapid and consistent development
   - Benefits:
     - Inline styles without leaving JSX
     - Minimal CSS bundle through automatic purging
     - Simplified responsive design
     - Easy theming and customization

2. **shadcn/ui**
   - Collection of reusable UI components
   - Seamless integration with Tailwind CSS
   - Benefits:
     - Accessible and customizable components
     - No npm dependency, code is directly integrated into our codebase
     - Consistent styling across the application
     - Easy maintenance

3. **TypeScript**
   - Typed superset of JavaScript to improve code quality
   - Type checking and autocompletion

4. **Data Management**
   - Zustand For State Management
   - React Query for client-side data fetching and caching
   - Benefits:
     - Automatic caching and refetching
     - Server state synchronization
     - Loading and error states handling

6. **Form Handling**
   - React Hook Form for efficient form management
   - Yup for schema validation
   - Benefits:
     - Performant, reducing unnecessary re-renders
     - Easy form validation
     - Flexible integration with UI components

### Development Process

1. **Project Setup**
   - Initialize Next.js project with TypeScript
   - Install and configure core libraries (Tailwind CSS, shadcn/ui)
   - Set up form handling with React Hook Form and Yup
   - Configure React Query for API management

2. **Design System Creation**
   - Establish color palette and typography
   - Configure Tailwind theme
   - Implement base components from shadcn/ui
   - Create custom component variants as needed

3. **Feature Development**
   - Implement page layouts
   - Create form components with validation
   - Set up API integration with React Query
   - Develop UI interactions and state management

4. **Testing and Refinement**
   - Manual testing of components and features
   - Cross-browser compatibility checks
   - Performance optimization
   - UI/UX refinements
