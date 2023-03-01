export interface IValue {
  title: string;
  description: string;
  status: boolean;
}

export interface ITask {
  value: IValue;
  handleChange: (e: any) => void;
}
