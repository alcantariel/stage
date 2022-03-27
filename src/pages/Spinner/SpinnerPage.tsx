import { ComponentPage, Spinner } from 'components';
import { Property } from 'types';

const properties: Property[] = [
  {
    name: 'size',
    required: 'false',
    defaultValue: 'lg',
    description: 'Handles spinner size',
    type: 'xs | lg | sm | 1x | 2x | 3x | 4x | 5x | 6x | 7x | 8x | 9x | 10x'
  }
];

const SpinnerPage = () => {
  return (
    <ComponentPage title="Spinner" description="...">
      <ComponentPage.Section subtitle="Examples">
        <Spinner size="xs" className="mr-4" />
        <Spinner size="sm" className="mr-4" />
        <Spinner size="lg" />
      </ComponentPage.Section>
      <ComponentPage.TableProperties properties={properties} />
    </ComponentPage>
  );
};

export default SpinnerPage;
