export const ASSET_PURCHASE = "AssetPurchase" as const;
export const ASSET_SALE = "AssetSale" as const;
export const PRINCIPAL_DRAW = "PrincipalDraw" as const;
export const PRINCIPAL_RETURN = "PrincipalReturn" as const;
export const INTEREST_PAYMENT = "InterestPayment" as const;
export const FEES_PAYMENT = "FeesPayment" as const;

export const principalGroupTransactions = [
  PRINCIPAL_DRAW,
  PRINCIPAL_RETURN,
] as const;

export const assetGroupTransactions = [ASSET_PURCHASE, ASSET_SALE] as const;

export const allGroupTransactionTypes = [
  ...principalGroupTransactions,
  ...assetGroupTransactions,
  INTEREST_PAYMENT,
  FEES_PAYMENT,
] as const;
