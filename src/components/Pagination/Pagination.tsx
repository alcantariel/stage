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

const FIRST_PAGE = 1;
const SUB_OPERATION = -1;
const SUM_OPERATION = +1;

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

  const handlePageChange = (operation: number): void => {
    const value: number = getFinalValue(innerPage.value + operation);

    onPageChange({ number: value, size: page.size });
    setInnerPage(prev => {
      return {
        ...prev,
        value
      };
    });
  };

  const handleCustomPageChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value: number = getFinalValue(+event.target.value);

    setInnerPage(prev => {
      return {
        ...prev,
        value: isNumber(value) ? value : prev.value
      };
    });
  };

  const handleCustomPageBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    setInnerPage({
      isEditing: false,
      value: getFinalValue(+event.target.value)
    });
  };

  const getFinalValue = (value: number): number => {
    if (!isNumber(value)) {
      return innerPage.value;
    }

    if (value < FIRST_PAGE) {
      return FIRST_PAGE;
    }

    if (value > page.totalPages) {
      return page.totalPages;
    }

    return value;
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
      <PaginationItem onClick={() => handlePageChange(SUB_OPERATION)}>
        <FontAwesomeIcon icon="angle-left" />
      </PaginationItem>
      <PaginationInput
        name="value"
        value={innerPage.value}
        onBlur={handleCustomPageBlur}
        onChange={handleCustomPageChange}
      />
      de {page.totalPages}
      <PaginationItem onClick={() => handlePageChange(SUM_OPERATION)}>
        <FontAwesomeIcon icon="angle-right" />
      </PaginationItem>
    </PaginationContainer>
  );
};
