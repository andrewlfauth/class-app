import { IoCreate } from 'react-icons/io5'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'

import getFormData from '../utils/getFormData'

function CreateClassroom() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const createClassroom = async (e) => {
    setIsLoading(true)
    const formData = getFormData(e)

    const res = await fetch('/api/create-classroom', {
      method: 'post',
      body: JSON.stringify(formData),
    })

    const status = await res.json()
    console.log(status)
    setIsLoading(false)
    setShowForm(false)
    router.replace('/dashboard')
  }

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className='relative w-40 pt-6 pb-2 pl-2 text-2xl font-semibold tracking-tight text-left text-gray-100 bg-purple-500 rounded group hover:bg-opacity-95'
      >
        <IoCreate className='absolute text-4xl text-gray-100 top-2 right-2 group-hover:text-emerald-200' />
        Create <br /> Classroom
      </button>

      {showForm && (
        <form
          onSubmit={createClassroom}
          className='fixed p-10 mx-auto bg-gray-100 rounded top-28 left-52 w-fit'
        >
          <AiOutlineClose
            onClick={() => setShowForm(false)}
            className='absolute cursor-pointer top-2 right-2'
          />
          <div className='flex flex-col'>
            <label
              htmlFor='name'
              className='mb-1 font-semibold text-purple-900'
            >
              Name your classroom
            </label>
            <input type='text' name='name' className='p-2 border rounded' />
          </div>
          <div className='flex flex-col mt-2'>
            <label
              htmlFor='grade'
              className='mb-1 font-semibold text-purple-900'
            >
              Grade Level
            </label>
            <select name='grade' className='p-2 border rounded'>
              <option value='Kindergarten'>Kindergarten</option>
              <option value='1st Grade'>1st Grade</option>
              <option value='2nd Grade'>2nd Grade</option>
              <option value='3rd Grade'>3rd Grade</option>
              <option value='4th Grade'>4th Grade</option>
              <option value='5th Grade'>5th Grade</option>
              <option value='6th Grade'>6th Grade</option>
            </select>
          </div>
          <button className='block w-full py-2 mx-auto mt-6 rounded bg-emerald-300'>
            {isLoading ? 'Creating' : 'Create'}
          </button>
        </form>
      )}
    </div>
  )
}

export default CreateClassroom
