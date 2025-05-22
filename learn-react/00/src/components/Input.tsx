import { forwardRef } from "react";

type InputProps = React.ComponentPropsWithRef<"input">;
export default forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const { ...rest } = props;
  return (
    <>
      <input ref={ref} {...rest} />
    </>
  );
});
