import { useState } from 'react';
import { Radio, Select, Space, RadioChangeEvent, SelectProps } from 'antd';
import './uploadPage.scss'

const UploadPage = () => {
  const [value, setValue] = useState('meme');


  const options: SelectProps<string>['options'] = [
    { value: 'animals', label: 'Animals' },
    { value: 'wow', label: 'Wow' },
    { value: 'sport', label: 'Sport' },
    { value: 'reactions', label: 'Reactions' }
  ];

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };



  return (
    <div className='upload-page'>
      <h1 className='upload-page__h1'>Here you can submit new memes and gifs</h1>

      <form className='upload-page__form'>

        <div className='upload-page__form__radio'>
          <span>Choose type:</span>
          <Radio.Group onChange={onChange} value={value} className='upload-page__form__radio--form'>
            <Radio value={'meme'}>Meme</Radio>
            <Radio value={'gif'}>Gif</Radio>
          </Radio.Group>
        </div>

        <div className='upload-page__form__input'>
          <label htmlFor='name'>Enter name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter name' />
        </div>

        <div className='upload-page__form__select'>
          <Space direction="vertical" style={{ width: '100%' }} className='space'>
            <label>Choose category: </label>
            <Select
              mode="multiple"
              // size={size}
              placeholder="Please select"
              defaultValue={['wow']}
              onChange={handleChange}
              style={{ width: '120%' }}
              options={options}
            />
          </Space>
        </div>

        <div className='upload-page__form__input'>
          <label htmlFor='file'>Choose file:</label>
          <input
            type='file'
            id='file'
            placeholder='Enter name' />
            <label htmlFor='file'>or Put url:</label>
          <input
            type='text'
            id='url'
            placeholder='Add url' />
        </div>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}
export default UploadPage

