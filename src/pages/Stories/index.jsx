import * as C from './styled'

import { useStories } from '../../hooks/StoriesContext'


export const Stories = () => {

    const { isLoading, hits, removeStory } = useStories()

    if (isLoading) {
        return <C.Loading></C.Loading>
    }

    
    return (
        <C.SectionStories>
            {hits.map((story) => {
                const { objectID, title, num_comments, url, points, author } = story
                
                return (
                    <C.ArticleStory key={objectID}>
                        <h4>{title}</h4>
                        <p>
                            {points} points by <span>{author} | </span> {num_comments}{' '}
                            comments
                        </p>
                        <div>
                            <C.Link
                             href={url}
                             target='_blank'
                             rel='noopener noreferrer'
                            >
                                read more
                            </C.Link>
                            <C.RemoveButton
                              onClick={() => removeStory(objectID)}
                            >
                              remove
                            </C.RemoveButton>
                        </div>
                    </C.ArticleStory>
                )
            })}
        </C.SectionStories>
    )
}