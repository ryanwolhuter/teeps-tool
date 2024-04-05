import { computeFixedIncomeAssetDerivedFields } from "./src/calculations";
import { ASSET_PURCHASE, ASSET_SALE } from "./src/constants";

const mockAssetSaleTransactions = [
  {
    type: ASSET_SALE,
    entryTime: "2022-01-01",
    fees: [{ amount: 100 }],
    cashTransaction: {
      amount: 1000,
      entryTime: "2022-01-01",
    },
    fixedIncomeTransaction: {
      amount: 10,
      entryTime: "2022-01-01",
    },
  },
  {
    type: ASSET_SALE,
    entryTime: "2022-03-15",
    fees: [{ amount: 100 }],
    cashTransaction: {
      amount: 1000,
      entryTime: "2022-03-15",
    },
    fixedIncomeTransaction: {
      amount: 5,
      entryTime: "2022-03-15",
    },
  },
];

const mockAssetPurchaseTransactions = [
  {
    type: ASSET_PURCHASE,
    entryTime: "2022-01-01",
    fees: [{ amount: 100 }],
    cashTransaction: {
      amount: 1000,
      entryTime: "2022-01-01",
    },
    fixedIncomeTransaction: {
      amount: 10,
      entryTime: "2022-01-01",
    },
  },
  {
    type: ASSET_PURCHASE,
    entryTime: "2022-03-15",
    fees: [{ amount: 100 }],
    cashTransaction: {
      amount: 1000,
      entryTime: "2022-03-15",
    },
    fixedIncomeTransaction: {
      amount: 5,
      entryTime: "2022-03-15",
    },
  },
];

const allMockTransactions = [
  ...mockAssetSaleTransactions,
  ...mockAssetPurchaseTransactions,
];

const calculationResult =
  computeFixedIncomeAssetDerivedFields(allMockTransactions);

console.table(calculationResult);
