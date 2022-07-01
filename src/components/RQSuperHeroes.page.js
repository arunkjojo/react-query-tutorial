import { useState } from 'react'
import {
  useAddSuperHeroData,
  useSuperHeroesData
} from '../hooks/useSuperHeroesData'
import { Link } from 'react-router-dom'

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const onSuccess = data => console.log({ data })

  const onError = error => console.log({ error })

  const { 
    isLoading, 
    data, 
    isError, 
    error, 
    refetch 
  } = useSuperHeroesData(
    onSuccess,
    onError
  )

  const { mutate: addHero } = useAddSuperHeroData()

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }

  if (isLoading)
    return <h2>Loading...</h2>;

  if (isError)
    return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <form>
        <label htmlFor='charector'>Type Charector Name : </label>
        <input
          id='charector'
          type='text'
          placeholder='Charactor Name'
          value={name}
          onChange={e => setName(e.target.value)}
        /><br />
        <label htmlFor='actor'>Type Actor Name : </label>
        <input
          id='actor'
          type='text'
          placeholder='Actor Name'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        /><br/>
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </form>
      <hr />
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              {hero.id} {hero.name}
            </Link>
          </div>
        )
      })}
    </>
  )
}