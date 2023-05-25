import { useAuth0 } from '@auth0/auth0-react';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';

function GifsPage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()

  const filtredContent = content.filter((item) => item.genre === 'gif')

  return (
    <HelmetSEO
      title={'Gifs page'}
      description='Best Gifs collection'
    >
    {isLoading ? <Spinner/> : (<div><ItemListComponent content={filtredContent}/> </div>)}
    </HelmetSEO>
  )
}

export default GifsPage