import axios from "axios"
import { useQuery } from "react-query"

export const RQSuperHeroesPage = () => {

  const fetchTodos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
  }

  const props = {refetchOnMount: true, refetchOnWindowFocus: true, refetchInterval: 2000, refetchIntervalInBackground: true} 
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('todos', fetchTodos, 
    {enabled: false}
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Refetch Query Data</button>
      {
        data?.data.map(todo => { 
            return <div key={todo.id} style={{"textAlign": "center"}}>{todo.title}</div> 
      })}
    </>
  )
}