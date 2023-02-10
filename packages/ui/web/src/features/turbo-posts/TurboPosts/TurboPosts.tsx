import React from 'react'
//import { ITurboPost } from '@turbo-blog/types'
import clsx from 'clsx'

export interface ITurboPostsProps {
  heading: string
  content: string
}

const headingClassName = clsx('text-lg', 'text-center')
const contentClassName = clsx('text-sm', 'text-center', 'margin-bottom:0px')

const contentboxClassName = clsx('h-60 w-40', 'border p-4')

export const TurboPosts: React.FC<ITurboPostsProps> = ({
  heading,
  content,
  ...rest
}) => {
  return (
    <>
      <article className={contentboxClassName}>
        <h1 className={headingClassName}>{heading}</h1>
        <p className={contentClassName}>{content}</p>
      </article>
    </>
  )
}
