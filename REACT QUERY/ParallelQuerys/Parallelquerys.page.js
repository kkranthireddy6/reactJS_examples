import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
}

const fetchFriends = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
}


export const ParallelQuerysPage = () => {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)
    console.log(superHeroes, friends)
    
    return (
        <div>
            <h2>ParallelQuerysPage</h2>
        </div>
    )
}