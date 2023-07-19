import * as C from './styled'

import { useStories } from '../../hooks/StoriesContext'


export const SearchForm = () => {
  const { query, handleSearch } = useStories()

    return (
        <C.Form onSubmit={(e) => e.preventDefault()}>
          <h2>Search Hacker News</h2>
          <input type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </C.Form>
    )
}