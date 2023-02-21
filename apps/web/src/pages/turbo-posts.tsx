import { Postdata, TurboPostList } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ITurboPost } from '@turbo-blog/types'

const TurboPosts = ({ posts }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Turbo Posts</title>
      </Head>
      <h1>Turbo Posts</h1>
      <TurboPostList
        posts={posts}
        emptyMessage={'No posts :/'}
        onClick={(post) => router.push(`${router.pathname}/${post.id}`)}
      />
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
