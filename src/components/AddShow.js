import React from 'react'
import '../index.css';

export default function AddShow() {
  return (
    <form> 
      <input type='text' name='Genre' required='required' placeholder='Enter A Genre'/>
      <input type='text' name='Title' required='required' placeholder='Enter A Title'/>
      <input type='text' name='Seasons' required='required' placeholder='Enter the number of seasons'/>
      <input type='text' name='No of Eps' required='required' placeholder='Enter the number of episodes'/>
      <input type='text' name='Lanuage' required='required' placeholder='Enter the original Language'/>
      <input type='text' name='Ongoing?' required='required' placeholder='Is it ongoing?'/>
      <button type='submit'>Add</button>
    </form>
  )
}
