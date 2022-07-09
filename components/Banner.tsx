import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie } from '../typing'
import { baseUrl } from '../constans/movie'
import {InformationCircleIcon, PlayIcon} from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props{
                netflixOriginals:Movie[]
}
function Banner({netflixOriginals}:Props) {
                const[movie,setMovie]=useState<Movie | null>(null)
                const [showModal,setShowModal]=useRecoilState(modalState)
                const[currentMovie,setCurrentMovie]= useRecoilState(movieState)

                useEffect(()=>{
                setMovie(
                                netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)]
                                )
                },[netflixOriginals])
                
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
                <div className='absolute  top-0 left-0 h-[95vh] w-screen -z-10 '>
                                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout='fill' objectFit='cover' />
                </div>
                <h1 className='text-2xl font-bold lg:text-7xl m-10'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-xd m-10'>{movie?.overview}</p>
                <div className='flex space-x-3'>
                <button className='bannerButton bg-white text-black mx-10'><PlayIcon className='h-4 w-4 text-black md:h-7 w-7' />Play</button>
                <button className='bannerButton bg-[gray]/70 mx-10' onClick={()=>{
                  setCurrentMovie(movie)
                  setShowModal(true)
                }}>More Info<InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/></button>
                </div>
    </div>
  )
}

export default Banner