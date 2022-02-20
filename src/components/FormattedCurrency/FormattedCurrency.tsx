import { currencyByLocale, getLocale } from 'utils';

export interface FormattedCurrencyProps extends Intl.NumberFormatOptions {
  value: number;
}

export const FormattedCurrency = (props: FormattedCurrencyProps) => {
  const locale = getLocale();

  const formattedNumber = new Intl.NumberFormat(locale, {
    ...props,
    style: 'currency',
    currency: currencyByLocale[locale]
  }).format(props.value);

  return <>{formattedNumber}</>;
};
