import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export const ParallelQueriesPage = () => {
    const { data: superHeroes } = useQuery(
        'super-heroes', 
        fetchSuperHeroes
    )

    const { data: friends } = useQuery(
        'friends', 
        fetchFriends
    )
    
    return <>
        <h2>Parallel Queries</h2>
        <div>
            <h5>Super Heroes</h5>
            {superHeroes?.data.map(hero => (
                <div key={hero?.id}>{hero?.name}</div>
            ))}
        </div>
        <div>
            <h5>My Friends</h5>
            {friends?.data?.map(friend => (
                <div key={friend?.id}>{friend?.name}</div>
            ))}
        </div>
    </>
}