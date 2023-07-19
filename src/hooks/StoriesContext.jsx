import { createContext, useContext, useEffect, useReducer } from 'react'

import propTypes from 'prop-types'

import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
  } from '../actions'

import reducer from '../reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0,
}

const StoriesContext = createContext({})

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING })

        try {
            const response = await fetch(url)
            const data = await response.json()
            dispatch({
                type: SET_STORIES,
                payload: { hits: data.hits, nbPages: data.nbPages },
            })
        } catch (error) {
            console.log(error)
        }
    }

    const removeStory = (id) => {
        dispatch({ type: REMOVE_STORY, payload: id })
    }
    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query })
    }
    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: value })
    }

    useEffect (() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <StoriesContext.Provider
          value={{ ...state, removeStory, handleSearch, handlePage}}
        >
            { children }
        </StoriesContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStories = () => {
    const context = useContext(StoriesContext)
  
    if (!context) {
      throw new Error('useStories must be used with StoriesContext')
    }
  
    return context
  }

export { StoriesContext, AppProvider}

AppProvider.propTypes = {
    children: propTypes.node
  }