import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledInput, StyledSelect } from 'components';
import { darken, lighten } from 'polished';
import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { PageRequest, Page } from 'types';
import { isNumber, KeyboardCodeUtils } from 'utils';

const PaginationContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  width: 413.5px;
`;

const PaginationItems = styled.div`
  align-items: center;
  display: flex;
  margin-left: 100px;
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
  transition: 0.3s ease;
  user-select: none;
  width: 30px;

  :hover {
    background-color: ${props => darken('.1', props.theme.defaultBorderColor)};
    cursor: pointer;
  }
`;

const PaginationInput = styled(props => <StyledInput {...props} />)`
  border: 1px solid ${props => props.theme.defaultBorderColor};
  font-weight: inherit;
  font-size: inherit;
  height: 30px;
  margin-right: 8px;
  text-align: center;
  width: 60px;
`;

const PageSizeSelector = styled(props => <StyledSelect {...props} />)`
  font-weight: inherit;
  font-size: inherit;
  text-align: center;
  max-width: 110px;
`;

export interface PaginationProps {
  page: Page;
  onPageChange: (page: PageRequest) => void;
}

const FIRST_PAGE = 1;
const SUB_OPERATION = -1;
const SUM_OPERATION = +1;
const pageSizeOptions = [10, 20, 50, 100];

export const Pagination = (props: PaginationProps) => {
  const { page, onPageChange } = props;
  const [currentPage, setCurrentPage] = useState(page.number);
  const [innerPage, setInnerPage] = useState<PageRequest>({
    number: page.number,
    size: page.size
  });

  useEffect(() => {
    onPageChange(innerPage);
  }, [innerPage.number, innerPage.size]);

  const handleAngleChange = (operation: number): void => {
    const value: number = getNewPageNumber(currentPage + operation);

    setCurrentPage(value);
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
    setCurrentPage(getNewPageNumber(+event.target.value));
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
          number: currentPage
        };
      });
    }
  };

  const getNewPageNumber = (number: number): number => {
    if (!isNumber(number)) {
      return currentPage;
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
            {size} itens
          </option>
        ))}
      </PageSizeSelector>
      <PaginationItems>
        <PaginationItem
          data-testid="angle_left"
          onClick={() => handleAngleChange(SUB_OPERATION)}
        >
          <FontAwesomeIcon icon="angle-left" />
        </PaginationItem>
        <PaginationInput
          name="number"
          value={currentPage}
          data-testid="page_input"
          onBlur={handlePageNumberBlur}
          onChange={handlePageNumberChange}
          onKeyDown={handlePageNumberKeyDown}
        />
        <span>de {page.totalPages}</span>
        <PaginationItem
          data-testid="angle_right"
          onClick={() => handleAngleChange(SUM_OPERATION)}
        >
          <FontAwesomeIcon icon="angle-right" />
        </PaginationItem>
      </PaginationItems>
    </PaginationContainer>
  );
};
