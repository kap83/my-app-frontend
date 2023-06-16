import React from 'react'
import '../index.css'

export default function EditableShowRow({show, editedFormData}) {


  
  return (
    <tr>
       <td>
          <input 
          type='text'
          value={show.title} 
          name='title' 
          required='required' 
          placeholder='Enter A Title'
        />
       </td>
       <td>
          <input 
          type='text'
          value={show.genre} 
          name='Genre' 
          required='required' 
          placeholder='Enter A Genre'
          />
        </td>
      <td>
        <input 
          type='text' 
          value={show.seasons} 
          name='Seasons' 
          required='required' 
          placeholder='Enter the number of seasons'  
        />
      </td>
      <td>
        <input 
          type='text' 
          value={show.number_of_episodes} 
          name='Episodes' 
          required='required' 
          placeholder='Enter the number of episodes'
          
        />
      </td>
     <td>
      <input type='text' 
        value={show.original_language}
        name='Lanuage' 
        required='required' 
        placeholder='Enter the original Language'
      />
     </td>
     {/* need to get the show.id and save it into state. this is why we're passing show.  */}
      <button type='button'>Save</button>
    </tr>
  )
}
