import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../../UI/spinner/Spinner';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';
import './contentPage.scss'

function MyContentPage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()
  const {dbUser} = useContext(UserContext)

  const filtredContent = content.filter((item) => dbUser._id == item.userId)


  return (
    <HelmetSEO
      title={'My collection page'}
      description='See your collection of memes and gifs'
    >
    {isLoading ? <Spinner/> : (<div className='content-page'><ItemListComponent content={filtredContent}/> </div>)}
    </HelmetSEO>
  )
}

export default MyContentPage