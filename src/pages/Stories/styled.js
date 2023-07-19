import styled from 'styled-components'

export const SectionStories = styled.section`
  width: 90vw;
  margin-bottom: 5rem;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  max-width: 1170px;
  background-color: #11395A;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 95vw;
  }
`
export const ArticleStory = styled.article`
  background: white;
  border-radius: 0.25px;
  padding: 1rem 2rem;

  h4 {
    line-height: 1.5;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: hsl(210, 22%, 49%);
  }
`
export const Link = styled.a`
  font-size: 0.85rem;
  margin-right: 0.75rem;
  text-transform: capitalize;
  text-decoration: none;
  color: hsl(205, 78%, 60%);;
`
export const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: hsl(205, 78%, 60%);
  animation: spinner 0.6s linear infinite;
`
export const RemoveButton = styled.button`
  background: transparent;
  color: hsl(360, 67%, 44%);
  border-color: transparent;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 0.85rem;
`