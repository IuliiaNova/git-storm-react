import './searchResults.scss'
import { Link } from 'react-router-dom'

const SearchResultComponent = ({ content }: any) => {

  return (
    <div className='results-container'>
      <div className='results-container__content'>
        {content.length >0 ? (content.map((item: any) => (
          <Link to={`/memes/${item._id}`} className=''>
        <div key={item._id}>
          <p>{item.name}</p>
         <hr /> 
        </div> 
        </Link>
      ))) : (<p>Oops. no match...</p>)}
      </div>
    </div>
  )
}

export default SearchResultComponent