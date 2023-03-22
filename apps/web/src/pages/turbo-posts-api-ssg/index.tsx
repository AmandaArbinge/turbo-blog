import { wrapper } from '@turbo-blog/store'
import {
  getRunningNavigationOperationPromisesPost,
  getTurboPosts,
  useGetTurboPostsQuery,
} from '@turbo-blog/turbo-posts-api'
import {
  TurboPostsFilteredList,
  TurboPostsFilter,
} from 'containers/features/turbo-posts'
import Head from 'next/head'

const TurboPosts = () => {
  const { data: postData, isLoading, isError } = useGetTurboPostsQuery()
  return (
    <>
      <Head>
        <title>Turbo Posts</title>
      </Head>
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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getTurboPosts.initiate())

  await Promise.all(getRunningNavigationOperationPromisesPost())

  return {
    props: {}, // Return empty props. The data is in the store now.
  }
})

export default TurboPosts
