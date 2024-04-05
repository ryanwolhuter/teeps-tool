import { allGroupTransactionTypes } from "./constants";
import type { GroupTransaction } from "./types";

export const mockBaseTransaction = {
  amount: 1000,
  entryTime: "2021-10-01",
};

export const mockGroupTransaction = {
  type: allGroupTransactionTypes[0],
  entryTime: "2021-10-01 00:00:00",
  fees: [],
  cashTransaction: mockBaseTransaction,
  fixedIncomeTransaction: mockBaseTransaction,
};

export function makeMockGroupTransactions(
  count: number,
  template: GroupTransaction = mockGroupTransaction
) {
  return Array.from({ length: count }, () => template);
}
