# PenPulse

## Overview

PenPulse is a React-based web application integrated with AWS Lambda for backend services. The project leverages modern JavaScript frameworks and tools, including Vite for build and development, and supports scalable infrastructure using Terraform.

## Features

- **AWS Lambda Integration**: Authentication and backend services.
- **Responsive UI**: Built with Bootstrap.
- **Modern JavaScript Libraries**: Includes React, React DOM, and OIDC for identity management.
- **Infrastructure as Code**: Managed using Terraform.

---

## Prerequisites

Ensure the following tools are installed on your system before setting up the project:

- **Node.js**: (Recommended version: 18.x)
- **npm**: (Comes with Node.js)
- **AWS CLI**: Configured with appropriate credentials.
- **Terraform**: Required for infrastructure setup.

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd PenPulseAWS-main
```

### Install Dependencies

```bash
npm install
```

---

## Scripts

Manage the project using the following npm scripts:

### Start the Development Server

```bash
npm run dev
```

This command starts a local server for development with hot reloading.

### Build the Application for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run the Linter

```bash
npm run lint
```

---

## Usage

1. Start the application using:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000) (or as specified in the terminal).

---

## Infrastructure Setup

Terraform scripts for infrastructure setup are located in the `terraform/` directory.

### Steps:

1. Navigate to the Terraform directory:
   ```bash
   cd terraform
   ```
2. Initialize Terraform:
   ```bash
   terraform init
   ```
3. Apply the configuration:
   ```bash
   terraform apply
   ```
   > Review and confirm the changes before applying.

---

## Dependencies

### Main Libraries:

- **AWS Lambda**: Backend services and authentication.
- **Bootstrap**: CSS framework for responsive design.
- **React & React DOM**: Frontend library for building user interfaces.
- **Sass**: Preprocessor for better CSS management.

### Development Tools:

- **Vite**: Build and development tool for optimized performance.
- **ESLint**: Ensures code quality and linting.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
