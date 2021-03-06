import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';
import {
  Children,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
  TableHTMLAttributes,
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';
import { applyHover } from 'theme';
import { Direction, Sort } from 'types';

import { Column, ColumnProps } from './Column';
import { getNextDirection, icons, getInitialSort } from './TableUtils';

interface Header<N> {
  name?: N;
  header?: ReactNode;
}

interface Data<T> {
  width?: string;
  data: (value: T, index: number) => ReactNode;
}

export interface TableProps<T, N>
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  ref?: any;
  values: T[];
  defaultSort?: Sort<N>;
  emptyMessage?: string;
  children: ReactElement<ColumnProps<T, N>> | ReactElement<ColumnProps<T, N>>[];
  keyExtractor: (value: T, index: number) => string;
  onSort?: (name: N, direction: Direction) => void;
}

const StyledTable = styled.table`
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-collapse: separate;
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
  border-spacing: 0;
  color: ${props => props.theme.textColor};
  width: 100%;
  text-align: left;

  thead,
  tbody {
    tr {
      line-height: 25px;

      th,
      td {
        vertical-align: middle;
      }
    }
  }

  thead {
    tr {
      th {
        border-color: ${props => props.theme.borderColor};
        border-width: 0 1px 2px 0;
        border-style: solid;
        color: ${props => props.theme.textColor};
        padding: 4px;
        
        svg {
          cursor: pointer;
          height: 12px;
          user-select: none;
          vertical-align: 0;
        }

        :last-child {
          border-right-width: 0;
        }
      }
    }
  }

  tbody {
    tr {
      div {
        visibility: hidden;
      }

      :hover {
        div {
          visibility: visible;
        }
      }

      td {
        padding: 4px 0 4px 8px;

        :last-child {
          width: 120px;
        }
      }

      :last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }

          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }

      :nth-child(even) {
        background-color: ${props =>
          darken('.03', props.theme.backgroundColor)}};

        :hover {
          background-color: ${props =>
            applyHover(props.theme.backgroundColor)}};
          transition: all 0.2s linear;
        }
      }
    }
  }
`;

const StyledEmptyMessage = styled.tr`
  text-align: center;
`;

export const Table = <T,>(props: TableProps<T, keyof T>) => {
  type ColumnProps = keyof T;

  const {
    values,
    children,
    emptyMessage = 'Table is empty',
    defaultSort = getInitialSort<ColumnProps>(),
    onSort,
    keyExtractor,
    ...rest
  } = props;

  const [sort, setSort] = useState(defaultSort);
  const [ths, tds] = useMemo(() => {
    const ths: Header<ColumnProps>[] = [];
    const tds: Data<T>[] = [];

    Children.forEach(children, child => {
      const { data, header, hidden, name, width } = child.props;

      if (!hidden) {
        tds.push({ data, width });
        ths.push({ header, name });
      }
    });

    return [ths, tds];
  }, [children]);

  const handleSort = (name: ColumnProps): void => {
    setSort(prevSort => {
      const direction = getNextDirection(prevSort, name);

      onSort?.(name, direction);

      return {
        name,
        direction
      };
    });
  };

  return (
    <StyledTable {...rest}>
      <thead>
        <tr>
          {ths.map((th: Header<ColumnProps>, index: number) => {
            const thKey = `${th.header}_${index}`;
            const direction = th.name === sort.name ? sort.direction : 'sort';

            return (
              <th key={thKey} data-testid={thKey}>
                {th.name && onSort && (
                  <FontAwesomeIcon
                    icon={icons[direction]}
                    onClick={() => handleSort(th.name as ColumnProps)}
                    data-testid={`${thKey}_${direction}`}
                  />
                )}{' '}
                {th.header}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {values.length > 0 ? (
          values.map((value: T, index: number) => {
            const extractedKey = keyExtractor(value, index);

            return (
              <tr key={extractedKey}>
                {tds.map((td: Data<T>, tdIndex: number) => {
                  const tdKey = `${extractedKey}_${tdIndex}`;

                  return (
                    <td key={tdKey} data-testid={tdKey} width={td.width}>
                      {td.data(value, index)}
                    </td>
                  );
                })}
              </tr>
            );
          })
        ) : (
          <StyledEmptyMessage>
            <td colSpan={12} data-testid="empty-message">
              {emptyMessage}
            </td>
          </StyledEmptyMessage>
        )}
      </tbody>
    </StyledTable>
  );
};

Table.Column = Column;
