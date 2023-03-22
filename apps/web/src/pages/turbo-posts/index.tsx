import { Postdata } from '@turbo-blog/web-ui'
import {
  TurboPostsFilteredList,
  TurboPostsFilter,
} from 'containers/features/turbo-posts'
import Head from 'next/head'

const TurboPosts = ({ posts }) => {
  return (
    <>
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
