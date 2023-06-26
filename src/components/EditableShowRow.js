import React from 'react'

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
        <button type='submit'>SAVE</button>
        <button type='button' onClick={handleCancelClick}>CANCEL</button>
      </td>
      </tr>
    </>
  )
}
