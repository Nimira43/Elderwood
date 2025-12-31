const GlowCard = ({card, children}) => {
  return (
    <div className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow' />
      <div>
        {Array.from(
          { length: 5 },
          (_, i) => (
            <img
              key={i}
              src='/images/star.png'
              alt='star'
              className='size-5'
            />
          )
        
        )}
      </div>
    </div>
  )
}

export default GlowCard
