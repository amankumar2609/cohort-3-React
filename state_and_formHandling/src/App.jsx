import React , {useState}from 'react'

const App = () => {

 const [user, setUser] = useState('Baman')


  return (
    <div>
      <h1>User is - {user}</h1>
      <button onClick={()=>{
        setUser('Aman')
      }}  className='py-2 px-4 bg-amber-700 rounded cursor-pointer'>Change Name</button>
    </div>
  )
}

export default App
