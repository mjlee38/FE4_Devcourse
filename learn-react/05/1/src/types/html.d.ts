type InputType =
  | "number"
  | "search"
  | "button"
  | "time"
  | "image"
  | "text"
  | "hidden"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "password"
  | "reset"
  | "submit"
  | "tel"
  | "url"
  | "week";

type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;
