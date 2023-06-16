import React from 'react'
import '../index.css'

export default function EditableShowRow({editedFormData, handleEditFormChange}) {

  //to be able to type in the input field it had to be default value, not value

  

  return (
    <>
      <tr>
       <td>
          <input 
          type='text'
          defaultValue={editedFormData.title}
          name='title' 
          required='required' 
          placeholder='Enter A Title'
          onChange={handleEditFormChange}
        />
       </td>
       <td>
          <input 
          type='text'
          defaultValue={editedFormData.genre}
          name='Genre' 
          required='required' 
          placeholder='Enter A Genre'
          onChange={handleEditFormChange}
          />
        </td>
      <td>
        <input 
          type='text' 
          defaultValue={editedFormData.seasons}
          name='Seasons' 
          required='required' 
          placeholder='Enter the number of seasons'  
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input 
          type='text' 
          defaultValue={editedFormData.episodes}
          name='Episodes' 
          required='required' 
          placeholder='Enter the number of episodes'
          onChange={handleEditFormChange}
        />
      </td>
     <td>
      <input 
        type='text' 
        defaultValue={editedFormData.language}
        name='Lanuage' 
        required='required' 
        placeholder='Enter the original Language'
        onChange={handleEditFormChange}
      />
     </td>
     {/* need to get the show.id and save it into state. this is why we're passing show.  */}
      <td><button type='submit'>Save</button></td>
    </tr>
    </>
  )
}
