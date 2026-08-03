import React from 'react'
import { X } from 'lucide-react';


const App = () => {
  
  const submitHandler = (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      alert("Title is empty")
      return
    }
    
    if (!description.trim()) {
      alert("Description is empty")
      return
    }
    
    console.log("Form submitted")  
    console.log(title)
    console.log(description)
    
    const copyTask = [...task]
    copyTask.push({title,description})
    setTask(copyTask)

    console.log(copyTask)

    setTitle("")
    setDescription("")

  }  

  const deleteTask = (index) => {
    const copyTask = [...task]
    copyTask.splice(index, 1)
    setTask(copyTask)
  }
  
  const [title,setTitle] = React.useState("")
  const [description,setDescription] = React.useState("")

  const [task,setTask] = React.useState([])
   



  return (
    <div className='h-screen lg:flex bg-black text-white'>
       <form  onSubmit = {(e) => {submitHandler(e)}}  className='flex flex-col lg:w-1/2 gap-4 p-10 ' onSubmit={submitHandler}>
          <h1 className='text-2xl font-bold'>Add Note</h1>
          
          <input type="text" placeholder="Enter a task" value={title}  onChange={(e) => {setTitle(e.target.value)}}   className="px-5 py-2 border-2 rounded font-medium" /> 
          <input type="text" placeholder="Write Details" value={description}  onChange={(e) => {setDescription(e.target.value)}}  className="px-5 py-2 h-32 border-2 rounded font-medium"/> 

          <button className='px-5 py-2 active:bg-gray-300 active:scale-95 bg-white text-black rounded font-medium'>Add</button>
       </form> 

       <div className='flex flex-col p-10 bg-gray-900 gap-5 lg:w-1/2 h-full border  '>
        <h1 className='text-2xl font-bold'>Notes</h1> 

       <div className='flex justify-start flex-wrap gap-5 mt-5 overflow-auto'> 
        {task.map((t,index) => (
          <div key={index} className='flex flex-col gap-3 border border-gray-200 relative h-72 w-56 rounded-xl text-black p-4 bg-white shadow-md hover:shadow-lg transition-shadow'> 
            <h2 onClick={() => deleteTask(index)}  className='absolute top-3 cursor-pointer active:scale-90 right-3 bg-red-100 hover:bg-red-200 text-red-500 p-1.5 rounded transition-colors'><X /></h2>
            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-bold text-gray-800'>{t.title}</h3>
              <p className='text-sm mt-2 text-gray-600'>{t.description}</p>
            </div>
          </div>
        ))}


       </div> 

       </div>
    </div>
  )
}

export default App