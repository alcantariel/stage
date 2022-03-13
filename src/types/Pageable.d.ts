export interface Page {
  number: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  size: number;
  totalElements: number;
}

export interface PageRequest {
  number: number;
  size: number;
}
