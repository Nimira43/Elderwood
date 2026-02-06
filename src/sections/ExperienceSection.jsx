import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section
      id='experience'
      className='w-full md:mt-40 mt-20 section-padding xl:px-0'
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title='Professional Projects'
          sub='An overview of our work to date.'
        />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className='exp-card-wrapper'
              >
                <div className='xl:w-2/6'>
                  <GlowCard
                    card={card}
                    index={index}
                  >
                    <div className='mt-5'>
                      <img
                        src={card.imgPath}
                        alt={card.title}
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6 w-full">
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-1 bg-gradient-to-b from-white/20 to-white/0 rounded-full h-full" />
                  </div> 
                    <div className="flex flex-col gap-6 relative z-20">
                      <h1 className="font-semibold text-3xl">
                        {card.title}
                      </h1>
                      <p className="text-white-50 text-lg">
                        {card.date}
                      </p>
                      <ul className="list-disc ms-5 flex flex-col gap-4 text-white-50">
                        {card.description.map((desc, index) => (
                          <li key={index} className="text-lg leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </section>
  )
}

export default ExperienceSection
