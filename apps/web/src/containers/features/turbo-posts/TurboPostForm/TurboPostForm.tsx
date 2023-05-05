import { Button } from '@turbo-blog/web-ui'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AddTurboPostRequestData } from '@turbo-blog/turbo-posts-api'
import { ErrorMessage } from '@hookform/error-message'

export interface ITurboPostFormProps {
  isLoading: boolean
  error?: string
  onSubmit: (data: AddTurboPostRequestData) => void
}

export const TurboPostForm: React.FC<ITurboPostFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      heading: '',
      content: '',
      tags: [''],
    },
  })
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ heading: '', content: '', tags: [''] })
    }
  }, [isSubmitSuccessful, reset])

  const handleSubmitForm: SubmitHandler<AddTurboPostRequestData> = ({
    heading,
    content,
    tags,
  }) => {
    const tagArr = tags?.toString().split(' ')
    alert('Heading:' + heading + ' Content: ' + content + ' Tags: ' + tags)
    onSubmit({ heading, content, tags: tagArr })
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label>Heading:</label>
        <input {...register('heading', { required: 'This is required.' })} />
        <ErrorMessage errors={errors} name="heading" />
        <br />
        <label>Tags</label>
        <input {...register('tags')} />
        <br />
        <label>Content:</label>
        <br />
        <textarea
          {...register('content')}
          name="content"
          id="content"
        ></textarea>

        <br />
        <Button onClick={handleSubmit(handleSubmitForm)}>submit</Button>
        {errors.heading ? (
          <ErrorMessage
            errors={errors}
            name="errorInput"
            render={({ message }) => <p>{message}</p>}
          />
        ) : null}
        {error ? <span>Could not add post</span> : null}
        {isLoading ? <span>Loading...</span> : null}
      </form>
    </>
  )
}
