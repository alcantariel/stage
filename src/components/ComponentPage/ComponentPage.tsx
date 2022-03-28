import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode
} from 'react';
import styled from 'styled-components';
import { Property } from 'types';

import { Container } from '../Container';
import { Table } from '../Table';

interface ComponentPageProps {
  children:
    | ReactElement<SectionProps>
    | ReactElement<SectionProps>[]
    | ReactElement<TablePropertiesProps>;
  description: string;
  title: string;
}

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: any;
  children: ReactNode;
  title: string;
}

interface TablePropertiesProps {
  properties: Property[];
}

const PageContainer = styled(Container)`
  * {
    color: ${props => props.theme.textColor};
  }

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const SectionContainer = styled.div`
  display: block;
`;

export const ComponentPage = (props: ComponentPageProps) => {
  const { children, description, title } = props;

  return (
    <PageContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </PageContainer>
  );
};

const Section = (props: SectionProps) => {
  const { children, title, ...rest } = props;

  return (
    <SectionContainer {...rest}>
      <h3>{title}</h3>
      {children}
    </SectionContainer>
  );
};

const TableProperties = (props: TablePropertiesProps) => {
  const { properties } = props;

  return (
    <Section title="Properties">
      <Table values={properties} keyExtractor={property => property.name}>
        <Table.Column
          header="Name"
          data={(property: Property) => <b>{property.name}</b>}
        />
        <Table.Column
          header="Description"
          data={(property: Property) => property.description}
        />
        <Table.Column
          width="35%"
          header="Type"
          data={(property: Property) => property.type}
        />
        <Table.Column
          header="Default"
          data={(property: Property) => property.defaultValue || '-'}
        />
        <Table.Column
          header="Required"
          data={(property: Property) => property.required}
        />
      </Table>
    </Section>
  );
};

ComponentPage.Section = Section;
ComponentPage.TableProperties = TableProperties;
