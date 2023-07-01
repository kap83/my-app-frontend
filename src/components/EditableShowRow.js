import React from 'react'
import '../index.css'

export default function EditableShowRow({editableShowData, handleEditFormChange, handleCancelClick}) {
  return (
    <>
      <tr>
        <td>
          <input 
            type='text'
            defaultValue={editableShowData.title}
            name="title"
            required='required'
            placeholder='Title'
            onChange={handleEditFormChange}
          />
        </td>
        <td>
        <input 
          type='text' 
          defaultValue={editableShowData.seasons}
          name='seasons' 
          required='required' 
          placeholder='seasons'  
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input 
          type='text' 
          defaultValue={editableShowData.episodes}
          name='episodes' 
          required='required' 
          placeholder='Episodes'
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input 
        type='text' 
        defaultValue={editableShowData.language}
        name='language' 
        required='required' 
        placeholder='Language'
        onChange={handleEditFormChange}
      />
      </td>
      <td>
        <button type='submit' className='btnStyle1'>SAVE</button>
        <button type='button' className='btnStyle1' onClick={handleCancelClick}>CANCEL</button>
      </td>
      </tr>
    </>
  )
}
