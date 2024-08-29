'use client';

import clsx from 'clsx';

interface InputProps {
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  errors?: any;
  label?: any;
}

export const Input: React.FC<InputProps> = ({
  wrapperProps = {},
  labelProps = {},
  inputProps = {},
  errors,
  label,
  ...props
}) => {
  const { className: wrapperClassName, ..._wrapperProps } = wrapperProps;
  const { className: labelClassName, ..._labelProps } = labelProps;
  const { className: inputClassName, ..._inputProps } = inputProps;
  return (
    <div
      className={clsx('w-full relative', wrapperClassName)}
      {..._wrapperProps}
    >
      <input
        className={clsx(
          'peer w-full px-4 pt-6 pb-1 font-light bg-white border rounded-lg outline-none transition disabled:opacity-70 disabled:cursor-not-allowed placeholder-transparent pl-4',
          errors ? 'border-rose-500' : 'border-neutral-300',
          errors ? 'focus:border-rose-500' : 'focus:border-black'
        )}
        placeholder="john"
        {..._inputProps}
        {...props}
      />
      <label
        className={clsx(
          'absolute text-base font-light duration-150 transform-translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
          errors ? 'text-rose-500' : 'text-zinc-400'
        )}
        {..._labelProps}
      >
        {label}
      </label>
    </div>
  );
};
