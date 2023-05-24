import {createContext} from 'react';
import initialContentState from './initialContextState';

const ContentContext = createContext(initialContentState)

export default ContentContext