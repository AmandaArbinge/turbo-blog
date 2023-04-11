import { TextInput } from '../../../common'
import React, { useEffect } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { AddTurboPostRequestData } from '@turbo-blog/turbo-posts-api'

export interface ITurboPostFormProps {
  emptyMessage: string
  isLoading: boolean
  error?: string
  onSubmit: (data: AddTurboPostRequestData) => void
}

export const TurboPostForm: React.FC<ITurboPostFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      heading: '',
      content: '',
      tags: [''],
    },
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ heading: '', content: '', tags: [''] })
    }
  }, [formState, reset])

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
        <Controller
          name="heading"
          control={control}
          render={({ field }) => (
            <TextInput required={true} label={'Heading'} {...field} />
          )}
        />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TextInput required={false} label={'Tags'} {...field} />
          )}
        />
        <label>Content:</label>
        <br />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <textarea required={true} id="Content" {...field}></textarea>
          )}
        />
        <br />
        <button
          className={'border rounded-md'}
          onClick={handleSubmit(handleSubmitForm)}
        >
          submit
        </button>

        {isLoading ? <div>Loading...</div> : null}

        {error ? <div>An error has occurred!</div> : null}
      </form>
    </>
  )
}
