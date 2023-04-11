import { Button, Postdata } from '@turbo-blog/web-ui'
import {
  TurboPostsFilteredList,
  TurboPostsFilter,
} from 'containers/features/turbo-posts'
import Head from 'next/head'
import Link from 'next/link'

const TurboPosts = ({ posts }) => {
  return (
    <>
      <Button>
        <Link href="/turbo-posts-api/add">Add Turbo Post</Link>
      </Button>

      <Head>
        <title>Turbo Posts</title>
      </Head>
      <h1>Turbo Posts</h1>
      <div>
        <TurboPostsFilter posts={posts} />
      </div>
      <TurboPostsFilteredList posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: Postdata,
    },
  }
}

export default TurboPosts
