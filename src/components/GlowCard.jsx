const GlowCard = ({ card, children, showStars = true }) => {
  return (
    <div className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow' />

      {showStars && (
        <div className='flex items-center gap-1 mb-5'>
          {Array.from({ length: 5 }, (_, i) => (
            <img
              key={i}
              src='/images/star.png'
              alt='star'
              className='size-5'
            />
          ))}
        </div>
      )}

      <div className='mb-5'>
        <p className='text-white-50 text-lg'>
          {card.review}
        </p>
        {children}
      </div>
    </div>
  )
}

export default GlowCard

