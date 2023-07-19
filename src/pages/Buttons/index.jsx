import * as C from './styled'

import { useStories } from '../../hooks/StoriesContext'

export const Buttons = () => {
    const { isLoading, page, nbPages, handlePage } = useStories()

    return (
        <C.ButtonContainer>
                <button disabled={isLoading} onClick={() => handlePage('dec')}>
                    prev
                </button>
                <p>
                    {page + 1} of {nbPages}
                </p>
                <button disabled={isLoading} onClick={() => handlePage('inc')}>
                    next
                </button>
        </C.ButtonContainer>
    )
}