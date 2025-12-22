import React from 'react';

const ResearchResponse = ({ researchWorks, blogs }) => {
  return (
    <div className='max-w-4xl w-full px-2 sm:px-0'>
      {/* Research Work Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Research Work And Blogs</h2>
        <p className="text-gray-600 text-sm sm:text-base">Exploring the frontiers of AI, Machine Learning, and Software Engineering</p>
      </div>
      
      {/* Research Works Section */}
      <div className="mb-6 sm:mb-8 md:mb-12">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 pb-2 border-b border-gray-200">Research Papers</h3>
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {researchWorks && researchWorks.length > 0 ? (
            researchWorks.map((research, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">{research.title}</h4>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">{research.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-xs sm:text-sm md:text-base">No research works available at the moment.</p>
          )}
        </div>
      </div>
      
      {/* Blogs Section */}
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 pb-2 border-b border-gray-200">Blog Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">{blog.title}</h4>
                <p className="text-gray-700 mb-2.5 sm:mb-3 md:mb-4 leading-relaxed text-xs sm:text-sm md:text-base">{blog.description}</p>
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm md:text-base"
                  aria-label={`Read blog: ${blog.title}`}
                >
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-3.5 md:h-4 sm:w-3.5 md:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic col-span-2 text-xs sm:text-sm md:text-base">No blog articles available at the moment.</p>
          )}
        </div>
      </div>
      
      {/* Closing Message */}
      <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          I'm passionate about sharing knowledge and insights on emerging technologies. 
          My research focuses on making AI more efficient and accessible, while my blogs 
          explore the latest trends and practical applications in the field.
        </p>
        <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
          Would you like to know more about any specific research area or blog topic?
        </p>
      </div>
    </div>
  );
};

export default ResearchResponse;