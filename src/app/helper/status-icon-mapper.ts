import { TableStatus } from '../model/table.interface';

export const statusToIconMap = new Map<TableStatus, string>([
  [TableStatus.AVAILABLE, 'event_available'],
  [TableStatus.ORDERED, 'cooking'],
  [TableStatus.ORDERING, 'edit_note'],
  [TableStatus.FINISHED, 'done'],
  [TableStatus.CLEANING, 'cleaning_services'],
  [TableStatus.PAID, 'paid']
]);


export const statusToDescriptionMap = new Map<TableStatus, string>([
  [TableStatus.AVAILABLE, 'Table is ready for use'],
  [TableStatus.ORDERED, 'Guests are waiting for food to be ready.'],
  [TableStatus.ORDERING, 'Guests are ordering and Waiter is taking notes.'],
  [TableStatus.FINISHED, 'Guests are eating and have been served.'],
  [TableStatus.CLEANING, 'Table is being cleaned and prepared for usage.'],
  [TableStatus.PAID, 'Guests have paid for their meal.']
]);
