import { useReducer, useMemo, useEffect, useCallback, useContext, useState } from 'react'
import ContentContext from './ContentContext';
import initialContentState from './initialContextState';
import contentReducer from '../../reducer/content/content.reducer';
import { getAllContentAction, postContentAction } from '../../reducer/content/content.actions';
import { useAuth0 } from '@auth0/auth0-react'


export interface ChildrenProps {
  children: React.ReactNode
}

export default function ContentProvider(props: ChildrenProps) {

  const [contentState, dispatch] = useReducer(contentReducer, initialContentState)
  const { isLoading, isAuthenticated } = useAuth0()

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


  const postContent = useCallback(async (userId: string, name: string, url: string, type: string, genre: string) => {
    try {
      if (isAuthenticated) {
        await postContentAction(dispatch, userId, name, url, type, genre);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, isAuthenticated]);


  const memoProvider = useMemo(() => ({ 
    ...contentState, 
    postContent: postContent }), [contentState, postContent]);

  return (
    <ContentContext.Provider value={memoProvider}>
      {props.children}
    </ContentContext.Provider>
  )
}
