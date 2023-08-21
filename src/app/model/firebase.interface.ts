export interface FirebaseDashboardDocument {
  createdTime: string;
  fields: {
    menu: {
      arrayValue: {
        values: StringValue[]
      }
    },
    tables: {
      arrayValue: {
        values: StringValue[]
      }
    }
  }
}
interface StringValue {
  stringValue: string;
}
