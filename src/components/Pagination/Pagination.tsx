import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken, lighten } from 'polished';
import { useState } from 'react';
import styled from 'styled-components';
import { Page, Pageable } from 'types';

interface PaginationItemProps {
  active?: boolean;
}

const PaginationContainer = styled.div`
  display: flex;
  height: 3rem;
`;

const PaginationItem = styled.div<PaginationItemProps>`
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.primary : props.theme.infoColor};
  border-radius: 4px;
  color: ${props =>
    props.active ? props.theme.disabledColor : props.theme.textColor};
  display: flex;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  margin: 0 4px;
  width: 30px;

  :hover {
    background-color: ${props =>
      props.active
        ? lighten('.05', props.theme.primary)
        : darken('.1', props.theme.boxShadowHoverColor)};
    cursor: pointer;
  }

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const PageCounter = styled.small`
  font-size: 12px;
  margin-left: -2.35rem;
  margin-top: 2rem;
`;

export interface PaginationProps {
  page: Pageable;
  onChangePage: (page: Page) => void;
}

// TODO: o número atual da página deverá ser clicavel/editável, para navegação nas páginas
export const Pagination = (props: PaginationProps) => {
  const { page, onChangePage } = props;

  const [currentPageNumber, setCurrentPageNumber] = useState(page.number);

  const handlePageChange = (next: number): void => {
    if (next === currentPageNumber || next < 1 || next > page.totalPages) {
      return;
    }

    setCurrentPageNumber(next);
    onChangePage({ number: next, size: page.size });
  };

  return (
    <PaginationContainer>
      <PaginationItem onClick={() => handlePageChange(1)}>
        <FontAwesomeIcon icon="angle-double-left" />
      </PaginationItem>
      <PaginationItem onClick={() => handlePageChange(currentPageNumber - 1)}>
        <FontAwesomeIcon icon="angle-left" />
      </PaginationItem>
      <PaginationItem active>{currentPageNumber}</PaginationItem>
      <PaginationItem onClick={() => handlePageChange(currentPageNumber + 1)}>
        <FontAwesomeIcon icon="angle-right" />
      </PaginationItem>
      <PaginationItem onClick={() => handlePageChange(page.totalPages)}>
        <FontAwesomeIcon icon="angle-double-right" />
      </PaginationItem>
      <PageCounter>
        {currentPageNumber} de {page.totalPages}
      </PageCounter>
    </PaginationContainer>
  );
};
