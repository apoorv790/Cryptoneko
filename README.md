# CrytoNeko - Cryptocurrency Tracker

CrytoNeko is a React.js and Tailwind CSS-based web application designed to provide live cryptocurrency data. Powered by the CoinGecko API, the app offers users real-time information on cryptocurrency prices, market capitalization, historical trends, and more. Its responsive and visually appealing interface ensures an engaging user experience.

## Features

### 1. **Live Cryptocurrency Data**
- Displays live data for the top 50 cryptocurrencies, including current prices and market capitalization.
- Regular updates ensure accurate and reliable information.

### 2. **Interactive Carousel**
- Features real-time price updates and 24-hour price fluctuation data.

### 3. **Detailed Cryptocurrency Pages**
- Each cryptocurrency page includes:
  - A detailed description.
  - Ranking information.
  - Line charts showcasing price changes over multiple time frames (24 hours, 30 days, 3 months, 1 year).

### 4. **Responsive Design**
- Built with Tailwind CSS to provide a clean and adaptive layout for all device sizes.

### 5. **Data Visualization**
- Utilizes Recharts to create interactive and visually appealing charts for historical price trends.

## Technologies Used

- **React.js**: Front-end framework for building a dynamic and interactive user interface.
- **Tailwind CSS**: Utility-first CSS framework for designing a responsive and modern UI.
- **CoinGecko API**: Source for live cryptocurrency data, including prices, market trends, and more.
- **Recharts**: Library for creating interactive charts and graphs.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crytoneko.git
   cd crytoneko
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- View live cryptocurrency data and trends.
- Navigate through the carousel to explore top 10 cryptocurrencies.
- Click on any cryptocurrency for detailed information and historical data visualization.

## Project Structure

```plaintext
src/
|-- components/         # Reusable React components
|-- pages/              # Application pages
|-- services/           # API calls and data handling
|-- styles/             # Tailwind CSS configurations and custom styles
|-- App.js              # Main application component
|-- index.js            # Entry point of the application
```

## Contributions

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.


## Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data.
- [Tailwind CSS](https://tailwindcss.com/) for the responsive UI design.
- [Recharts](https://recharts.org/) for interactive chart visualizations.

---

### Demo
Visit the live application: [CrytoNeko](https://crytoneko.netlify.app/)
