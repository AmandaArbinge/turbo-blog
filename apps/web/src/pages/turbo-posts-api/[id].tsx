import { GetStaticPaths } from 'next'
import { TurboPost } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useGetTurboPostQuery } from '@turbo-blog/turbo-posts-api'

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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Turbopost
