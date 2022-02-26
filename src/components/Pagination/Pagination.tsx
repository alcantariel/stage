import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledInput } from 'components';
import { darken, lighten } from 'polished';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Page, Pageable } from 'types';
import { isNumber } from 'utils';

const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const PaginationItem = styled.div`
  align-items: center;
  background-color: ${props => lighten('.1', props.theme.infoColor)};
  border-radius: 4px;
  color: ${props => props.theme.textColor};
  display: flex;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  margin: 0 8px;
  width: 30px;

  :hover {
    background-color: ${props => darken('.1', props.theme.boxShadowHoverColor)};
    cursor: pointer;
  }
`;

const PaginationInput = styled(StyledInput)`
  border: 1px solid ${props => props.theme.boxShadowHoverColor};
  font-weight: inherit;
  font-size: inherit;
  height: 30px;
  margin-right: 8px;
  text-align: center;
  width: 60px;
`;

const PageSizeSelector = styled.select`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.boxShadowHoverColor};
  font-weight: inherit;
  font-size: inherit;
  height: 30px;
  margin-left: -330px;
  text-align: center;
  width: 60px;

  :focus {
    border: 1px solid ${props => props.theme.primary};
    outline: none;
  }
`;

const PageSizeDescription = styled.p`
  margin: 0 220px 0 8px;
`;

export interface PaginationProps {
  page: Pageable;
  onPageChange: (page: Page) => void;
}

interface InnerPage {
  isEditing: boolean;
  value: number;
}

const pageSizeOptions = [10, 20, 30, 40, 50, 100];

export const Pagination = (props: PaginationProps) => {
  const { page, onPageChange } = props;
  const [innerPage, setInnerPage] = useState<InnerPage>({
    isEditing: false,
    value: page.number
  });

  const handlePageChange = (next: number): void => {
    if (next === innerPage.value || next < 1 || next > page.totalPages) {
      return;
    }

    onPageChange({ number: next, size: page.size });
    setInnerPage(prev => {
      return {
        ...prev,
        value: next
      };
    });
  };

  const handleCustomPageChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    const numberValue: number = +value;

    setInnerPage(prev => {
      return {
        ...prev,
        value: isNumber(numberValue) ? numberValue : prev.value
      };
    });
  };

  const handleCustomPageBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    let finalValue: number;
    const numberValue: number = +value;

    if (!isNumber(numberValue)) {
      finalValue = innerPage.value;
    } else if (numberValue < 1) {
      finalValue = 1;
    } else if (numberValue > page.totalPages) {
      finalValue = page.totalPages;
    } else {
      finalValue = numberValue;
    }

    setInnerPage({ isEditing: false, value: finalValue });
  };

  return (
    <PaginationContainer>
      <PageSizeSelector defaultValue={page.size}>
        {pageSizeOptions.map(size => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </PageSizeSelector>
      <PageSizeDescription>itens</PageSizeDescription>
      <PaginationItem onClick={() => handlePageChange(innerPage.value - 1)}>
        <FontAwesomeIcon icon="angle-left" />
      </PaginationItem>
      <PaginationInput
        autoFocus
        name="value"
        value={innerPage.value}
        onBlur={handleCustomPageBlur}
        onChange={handleCustomPageChange}
        title={innerPage.value?.toString()}
      />
      de {page.totalPages}
      <PaginationItem onClick={() => handlePageChange(innerPage.value + 1)}>
        <FontAwesomeIcon icon="angle-right" />
      </PaginationItem>
    </PaginationContainer>
  );
};
