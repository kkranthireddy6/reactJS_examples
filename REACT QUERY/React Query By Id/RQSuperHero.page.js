
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../components/hooks/useSuperHeroData'
import axios from 'axios'
import { useQuery } from 'react-query'

export const RQSuperHeroPage = () => {

    const fetchSuperHero = (todoId) => {
        // const todoId = queryKey[1]
        return axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    }

    const { todoId } = useParams()
    const { isLoading, data, isError, error } = useQuery(['super-hero', todoId], () => fetchSuperHero(todoId))

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    
    return (
        <div style={{ 'textAlign': 'center' }}>
            id: {data.data.id} - title: {data.data.title}
        </div>
    )
}
