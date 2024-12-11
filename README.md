# Football Player Finder - Blazor Application

## Overview
The **Football Player Finder** is a Blazor web application designed to allow users to search for football players, filter results based on team and popularity, and navigate through the results using pagination. This application integrates with the "Free API Live Football Data" API to fetch real-time football player information.

## Features
- **Player Search:** Users can search for players by entering a name in the search bar.
- **Filtering Options:**
  - Filter results by team.
  - Filter results by popularity (High, Medium, Low).
- **Pagination:** Paginate through player results for improved user experience.
- **Responsive Design:** Styled using Bootstrap for a clean and responsive interface.

## Installation

### Prerequisites
- .NET 7 SDK or higher.
- Visual Studio 2022 or Visual Studio Code.
- Node.js and Playwright (if running tests).
- Access to the "Free API Live Football Data" API on RapidAPI.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/DavidC313/CA3
   ```
2. Navigate to the project directory:
   ```bash
   cd CA3
   ```
3. Restore dependencies:
   ```bash
   dotnet restore
   ```
4. Run the application:
   ```bash
   dotnet run --project BlazorAppCA3
   ```
5. Open your browser and navigate to `https://localhost:7163`.

## Testing
The application includes automated UI tests using Playwright. To run the tests:
1. Navigate to the `tests` directory:
   ```bash
   cd tests
   ```
2. Install Playwright dependencies:
   ```bash
   npx playwright install
   ```
3. Run the tests:
   ```bash
   npx playwright test
   ```

## Code Quality
The application has been analyzed using Visual Studio Code Metrics:
- **Maintainability Index:** High (85+ for all components).
- **Cyclomatic Complexity:** Minimal due to modularization.

## Deployment
This application can be deployed to:
- **Azure:** Publish the Blazor app directly from Visual Studio to an Azure App Service.

## API Integration
The app uses the "Free API Live Football Data" API. Update the API key in the `PlayerService.cs` file:
```csharp
client.DefaultRequestHeaders.Add("x-rapidapi-key", "Your-API-Key");
```

