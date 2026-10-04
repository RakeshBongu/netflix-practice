

const VideoTitle = ({title, description}) => {
  return (
    <div className='pt-40 w-screen aspect-video px-10 bg-gradient-to-r from-black text-white absolute'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-4 w-1/3'>{description}</p>
      <div>
        <button className='w-20 bg-white text-black p-2 rounded-lg'>Play</button>
        <button className='w-40 ml-4 bg-white text-black p-2 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
