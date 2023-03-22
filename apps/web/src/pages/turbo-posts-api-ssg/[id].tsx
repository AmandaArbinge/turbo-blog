import { TurboPost } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  getTurboPost,
  getTurboPosts,
  useGetTurboPostQuery,
  getRunningNavigationOperationPromisesPost,
} from '@turbo-blog/turbo-posts-api'
import { makeStore, wrapper } from '@turbo-blog/store'

const Turbopost = () => {
  const router = useRouter()

  const { id } = router.query
  const { data: post, isLoading, isError } = useGetTurboPostQuery(id as string)

  function handleClick() {
    router.push('/turbo-posts')
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Go Back </button>
      </div>

      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>An error has occurred!</div> : null}
      {post && (
        <TurboPost
          key={post.id}
          heading={post.heading}
          content={post.content}
          tags={post.tags}
        />
      )}

      <Head>
        <title>{id}</title>
      </Head>
    </>
  )
}

export async function getStaticPaths() {
  const store = makeStore()

  const result = await store.dispatch(getTurboPosts.initiate())
  const paths = result.data.map((p) => ({
    params: {
      id: p.id.toString(),
    },
  }))

  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = context.params?.id

    // use actions from the slice to get the blog post
    if (typeof id === 'string') {
      store.dispatch(getTurboPost.initiate(id.toString()))
    }

    await Promise.all(getRunningNavigationOperationPromisesPost())

    return {
      props: {}, // Return empty props. The data is in the store now.
    }
  },
)

export default Turbopost
