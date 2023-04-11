import { useGetTurboPostsQuery } from '@turbo-blog/turbo-posts-api'
import { Button } from '@turbo-blog/web-ui'
import {
  TurboPostsFilteredList,
  TurboPostsFilter,
} from 'containers/features/turbo-posts'
import Head from 'next/head'
import Link from 'next/link'

const TurboPosts = () => {
  const { data: postData, isLoading, isError } = useGetTurboPostsQuery()
  return (
    <>
      <Head>
        <title>Turbo Posts</title>
      </Head>
      <Button>
        <Link href="/turbo-posts-api/add">Add Turbo Post</Link>
      </Button>
      <h1>Turbo Posts</h1>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>An error has occurred!</div> : null}
      {postData && (
        <div>
          <TurboPostsFilter posts={postData} />
        </div>
      )}

      <TurboPostsFilteredList posts={postData} />
    </>
  )
}

export default TurboPosts
