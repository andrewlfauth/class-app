function CreateTeacher({ handleSubmit }) {
  return (
    <div className='flex items-center w-fit justify-center p-12 shadow'>
      <div className='mx-auto w-full max-w-[550px]'>
        <h1 className='font-semibold text-2xl text-[#6A64F1]'>
          Welcome Teacher!
        </h1>
        <form onSubmit={handleSubmit} className='mt-8'>
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-5'>
                <label
                  htmlFor='username'
                  className='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Choose a username
                </label>
                <input
                  type='text'
                  name='username'
                  placeholder='First Name'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Set your password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Last Name'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>

          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-5'>
                <label
                  htmlFor='gradeTaugth'
                  className='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Which grade do you teach?
                </label>
                <select
                  type='text'
                  name='gradeTaught'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                >
                  <option value='k'>Kindergarten</option>
                  <option value='1'>1st Grade</option>
                  <option value='2'>2nd Grade</option>
                  <option value='3'>3rd Grade</option>
                  <option value='4'>4th Grade</option>
                  <option value='5'>5th Grade</option>
                  <option value='6'>6th Grade</option>
                  <option value='7'>7th Grade</option>
                  <option value='8'>8th Grade</option>
                  <option value='9'>9th Grade</option>
                  <option value='10'>10th Grade</option>
                  <option value='11'>11th Grade</option>
                  <option value='12'>12th Grade</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mb-5'>
            <span className='mb-3 block text-base font-medium text-[#07074D]'>
              What should your students call you?
            </span>
            <div className='flex space-x-4'>
              <select
                name='suffix'
                className='w-fit appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer'
              >
                <option value='Mrs'>Mrs</option>
                <option value='Mr'>Mr</option>
                <option value='Ms'>Ms</option>
              </select>
              <input
                type='text'
                name='name'
                placeholder='Smith'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
          </div>

          <div>
            <button className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTeacher
