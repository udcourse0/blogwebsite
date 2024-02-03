import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

/* bubble and core also theme of css of react-quill */

const EditPosts = () => {
  const [title,setTitle] =useState('')
  const [category,setCategory] = useState('Uncategorised')
  const [description,setDescription] = useState('')
  const [thumbnail,setThumbnail] = useState('')


  const modules ={
    toolbar:[
      [{'header': [1, 2, 3,4,5,6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
  ]}
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  const POST_CATEGORIES = ["Uncategorized","Agriculture", "Business", "Education", "Entertainment", "Art", "Investment",  "Weather"]






  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit post</h2>
        <p className="form__error-message">This is an error message</p>
        <form action="" className="form create-post__form">
          <input type="text" name="" id="" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" id="" value={category} onChange={e => setCategory(e.target.value)} >
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
            <ReactQuill  theme='snow' modules={modules} formats={formats} value={description} onChange={setDescription} ></ReactQuill>
            <button type="submit" className='btn primary'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPosts



// react-quill 