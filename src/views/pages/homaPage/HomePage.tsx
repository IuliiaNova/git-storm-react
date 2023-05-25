import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../../UI/spinner/Spinner';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';

function HomePage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()

  return (
    <HelmetSEO
      title={'GIF STORM'}
      description='Gits y memes lovers'
    >
    {isLoading ? <Spinner/> : (<div><ItemListComponent content={content}/> </div>)}
    </HelmetSEO>
  )
}

export default HomePage