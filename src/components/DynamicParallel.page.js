import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = heroId => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map(id => {
        return {
            queryKey: ['super-hero', id],
            queryFn: () => fetchSuperHero(id)
        }
        })
    )
    console.log(queryResults)
    return <>
        <h2>Dynamic Parallel Queries</h2>
        {queryResults!==[] && queryResults.map(result => (
            <p>{result?.data?.data?.name} - {result?.data?.data?.alterEgo}</p>
        ))}
    </>
}