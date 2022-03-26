import { ComponentPage, FormattedCurrency } from 'components';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'value',
    description: 'Value that will be converted',
    type: 'number',
    required: 'true',
    defaultValue: ''
  }
];

const FormattedCurrencyPage = () => {
  return (
    <ComponentPage
      title="Formatted Currency"
      description="Used to format a number in currency."
    >
      <ComponentPage.Section subtitle="Examples">
        <FormattedCurrency value={10} />
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default FormattedCurrencyPage;
