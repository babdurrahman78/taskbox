export interface ITaskProps {
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_PINNED" | "TASK_INBOX";
}

export interface ITaskWrapperProps {
  /**
   * Value for task property
   *
   * @default null
   */
  task: ITaskProps;

  /**
   * Buat ngarsip
   */
  onArchiveTask: (value: string) => void;

  /**
   * Kalo dipin
   */
  onPinTask: (value: string) => void;
}

export interface ITaskListProps {
  /**
   * check if it's in loading state
   *
   * @default false
   */
  loading: boolean;

  /**
   * list of task
   *
   * @default null
   */
  tasks: ITaskProps[];

  /**
   * Action onPinTask
   */
  onPinTask: (value: string) => void;

  /**
   * Action onPinTask
   */
  onArchiveTask: (value: string) => void;
}

export interface ITaskBoxDataProps {
  task: ITaskProps[];
  status: string;
  error: any;
}
