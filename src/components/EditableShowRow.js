import React from 'react'
import '../index.css'

export default function EditableShowRow({show}) {


  
  return (
    <>
      <tr>
       <td>
          <input 
          type='text'
           
          name='title' 
          required='required' 
          placeholder='Enter A Title'
        />
       </td>
       <td>
          <input 
          type='text'
          
          name='Genre' 
          required='required' 
          placeholder='Enter A Genre'
          />
        </td>
      <td>
        <input 
          type='text' 
          
          name='Seasons' 
          required='required' 
          placeholder='Enter the number of seasons'  
        />
      </td>
      <td>
        <input 
          type='text' 
          
          name='Episodes' 
          required='required' 
          placeholder='Enter the number of episodes'
          
        />
      </td>
     <td>
      <input type='text' 
       
        name='Lanuage' 
        required='required' 
        placeholder='Enter the original Language'
      />
     </td>
     {/* need to get the show.id and save it into state. this is why we're passing show.  */}
      <td> <button type='button'>Save</button></td>
    </tr>
    </>
  )
}
