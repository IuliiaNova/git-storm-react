import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../../UI/spinner/Spinner';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

function MyContentPage() {
  const { content } = useContext(ContentContext)
  const {isLoading} = useAuth0()
  const {dbUser} = useContext(UserContext)

  const filtredContent = content.filter((item) => dbUser._id == item.userId)


  return (
    <>
    {isLoading ? <Spinner/> : (<div><ItemListComponent content={filtredContent}/> </div>)}
    </>
  )
}

export default MyContentPage