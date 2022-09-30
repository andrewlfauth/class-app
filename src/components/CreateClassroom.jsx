import { IoCreate } from 'react-icons/io5'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'

import getFormData from '../utils/getFormData'

function CreateClassroom() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)

  const createClassroom = async (e) => {
    const formData = getFormData(e)

    const res = await fetch('/api/create-classroom', {
      method: 'post',
      body: JSON.stringify(formData),
    })

    const status = await res.json()
    console.log(status)

    router.replace('/dashboard')
  }

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className='pt-6 w-40 pl-2 pb-2 rounded bg-purple-500 relative text-2xl text-left tracking-tight font-semibold text-gray-100 group hover:bg-opacity-95'
      >
        <IoCreate className='text-4xl absolute top-2 right-2 text-gray-100 group-hover:text-emerald-200' />
        Create <br /> Classroom
      </button>

      {showForm && (
        <form
          onSubmit={createClassroom}
          className='bg-gray-100 fixed top-28 left-52 mx-auto p-10 rounded w-fit'
        >
          <AiOutlineClose
            onClick={() => setShowForm(false)}
            className='absolute cursor-pointer top-2 right-2'
          />
          <div className='flex flex-col'>
            <label
              htmlFor='name'
              className='text-purple-900 font-semibold mb-1'
            >
              Name your classroom
            </label>
            <input type='text' name='name' className='p-2 rounded border' />
          </div>
          <div className='flex flex-col mt-2'>
            <label
              htmlFor='grade'
              className='text-purple-900 font-semibold mb-1'
            >
              Grade Level
            </label>
            <select name='grade' className='p-2 rounded border'>
              <option value='Kindergarten'>Kindergarten</option>
              <option value='1st Grade'>1st Grade</option>
              <option value='2nd Grade'>2nd Grade</option>
              <option value='3rd Grade'>3rd Grade</option>
              <option value='4th Grade'>4th Grade</option>
              <option value='5th Grade'>5th Grade</option>
              <option value='6th Grade'>6th Grade</option>
            </select>
          </div>
          <button className='bg-emerald-300 rounded py-2 w-full mx-auto block mt-6'>
            Create
          </button>
        </form>
      )}
    </div>
  )
}

export default CreateClassroom
