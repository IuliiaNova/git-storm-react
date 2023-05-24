import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import Spinner from '../../UI/spinner/Spinner';
import { getItemByIdApi, deleteItemByIdApi } from '../../../api/content/content.api';
import { useAuth0 } from '@auth0/auth0-react';
import ItemListComponent from '../../components/ItemsList/ItemListComponent';
import ContentContext from '../../../context/contentContext/ContentContext';
import './itemPage.scss'
import UserContext from '../../../context/UserContext';
import { IoHeartOutline, IoHeart, IoPaperPlaneOutline, IoTrash } from "react-icons/io5";
import { message } from 'antd';

function ItemPage() {
  const { id } = useParams<{ id: string }>();
  const { isLoading } = useAuth0();
  const [item, setItem] = useState<any>({});
  const { content } = useContext(ContentContext)
  const { dbUser } = useContext(UserContext)
  const [like, setLike] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {

    const getItem = async () => {
      try {
        const response = await getItemByIdApi(id);
        setItem(response.content);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  const filtredContent = content.filter((it) => it.type === item.type)
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'URL copied',
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },

    });
  };
  const handleShare = () => {
    navigator.clipboard.writeText(item.url);
    success()
  }

  const handleDelete = async () => {
    try {
      await deleteItemByIdApi(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='itemPage'>
      <div className='itemPage__content'>
        <h1>{item?.name}</h1>
        <img src={item?.url} alt={item?.name} />
        <div className='itemPage__content__btn'>
          <p>by: {dbUser.nickname}</p>
          {contextHolder}
          <button className='itemPage__content__btn--like' onClick={()=> setLike(!like)}>{like ? <IoHeart /> : <IoHeartOutline />}</button>
          <button className='itemPage__content__btn--share' onClick={handleShare}><IoPaperPlaneOutline /></button>
          <button className='itemPage__content__btn--trash' onClick={handleDelete}><IoTrash/></button>
        </div>

      </div>
      <div className='itemPage__rec'>
        <span className='itemPage__rec--span'>You'll like it:</span>
        <ItemListComponent content={filtredContent} />
      </div>
    </div>
  );
}

export default ItemPage;