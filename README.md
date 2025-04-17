# Number-Network-Scan

A web application that combines mathematical expression evaluation with IP address and proxy detection capabilities.

## Features

- Mathematical expression evaluation using Math.js API
- IP address detection using ipify API
- Proxy detection using IPQualityScore API
- Real-time results display

## Dependencies

- [Math.js API](https://api.mathjs.org/)
- [ipify API](https://api.ipify.org/)
- [IPQualityScore API](https://www.ipqualityscore.com/)

## Setup

1. Clone the repository
2. Navigate to project directory:
   ```
   cd Number-Network-Scan
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your IPQualityScore API key:
   ```
   IPQUALITYSCORE_API_KEY=your_api_key_here
   ```

## Usage

1. Open `index.html` in your web browser
2. Enter a mathematical expression in the input field
3. Click the "Calculate" button
4. View the results:
    - Mathematical calculation result
    - Your IP address
    - Proxy detection status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

