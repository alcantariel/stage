export interface Pageable {
  number: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  totalElements: number;
}

export interface Page {
  number: number;
  size: number;
}
