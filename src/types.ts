export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type Account = {
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  reference: Scalars['String']['output'];
};

export type AddFeesToGroupTransactionInput = {
  fees?: InputMaybe<Array<TransactionFeeInput>>;
  id: Scalars['ID']['input'];
};

export type Asset = Cash | FixedIncome;

export type BaseTransaction = {
  accountId: Maybe<Scalars['ID']['output']>;
  amount: Scalars['Float']['output'];
  assetId: Scalars['ID']['output'];
  counterPartyAccountId: Maybe<Scalars['ID']['output']>;
  entryTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  settlementTime: Maybe<Scalars['DateTime']['output']>;
  tradeTime: Maybe<Scalars['DateTime']['output']>;
  txRef: Maybe<Scalars['String']['output']>;
};

export type Cash = {
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  spvId: Scalars['ID']['output'];
};

export type CreateAccountInput = {
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  reference: Scalars['String']['input'];
};

export type CreateBaseTransactionInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  amount: Scalars['Float']['input'];
  assetId: Scalars['ID']['input'];
  counterPartyAccountId?: InputMaybe<Scalars['ID']['input']>;
  entryTime: Scalars['DateTime']['input'];
  id: Scalars['ID']['input'];
  settlementTime?: InputMaybe<Scalars['DateTime']['input']>;
  tradeTime?: InputMaybe<Scalars['DateTime']['input']>;
  txRef?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCashAssetInput = {
  balance: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  spvId: Scalars['ID']['input'];
};

export type CreateFixedIncomeAssetInput = {
  CUSIP?: InputMaybe<Scalars['String']['input']>;
  ISIN?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['Float']['input']>;
  fixedIncomeTypeId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  maturity: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  spvId: Scalars['ID']['input'];
};

export type CreateFixedIncomeTypeInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateGroupTransactionInput = {
  cashBalanceChange: Scalars['Float']['input'];
  cashTransaction?: InputMaybe<CreateBaseTransactionInput>;
  entryTime: Scalars['DateTime']['input'];
  fees?: InputMaybe<Array<TransactionFeeInput>>;
  fixedIncomeTransaction?: InputMaybe<CreateBaseTransactionInput>;
  id: Scalars['ID']['input'];
  type: GroupTransactionType | `${GroupTransactionType}`;
};

export type CreateServiceProviderFeeTypeInput = {
  accountId: Scalars['ID']['input'];
  feeType: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateSpvInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type DeleteAccountInput = {
  id: Scalars['ID']['input'];
};

export type DeleteCashAssetInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFixedIncomeAssetInput = {
  id: Scalars['ID']['input'];
};

export type DeleteGroupTransactionInput = {
  id: Scalars['ID']['input'];
};

export type DeleteServiceProviderFeeTypeInput = {
  id: Scalars['ID']['input'];
};

export type DeleteSpvInput = {
  id: Scalars['ID']['input'];
};

export type EditAccountInput = {
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
};

export type EditBaseTransactionInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  assetId?: InputMaybe<Scalars['ID']['input']>;
  counterPartyAccountId?: InputMaybe<Scalars['ID']['input']>;
  entryTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  settlementTime?: InputMaybe<Scalars['DateTime']['input']>;
  tradeTime?: InputMaybe<Scalars['DateTime']['input']>;
  txRef?: InputMaybe<Scalars['String']['input']>;
};

export type EditCashAssetInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  spvId?: InputMaybe<Scalars['ID']['input']>;
};

export type EditFixedIncomeAssetInput = {
  CUSIP?: InputMaybe<Scalars['String']['input']>;
  ISIN?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['Float']['input']>;
  fixedIncomeTypeId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  maturity?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  spvId?: InputMaybe<Scalars['ID']['input']>;
};

export type EditFixedIncomeTypeInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditGroupTransactionFeesInput = {
  fees?: InputMaybe<Array<TransactionFeeInput>>;
  id: Scalars['ID']['input'];
};

export type EditGroupTransactionInput = {
  cashBalanceChange?: InputMaybe<Scalars['Float']['input']>;
  cashTransaction?: InputMaybe<EditBaseTransactionInput>;
  entryTime?: InputMaybe<Scalars['DateTime']['input']>;
  fixedIncomeTransaction?: InputMaybe<EditBaseTransactionInput>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<GroupTransactionType | `${GroupTransactionType}`>;
};

export type EditServiceProviderFeeTypeInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  feeType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditSpvInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FixedIncome = {
  CUSIP: Maybe<Scalars['String']['output']>;
  ISIN: Maybe<Scalars['String']['output']>;
  coupon: Maybe<Scalars['Float']['output']>;
  fixedIncomeTypeId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  maturity: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  notional: Scalars['Float']['output'];
  purchaseDate: Scalars['DateTime']['output'];
  purchasePrice: Scalars['Float']['output'];
  purchaseProceeds: Scalars['Float']['output'];
  realizedSurplus: Scalars['Float']['output'];
  salesProceeds: Scalars['Float']['output'];
  spvId: Scalars['ID']['output'];
  totalDiscount: Scalars['Float']['output'];
};

export type FixedIncomeType = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GroupTransaction = {
  cashBalanceChange: Scalars['Float']['output'];
  cashTransaction: Maybe<BaseTransaction>;
  entryTime: Scalars['DateTime']['output'];
  fees: Maybe<Array<TransactionFee>>;
  fixedIncomeTransaction: Maybe<BaseTransaction>;
  id: Scalars['ID']['output'];
  type: GroupTransactionType | `${GroupTransactionType}`;
};

export type GroupTransactionType =
  | 'AssetPurchase'
  | 'AssetSale'
  | 'FeesPayment'
  | 'InterestPayment'
  | 'PrincipalDraw'
  | 'PrincipalReturn';

export type RealWorldAssetsState = {
  accounts: Array<Account>;
  fixedIncomeTypes: Array<FixedIncomeType>;
  portfolio: Array<Asset>;
  principalLenderAccountId: Scalars['ID']['output'];
  serviceProviderFeeTypes: Array<ServiceProviderFeeType>;
  spvs: Array<Spv>;
  transactions: Array<GroupTransaction>;
};

export type RemoveFeesFromGroupTransactionInput = {
  feeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};

export type ServiceProviderFeeType = {
  accountId: Scalars['ID']['output'];
  feeType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Spv = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TransactionFee = {
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  serviceProviderFeeTypeId: Scalars['ID']['output'];
};

export type TransactionFeeInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  serviceProviderFeeTypeId?: InputMaybe<Scalars['ID']['input']>;
};
