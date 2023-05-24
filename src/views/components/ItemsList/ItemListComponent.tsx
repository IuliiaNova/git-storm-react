import ItemComponent from '../Item/ItemComponent'
import './itemListComponent.scss'

function ItemListComponent({content}: any) {
  

  return (
    <div className='item-list'>
       {content && 
      content.map((item: any) => <ItemComponent key={item._id} _id={item._id} url={item.url} userId={item.userId}/>)} 

    </div>
  )
}

export default ItemListComponent