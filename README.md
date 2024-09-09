# The Ring Network: Multi-Tenant Demo Repository

## Overview and Description

Welcome to **The Ring Network** repository! This project is designed as a demo to accompany my multi-tenant architecture presentation, "One Backend to Rule Them All: Mastering Multi-Tenant Customization." The goal of this repository is to showcase how to manage multiple tenants with distinct user interfaces while maintaining a unified backend infrastructure. 

In this demo, you'll explore how to use NGINX, Docker, Node.js (with TypeScript), and Nunjucks templating engine to create and manage tenant-specific customizations. Each tenant, represented by different Middle-earth races, has a unique UI, yet all are powered by a single backend system.

## Basic Structural Breakdown

The repository is organized as follows:

- **`/scripts/`**: Contains bash scripts for managing clients and running the demo.
  - `dev`: Main script for onboarding/removing clients, deploying the application, and managing the environment.
  
- **`/nginx/`**: Contains NGINX configuration files and Dockerfile for setting up the reverse proxy.
  - `Dockerfile`: Builds the NGINX image.
  - `nginx.conf`: Main NGINX configuration file.
  - `sites-enabled/`: Directory where client-specific configurations will be copied for deployment.

- **`/app/`**: Contains the Node.js application code, written in TypeScript, along with Nunjucks templates and public assets.
  - `Dockerfile`: Builds the Node.js application image.
  - `src/`: Contains the TypeScript source code for the application.
  - `views/`: Nunjucks templates organized by client.
  - `public/`: Static assets, including client-specific CSS files.

- **`/forges/`**: Contains client-specific configurations, templates, and assets.
  - `elven/`, `dwarven/`, etc.: Directories housing each tenant's custom NGINX configuration, templates, and CSS files.

- **`docker-compose.yml`**: Orchestrates the application and NGINX containers.

## Getting Started

### Prerequisites

To work with this repository, ensure you have the following installed:

- **Docker** and **Docker Compose**
- **Node.js** and **npm**

### Steps to Clone and Setup the Repository

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/guahanweb/ringnetwork.git
   cd ringnetwork
   ```

2. **Set Up the Environment:**

   Make sure the necessary directories exist and the `/etc/hosts` file is correctly configured.

   - **Run the setup script:**
        ```bash
        ./scripts/dev add-subdomains
        ```
    - **Install Node.js dependencies:**
        ```bash
        cd app
        npm install
        ```
    - **Build the TypeScript files:**
        ```bash
        npm run build
        ```

## Running the Demo

### Spin Up the Containers

1. **Onboard Clients:**

    To onboard new clients (e.g., `elven`, `dwarven`), or to re-deploy changes to previously onboarded clients, use the onboard-client command:
    ```bash
    ./scripts/dev onboard-client elven
    ./scripts/dev onboard-client dwarven
    ```

2. **Deploy the Application:**

    Run the following command to build and start the Docker containers:
    ```bash
    ./scripts/dev deploy
    ```

### Visit the Sites

Once the containers are running, you can visit the following URLs in your browser to see the demo in action:

- **Power Client:** http://power.ringnetwork.com:8080
- **Elven Client:** http://elven.ringnetwork.com:8080
- **Dwarven Client:** http://dwarven.ringnetwork.com:8080

Each client will present a unique interface that is powered by the same backend application but customized based on the tenant.

### Stopping the Demo

When you are done with the demo, stop the containers with:

```bash
./scripts/dev stop
```

To remove the clients from the environment:

```bash
./scripts/dev remove-client elven
./scripts/dev remove-client dwarven
```

### Cleanup

If you want to clean up the `/etc/hosts` entries:

```bash
./scripts/dev remove-subdomains
```

## Contributing

Feel free to fork this repository, submit issues, or crete pull requests if you have ideas to improve this demo!

## License

This repository is licensed under the MIT License.
