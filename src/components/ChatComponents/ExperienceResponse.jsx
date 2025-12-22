const ExperienceResponse = ({ experiences, getExperienceImageByName }) => {
  return (
    <div className='max-w-4xl w-full px-2 sm:px-0'>
      {/* Experience Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Work Experience</h2>
        <p className="text-gray-600 text-sm sm:text-base">Here's a summary of my professional journey</p>
      </div>
      
      {/* Experience Timeline */}
      <div className="mt-6 sm:mt-8">
        {experiences.map((experience, expIndex) => (
          <div key={expIndex} className="mb-5 sm:mb-6 last:mb-0"
            style={{ opacity: 1, transform: 'translateY(0)' }}>
            <div className="flex items-start mb-3 sm:mb-4">
              <div className="flex-shrink-0 mr-2.5 sm:mr-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: experience.iconBg }}>
                  <img 
                    src={getExperienceImageByName(experience.icon)} 
                    alt={experience.company_name} 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{experience.title}</h3>
                <p className="text-gray-700 font-medium text-sm">{experience.company_name}</p>
                <p className="text-gray-500 text-xs mt-1">{experience.date}</p>
              </div>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 md:pl-6 ml-6 sm:ml-8 md:ml-12 space-y-1 sm:space-y-1.5 md:space-y-2">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex} className="text-gray-700 text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-5 sm:mt-6 text-center">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          My experience reflects my passion for continuous learning and my ability to contribute to impactful outcomes.
          What specific role or experience would you like to know more about?
        </p>
      </div>
    </div>
  );
};

export default ExperienceResponse;