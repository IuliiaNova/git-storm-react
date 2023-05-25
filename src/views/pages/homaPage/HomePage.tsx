import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../../UI/spinner/Spinner';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import { useContext, useState } from 'react';
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';
import './homePage.scss'

function HomePage() {
  const { content } = useContext(ContentContext)
  const { isLoading } = useAuth0()
  const [selectedType, setSelectedType] = useState('all')

  const filteredContent = selectedType === 'all' ? (content) : (content.filter(item => item.type === selectedType));

  const handleButtonClick = (type: any) => {
    setSelectedType(type)
  }

  return (
    <HelmetSEO
      title={'GIF STORM'}
      description='Gits y memes lovers'
    >
      <div className='homePage'>
        <div className='navbar-page__nav__filter'>
          <button
            className={`navbar-page__nav__filter--btn ${selectedType === 'all' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('all')}>#All</button>
          <button
            className={`navbar-page__nav__filter--btn ${selectedType === 'animals' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('animals')}>#Animals</button>
          <button
            className={`navbar-page__nav__filter--btn ${selectedType === 'wow' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('wow')}>#WoW</button>
          <button
            className={`navbar-page__nav__filter--btn ${selectedType === 'sport' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('sport')}>#Sport</button>
          <button className={`navbar-page__nav__filter--btn ${selectedType === 'reactions' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('reactions')}>#Reactions</button>
        </div>
      </div>
      {isLoading ? <Spinner /> : (<div><ItemListComponent content={filteredContent} /> </div>)}
    </HelmetSEO>
  )
}

export default HomePage