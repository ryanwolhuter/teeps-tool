import { computeFixedIncomeAssetDerivedFields } from "./src/calculations";
import { ASSET_PURCHASE, ASSET_SALE } from "./src/constants";

const mockAssetSaleTransactions = [
  {
    type: ASSET_SALE,
    entryTime: "2024-04-01",
    fees: [{ amount: 1000 }],
    cashTransaction: {
      amount: 75000,
      entryTime: "2024-04-01",
    },
    fixedIncomeTransaction: {
      amount: 488,
      entryTime: "2024-04-01",
    },
  },
  {
    type: ASSET_SALE,
    entryTime: "2024-04-10",
    fees: [{ amount: 1000 }],
    cashTransaction: {
      amount: 75000,
      entryTime: "2024-04-10",
    },
    fixedIncomeTransaction: {
      amount: 488,
      entryTime: "2024-04-10",
    },
  },
  {
    type: ASSET_SALE,
    entryTime: "2024-04-10",
    fees: [{ amount: 1000 }],
    cashTransaction: {
      amount: 150000,
      entryTime: "2024-04-10",
    },
    fixedIncomeTransaction: {
      amount: 488,
      entryTime: "2024-04-10",
    },
  },
 
];

const mockAssetPurchaseTransactions = [
  {
    type: ASSET_PURCHASE,
    entryTime: "2022-01-01",
    fees: [{ amount: 1500 }],
    cashTransaction: {
      amount: 99862.82,
      entryTime: "2022-01-01",
    },
    fixedIncomeTransaction: {
      amount: 976,
      entryTime: "2022-01-01",
    },
  },
  {
    type: ASSET_PURCHASE,
    entryTime: "2024-01-01",
    fees: [{ amount: 1500 }],
    cashTransaction: {
      amount: 99862.82,
      entryTime: "2022-01-01",
    },
    fixedIncomeTransaction: {
      amount: 976,
      entryTime: "2022-01-01",
    },
  }
];

const allMockTransactions = [
  ...mockAssetSaleTransactions,
  ...mockAssetPurchaseTransactions,
];

const calculationResult =
  computeFixedIncomeAssetDerivedFields(allMockTransactions);

console.table(calculationResult);
