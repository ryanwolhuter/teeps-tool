import { computeFixedIncomeAssetDerivedFields } from "./src/calculations";
import { ASSET_PURCHASE } from "./src/constants";
import { makeMockGroupTransactions } from "./src/data";

const mockAssetSaleTransactions = makeMockGroupTransactions(10, {
  type: "AssetSale",
  entryTime: "2021-10-01 00:00:00",
  fees: [{ amount: 100 }],
  cashTransaction: {
    amount: 1000,
    entryTime: "2021-10-01",
  },
  fixedIncomeTransaction: {
    amount: 1000,
    entryTime: "2021-10-01",
  },
});

// const mockAssetPurchaseTransactions = makeMockGroupTransactions(10, {
//   type: "AssetPurchase",
//   entryTime: "2021-10-01 00:00:00",
//   fees: [{ amount: 100 }],
//   cashTransaction: {
//     amount: 1000,
//     entryTime: "2021-10-01",
//   },
//   fixedIncomeTransaction: {
//     amount: 1000,
//     entryTime: "2021-10-01",
//   },
// });

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
