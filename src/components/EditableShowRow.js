import React from 'react'
import '../index.css'

export default function EditableShowRow({editedFormData, handleEditFormChange}) {


  
  return (
    <>
      <tr>
       <td>
          <input 
          type='text'
           value={editedFormData.title}
          name='title' 
          required='required' 
          placeholder='Enter A Title'
          onChange={handleEditFormChange}
        />
       </td>
       <td>
          <input 
          type='text'
          value={editedFormData.genre}
          name='Genre' 
          required='required' 
          placeholder='Enter A Genre'
          onChange={handleEditFormChange}
          />
        </td>
      <td>
        <input 
          type='text' 
          value={editedFormData.seasons}
          name='Seasons' 
          required='required' 
          placeholder='Enter the number of seasons'  
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input 
          type='text' 
          value={editedFormData.eps}
          name='Episodes' 
          required='required' 
          placeholder='Enter the number of episodes'
          onChange={handleEditFormChange}
        />
      </td>
     <td>
      <input type='text' 
       value={editedFormData.language}
        name='Lanuage' 
        required='required' 
        placeholder='Enter the original Language'
        onChange={handleEditFormChange}
      />
     </td>
     {/* need to get the show.id and save it into state. this is why we're passing show.  */}
      <td> <button type='button'>Save</button></td>
    </tr>
    </>
  )
}
