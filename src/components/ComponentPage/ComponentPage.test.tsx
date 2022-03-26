import { screen } from '@testing-library/react';
import { FormattedCurrency } from 'components';
import { Property } from 'types';
import { render } from 'utils/testing';

import { ComponentPage } from '../ComponentPage';

describe('ComponentPage.test.tsx', () => {
  it('render correctly', () => {
    const properties: Property[] = [
      {
        name: 'value',
        description: 'Value that will be converted',
        type: 'number',
        required: 'true',
        defaultValue: '0'
      }
    ];

    render(
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

    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('Properties')).toBeInTheDocument();
    expect(screen.getByTestId('Name_0')).toHaveTextContent('Name');
    expect(screen.getByTestId('Description_1')).toHaveTextContent(
      'Description'
    );
    expect(screen.getByTestId('Type_2')).toHaveTextContent('Type');
    expect(screen.getByTestId('Default_3')).toHaveTextContent('Default');
    expect(screen.getByTestId('Required_4')).toHaveTextContent('Required');
    expect(screen.getByTestId('value_0')).toHaveTextContent('value');
    expect(screen.getByTestId('value_1')).toHaveTextContent(
      'Value that will be converted'
    );
    expect(screen.getByTestId('value_2')).toHaveTextContent('number');
    expect(screen.getByTestId('value_3')).toHaveTextContent('0');
    expect(screen.getByTestId('value_4')).toHaveTextContent('true');
  });

  it('render correctly without defaultValue', () => {
    const properties: Property[] = [
      {
        name: 'isExample',
        type: 'boolean',
        required: 'true',
        defaultValue: '',
        description: 'should pass a table as children if isExample = true'
      }
    ];

    render(
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

    expect(screen.getByTestId('isExample_3')).toHaveTextContent('-');
  });
});
