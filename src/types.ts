export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: string; output: string };
};

export type BaseTransaction = {
  amount: Scalars["Float"]["output"];
  entryTime: Scalars["DateTime"]["output"];
};

export type GroupTransaction = {
  type: GroupTransactionType;
  entryTime: Scalars["DateTime"]["output"];
  fees: InputMaybe<Array<TransactionFee>>;
  cashTransaction: InputMaybe<BaseTransaction>;
  fixedIncomeTransaction: InputMaybe<BaseTransaction>;
};

export type GroupTransactionType =
  | "AssetPurchase"
  | "AssetSale"
  | "FeesPayment"
  | "InterestPayment"
  | "PrincipalDraw"
  | "PrincipalReturn";

export type TransactionFee = {
  amount: Scalars["Float"]["output"];
};
