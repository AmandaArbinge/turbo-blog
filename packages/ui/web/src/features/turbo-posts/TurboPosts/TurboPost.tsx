import React from 'react'
import clsx from 'clsx'

export interface ITurboPostProps {
  heading: string
  content: string
  tags?: string[]
}

const headingClassName = clsx('text-lg', 'text-center')
const contentClassName = clsx('text-sm', 'text-center', 'margin-bottom:0px')
const tagsClassName = clsx('text-sm', 'text-center', 'font-semibold')

const contentboxClassName = clsx('h-100 w-60', 'border p-4')

export const TurboPost: React.FC<ITurboPostProps> = ({
  heading,
  content,
  tags,

  ...rest
}) => {
  return (
    <>
      <article className={contentboxClassName}>
        <h1 className={headingClassName}>{heading}</h1>
        <p className={contentClassName}>{content}</p>
        <p className={tagsClassName}>{tags}</p>
      </article>
    </>
  )
}
