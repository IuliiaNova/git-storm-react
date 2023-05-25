import { useState, useContext } from 'react';
import { Radio, Select, Space, RadioChangeEvent, SelectProps } from 'antd';
import './uploadPage.scss'
import ContentContext from '../../../context/contentContext/ContentContext';
import UserContext from '../../../context/UserContext';
import { message } from 'antd';
import '../../../sass/_variables.scss'
import HelmetSEO from '../../utils/HelmetSEO/HelmetSEO';

const UploadPage = () => {
  const { dbUser } = useContext(UserContext)
  const { postContent } = useContext(ContentContext)
  const [messageApi, contextHolder] = message.useMessage();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('animals');
  const [genre, setGenre] = useState('mem');

  //types
  const options: SelectProps<string>['options'] = [
    { value: 'animals', label: 'Animals' },
    { value: 'wow', label: 'Wow' },
    { value: 'sport', label: 'Sport' },
    { value: 'reactions', label: 'Reactions' }
  ];

  const success = () => {
      messageApi.open({
        content: 'You have submit new content successfully',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
          color: '#FF2CDF',
          fontWeight: 'bold',
          fontSize: '1.5rem',
        },
      })
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event: any) => {
    setUrl(event.target.value);
  };

  const handleTypeChange = (value: any) => {
    setType(value);
  };

  const onChange = (e: RadioChangeEvent) => {
    setGenre(e.target.value);
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (name && url && type && genre) {
      postContent(dbUser._id, name, url, type, genre)
    }
  };



  return (
    <HelmetSEO
      title={'Upload page'}
      description='Upload your own gifs and memes'
    >
    <div className='upload-page'>
      <h1 className='upload-page__h1'>Here you can submit new memes and gifs</h1>

      <form className='upload-page__form' onSubmit={handleSubmit}>

        <div className='upload-page__form__radio'>
          <span>Choose type:</span>
          <Radio.Group onChange={onChange} value={genre} className='upload-page__form__radio--form'>
            <Radio value={'mem'}>Meme</Radio>
            <Radio value={'gif'}>Gif</Radio>
          </Radio.Group>
        </div>

        <div className='upload-page__form__input'>
          <label htmlFor='name'>Enter name:</label>
          <input
            type='text'
            id='name'
            value={name}
            placeholder='Enter name'
            onChange={handleNameChange} />
        </div>

        <div className='upload-page__form__select'>
          <Space direction="vertical" style={{ width: '100%' }} className='space'>
            <label>Choose category: </label>
            <Select
              defaultValue="Wow"
              onChange={handleTypeChange}
              style={{ width: 265 }}
              options={options}

            />
          </Space>
        </div>

        <div className='upload-page__form__input'>

          <label htmlFor='url'>Choose file:</label>
          {/* <input
            type='file'
            id='url'
            placeholder='Add url'
          // value={url}
          // onChange={handleUrlChange} 
          />

          <span>or put URL: </span> */}

          <input
            type='text'
            id='url'
            placeholder='Enter URL'
            value={url}
            onChange={handleUrlChange} />

        </div>
        {contextHolder}
        <button type='submit' onClick={success}>Submit</button>
      </form>

    </div>
    </HelmetSEO>
  )
}
export default UploadPage

