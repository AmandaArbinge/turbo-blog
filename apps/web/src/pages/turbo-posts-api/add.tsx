import Head from 'next/head'
import React from 'react'
import { TurboPostForm } from '@turbo-blog/web-ui'
import { useAddTurboPostMutation } from '@turbo-blog/turbo-posts-api'
import Link from 'next/link'

const AddTurboPost = () => {
  const [addTurboPost, { isLoading, error }] = useAddTurboPostMutation()

  return (
    <>
      <button>
        <Link href="/turbo-posts-api">Back</Link>
      </button>
      <h1>Add Turbo Post</h1> <br />
      <TurboPostForm
        emptyMessage={'No posts'}
        isLoading={isLoading}
        onSubmit={addTurboPost}
        error={JSON.stringify(error)}
      ></TurboPostForm>
      <Head>
        <title>Add</title>
      </Head>
    </>
  )
}
export default AddTurboPost
