import { projects } from '../constants'

const FeatureCards = () => {
  return ( 
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols text-center'>
        {projects.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className='card-border rounded-xl p-8 flex  items-center flex-col gap-4'
          >
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img
                src={imgPath}
                alt={title} 
                className='w-14 h-14 object-cover'
              />
            </div>
            <h3 className='text-white text-2xl font-medium'>{title}</h3>
            <p className='text-white-50 text-base leading-relaxed'>{desc}</p>            
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default FeatureCards