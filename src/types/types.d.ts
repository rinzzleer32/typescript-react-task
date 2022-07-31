
export interface List{
    id: string
    text: string
    date: string,
    isDone: boolean,
    country?: {
      name: string,
      capital: string
    },
  }

  export type TodoAction = |{
    type: "add",
    payload: {
        text: string;
    }
  }|{
    type: "delete" | "update",
    payload: {
        id: string
    }
  }