import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

function ClassroomCard({ classroom, i }) {
  const srcs = useMemo(
    () => [
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664583352/classroom/photo-1634128221889-82ed6efebfc3_rkoquv.avif',
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664583319/classroom/photo-1615988938302-bd2a5a7023bc_fgawla.avif',
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664583301/classroom/photo-1501349800519-48093d60bde0_zz7cxx.avif',
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664583293/classroom/photo-1509191436522-d296cf87d244_ny1x6b.avif',
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664583279/classroom/photo-1503676260728-1c00da094a0b_pn0ipn.avif',
    ],
    []
  )
  return (
    <div className='p-6 border rounded w-fit'>
      <h3 className='text-lg font-semibold tracking-tight'>{classroom.name}</h3>
      <div className='relative h-32 w-44'>
        <Image layout='fill' objectFit='contain' src={srcs[i]} alt='' />
      </div>
    </div>
  )
}

export default ClassroomCard
