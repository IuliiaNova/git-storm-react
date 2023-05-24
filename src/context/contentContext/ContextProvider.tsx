import { useReducer, useMemo, useEffect } from 'react'
import ContentContext from './ContentContext';
import initialContentState from './initialContextState';
import contentReducer from '../../reducer/content/content.reducer';
import { getAllContentAction } from '../../reducer/content/content.actions';
import { useAuth0 } from '@auth0/auth0-react'

export interface ChildrenProps {
  children: React.ReactNode
}

export default function ContentProvider(props: ChildrenProps) {

  const [contentState, dispatch] = useReducer(contentReducer, initialContentState)
  const { isLoading } = useAuth0()

  useEffect(() => {
    const getAllContent = async () => {
      if (!isLoading) {
        await getAllContentAction(dispatch)
      }
    }
    getAllContent()
  }, [isLoading])

  useEffect(() => {
    console.log(contentState.content);
  }, [contentState]);



  const memoProvider = useMemo(() => ({...contentState}), [contentState]);

  return (
    <ContentContext.Provider value={memoProvider}>
      {props.children}
    </ContentContext.Provider>
  )
}
