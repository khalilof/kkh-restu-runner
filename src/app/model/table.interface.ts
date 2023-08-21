export enum TableStatus {
  AVAILABLE = 'available',
  ORDERED = 'ordered',
  FINISHED = 'finished',
  PAID = 'paid',
  ORDERING = 'ordering',
  CLEANING = 'cleaning',
}

export interface ITable {
  id: string;
  status: TableStatus;
  notify?: boolean;
  currentOrder?: string;
}

export const MOCK_TABLES: ITable[] = [
  {
    id: '1',
    status: TableStatus.FINISHED,
  },
  {
    id: '2',
    status: TableStatus.ORDERING,
  },
  {
    id: '3',
    status: TableStatus.AVAILABLE,
  },
  {
    id: '4',
    status: TableStatus.AVAILABLE,
  },
  {
    id: '5',
    status: TableStatus.AVAILABLE,
  },
  {
    id: '6',
    status: TableStatus.AVAILABLE,
  },
  {
    id: '7',
    status: TableStatus.CLEANING,
  },
  {
    id: '8',
    status: TableStatus.ORDERING,
  },
  {
    id: '9',
    status: TableStatus.ORDERED,
  },
  {
    id: '10',
    status: TableStatus.CLEANING,
  },
  {
    id: '11',
    status: TableStatus.PAID,
  },
  {
    id: '12',
    status: TableStatus.PAID,
  }
];
