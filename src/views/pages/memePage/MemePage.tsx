import { useAuth0 } from '@auth0/auth0-react';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';

function MemesPage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()

  const filtredContent = content.filter((item) => item.genre === 'mem')

  return (
    <>
    {isLoading ? <Spinner/> : (<div><ItemListComponent content={filtredContent}/> </div>)}
    </>
  )
}

export default MemesPage