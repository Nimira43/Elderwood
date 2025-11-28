import { projects } from '../constants'

const FeatureCards = () => {
  return ( 
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
        {projects.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className='card-border rounded-xl p-8 flex flex-col gap-4'
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default FeatureCards