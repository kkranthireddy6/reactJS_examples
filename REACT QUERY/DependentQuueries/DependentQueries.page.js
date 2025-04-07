import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = userId => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
}

const fetchCoursesByChannelId = channelId => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${channelId}`)
}

export const DependentQueriesPage = ({ userId }) => {
  const { data: user } = useQuery(['user', userId], () =>
    fetchUserByEmail(userId)
  )
  const channelId = user?.data?.id
  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId
  })
  return <div>DependentQueries</div>
}import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = userId => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
}

const fetchCoursesByChannelId = channelId => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${channelId}`)
}

export const DependentQueriesPage = ({ userId }) => {
  const { data: user } = useQuery(['user', userId], () =>
    fetchUserByEmail(userId)
  )
  const channelId = user?.data?.id
  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId
  })
  return <div>DependentQueries</div>
}