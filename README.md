# Expense Tracker React

A simple and modern Expense Tracker web app built with React.  
Track your income and expenses, view your balance, and manage your transaction history.  
All data is stored locally in your browser.

## Features

- Add transactions as **Debit** (expense) or **Credit** (income)
- View running balance, total income, and total expenses
- Delete transactions from history
- Responsive design for all devices
- Cross-browser compatible
- Data persists in browser local storage

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/expense-tracker-react.git
   cd expense-tracker-react
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    AddTransaction.js
    Balance.js
    Header.js
    IncomeExpenses.js
    TransactionList.js
  context/
    AppReducer.js
    GlobalState.js
  App.js
  App.css
  index.js
```

## Customization

- Update currency symbol in the `moneyFormatter` function in components if needed.
- Style the app by editing `App.css`.

## License

This project is licensed
