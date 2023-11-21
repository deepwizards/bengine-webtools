# bengine-webtools

Welcome to `bengine-webtools`, a comprehensive repository for web tools integrated with the bengine platform. This repository contains various modules, services, and datasets specifically designed to enhance the functionality of the main bengine application.

## Repository Structure

`benfo.json` is the central file organizing the contents of this repository. It categorizes the contents into:

- `modules`: These are intended to be installed directly within the main bengine application.
- `services`: Designed to run as containers in the service cluster.
- `datasets`: Various datasets used by the modules and services.

## Features

- **Bengine Integrated API**: Allows web search using the SERP API. [Click here](https://serpapi.com/) for instructions on obtaining an API key and setup.
- **Web Scraping and Crawling**: Tools for efficient web data extraction.

## Getting Started

### Cloning the Repository

To clone the repository, execute:

`git clone https://github.com/deepwizards/bengine-webtools.git`

### Contribution Guidelines

We use a modified GitFlow workflow. Here's how you can contribute:

1. **Create a Feature Branch**:
   `git checkout -b feature/your-feature-name`

2. **Commit Your Changes**:
   Make your changes and commit them to your feature branch.
   `git commit -am "Add some feature"`

3. **Push to the Branch**:
   `git push origin feature/your-feature-name`

4. **Create a Pull Request (PR)**:
   Open a pull request to the `dev` branch for review.

5. **Review Process**:
   Wait for a maintainer to review and approve your PR.

6. **Merging to Main Branch**:
   Once approved, a maintainer will merge your changes to the `main` branch.

## Contribution Best Practices

- Ensure your code adheres to the project's coding standards.
- Update the `benfo.json` file if adding new modules, services, or datasets.
- Test your code thoroughly before submitting a PR.
- Provide a clear and detailed description of your changes in the PR.

## Support

For support or further information, please contact [ben@bengine.ai](mailto:ben@bengine.ai).

Thank you for contributing to `bengine-webtools`!
