// eslint-disable-next-line @typescript-eslint/unbound-method
const QARCurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;

  export const formatCurrency = (amount:string|number) => QARCurrencyFormatter(Number(amount));