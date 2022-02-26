import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledInput } from 'components';
import { darken, lighten } from 'polished';
import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { Page, Pageable } from 'types';
import { isNumber, KeyboardCodeUtils } from 'utils';

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
  number: number;
  size: number;
}

const pageSizeOptions = [10, 20, 30, 40, 50, 100];

export const Pagination = (props: PaginationProps) => {
  const { page, onPageChange } = props;
  const [innerPageNumber, setInnerPageNumber] = useState(page.number);
  const [innerPage, setInnerPage] = useState<InnerPage>({
    number: page.number,
    size: page.size
  });

  useEffect(() => {
    onPageChange(innerPage);
  }, [innerPage.number, innerPage.size]);

  const handleAngleChange = (operation: number): void => {
    const value: number = getNewPageNumber(innerPageNumber + operation);

    setInnerPageNumber(value);
    setInnerPage(prev => {
      return {
        ...prev,
        number: value
      };
    });
  };

  const handlePageNumberChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setInnerPageNumber(getNewPageNumber(+event.target.value));
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setInnerPage(prev => {
      return {
        ...prev,
        size: +event.target.value
      };
    });
  };

  const handlePageNumberBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    setInnerPage(prev => {
      return {
        ...prev,
        number: getNewPageNumber(+event.target.value)
      };
    });
  };

  const handlePageNumberKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (KeyboardCodeUtils.ENTER === event.code) {
      setInnerPage(prev => {
        return {
          ...prev,
          number: innerPageNumber
        };
      });
    }
  };

  const getNewPageNumber = (number: number): number => {
    if (!isNumber(number)) {
      return innerPageNumber;
    }

    if (number < FIRST_PAGE) {
      return FIRST_PAGE;
    }

    if (number > page.totalPages) {
      return page.totalPages;
    }

    return number;
  };

  return (
    <PaginationContainer>
      <PageSizeSelector
        name="size"
        defaultValue={page.size}
        onChange={handlePageSizeChange}
        data-testid="pageselector_options"
      >
        {pageSizeOptions.map(size => (
          <option
            key={size}
            value={size}
            data-testid={`pageselection_option_${size}`}
          >
            {size}
          </option>
        ))}
      </PageSizeSelector>
      <PageSizeDescription>itens</PageSizeDescription>
      <PaginationItem
        data-testid="angle_left"
        onClick={() => handleAngleChange(SUB_OPERATION)}
      >
        <FontAwesomeIcon icon="angle-left" />
      </PaginationItem>
      <PaginationInput
        name="number"
        value={innerPageNumber}
        data-testid="page_input"
        onBlur={handlePageNumberBlur}
        onChange={handlePageNumberChange}
        onKeyDown={handlePageNumberKeyDown}
      />
      de {page.totalPages}
      <PaginationItem
        data-testid="angle_right"
        onClick={() => handleAngleChange(SUM_OPERATION)}
      >
        <FontAwesomeIcon icon="angle-right" />
      </PaginationItem>
    </PaginationContainer>
  );
};
