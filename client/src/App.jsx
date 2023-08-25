import React, { useState } from 'react'
import Logo from '../src/assets/Logo.png'

const App = () => {
  const [id, setid] = useState('');
  const [searchComplete,setSearchComplete]=useState(false);
  return (
    
    <div>
      <img src={Logo} alt="logo" className='logo'/>
      <h1>Get Youtube Subscribers</h1>
      <h3>This API allows you to retrieve information about subscribers to various YouTube channels. <br/> It provides endpoints to access subscriber details, names, and channels.</h3>
      <p>To access the list of subscribers</p>
      <a href="http://localhost:3000/subscribers" className="button" target="_blank">Click me!</a>
      <p>To access the list of subscribers name and channel</p>
      <a href="http://localhost:3000/subscribers/names" className="button" target="_blank">Click me!</a>
      <p>To access individual subscriber from the list based on id</p>
      <input type="text" className='id-search' 
            placeholder='Enter id' value={id}                              onChange={(e) => {setid(e.target.value)
                              setSearchComplete(true)}} />
      <a href={`http://localhost:3000/subscribers/${id}`} className="button" target="_blank" onClick={setTimeout(()=>searchComplete&& setid(''), 2000)}>Click me!</a>
    </div>
  )
}

export default App
