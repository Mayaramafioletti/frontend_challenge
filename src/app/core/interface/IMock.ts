export interface ITasks {
  tasks: ITask[]
}

export interface ITask {
  id: number,
  name: string,
  username: string,
  title: string,
  value: number,
  date: string,
  image: string,
  isPayed: boolean
};

export interface ITaskEdit {
  id: number,
  name?: string,
  username: string,
  title?: string,
  value?: number,
  date?: string,
  image: string,
  isPayed: boolean
};

export interface IAccount {
  email: string,
  password: string
}
