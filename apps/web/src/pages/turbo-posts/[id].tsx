import { GetStaticPaths } from 'next'
import { Postdata, TurboPost } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { ITurboPost } from '@turbo-blog/types'
import { useRouter } from 'next/router'

const Turbopost = () => {
  const router = useRouter()
  const { id } = router.query

  function handleClick() {
    router.push('/turbo-posts')
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Go Back </button>
      </div>

      {Postdata.map((post: ITurboPost) =>
        post.id.toString() === id.toString() ? (
          <TurboPost
            key={post.id}
            heading={post.heading}
            content={post.content}
            tags={post.tags}
          />
        ) : null,
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
