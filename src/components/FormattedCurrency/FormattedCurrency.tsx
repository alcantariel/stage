import { defaultLocale } from 'utils';

export interface FormattedCurrencyProps extends Intl.NumberFormatOptions {
  value: number;
}

export const FormattedCurrency = (props: FormattedCurrencyProps) => {
  const formattedNumber = new Intl.NumberFormat(defaultLocale, {
    ...props,
    style: 'currency',
    currency: 'BRL' // get currency by locale
  }).format(props.value);

  return <>{formattedNumber}</>;
};
