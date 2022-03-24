import { Code, ComponentPage, FormattedCurrency } from 'components';
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
      title="Formatted Number"
      description="Used to format a number in currency."
    >
      <ComponentPage.Section subtitle="When to Use">
        When the number need be formatted in currency. Will be formatted for the
        browser language
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Examples">
        <FormattedCurrency value={10} />
      </ComponentPage.Section>
      <ComponentPage.Section subtitle="Usage">
        <Code>{'<FormattedCurrency value={10} />'}</Code>
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default FormattedCurrencyPage;
