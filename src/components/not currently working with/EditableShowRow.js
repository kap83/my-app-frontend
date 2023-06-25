import React from 'react'
import '../index.css'

export default function EditableShowRow({ editedShowData, handleCancelClick, handleEditFormChange}) {


  // const handleGenreSelection = (e) => {

  //   console.log("e", e.target.value)
  //   handleDropDownSelectionClick(e.target.value)
  // }

  return (
    <>
      <tr>
       <td>
          <input 
          type='text'
          defaultValue={editedShowData.title}
          name='title' 
          required='required' 
          placeholder='Enter A Title'
          onChange={handleEditFormChange}
        />
       </td>

        {/* <td>
        <select
          value={selectedGenre}
          onChange={handleGenreSelection}
     >
      <option>{editedShowData.genre}</option>
        {optionsForDropDown}
     </select>
        </td> */}

      <td>
        <input 
          type='text' 
          defaultValue={editedShowData.seasons}
          name='seasons' 
          required='required' 
          placeholder='Enter the number of seasons'  
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input 
          type='text' 
          defaultValue={editedShowData.episodes}
          name='episodes' 
          required='required' 
          placeholder='Enter the number of episodes'
          onChange={handleEditFormChange}
        />
      </td>
     <td>
      <input 
        type='text' 
        defaultValue={editedShowData.language}
        name='language' 
        required='required' 
        placeholder='Enter the original Language'
        onChange={handleEditFormChange}
      />
     </td>
     {/* need to get the show.id and save it into state. this is why we're passing show.  */}
      <td><button type='submit'>Save</button>
      <button type='button' onClick={handleCancelClick}>Cancel</button></td>
    </tr>
    </>
  )
}
