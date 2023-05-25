import { useAuth0 } from '@auth0/auth0-react';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';
import './memepage.scss'

function MemesPage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()

  const filtredContent = content.filter((item) => item.genre === 'mem')

  return (
    <HelmetSEO
      title={'Memes page'}
      description='Best Memes collection'
    >
    {isLoading ? <Spinner/> : (<div className='memes-page'><ItemListComponent content={filtredContent}/> </div>)}
    </HelmetSEO>
  )
}

export default MemesPage