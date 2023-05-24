import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../../UI/spinner/Spinner';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';

function HomePage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()
  return (
    <>
    {isLoading ? <Spinner/> : (<div><ItemListComponent content={content}/> </div>)}
    </>
  )
}

export default HomePage