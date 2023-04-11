import clsx from 'clsx'
import { Path, useForm } from 'react-hook-form'

interface IFormValues {
  Heading: string
  Tags: string[]
}
export interface ITextInputProps {
  label: Path<IFormValues>
  required: boolean
}

export const TextInput: React.FC<ITextInputProps> = ({
  label,
  required,
  ...rest
}) => {
  const { register } = useForm<IFormValues>()

  const formClassName = clsx('border rounded-md')
  return (
    <>
      <label>{label}</label>
      <input
        className={formClassName}
        {...register(label, { required })}
        {...rest}
      />
      <br />
    </>
  )
}
