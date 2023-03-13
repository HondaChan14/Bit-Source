const GoodFirstIssueCard = ({issue}) => {
    return (
          <div className="rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 p-1 shadow-xl">
            <div className="block rounded-xl bg-rose-50 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg font-medium mb-2">{issue.title}</h2>
              <span>Created Date: {issue.created_date}</span>
            <div className="mt-2 border-t-2 border-gray-200">
              <p className="text-gray-700 mt-2 mb-4 h-64">Description: {issue.description}</p>
              <button className="border border-blue-600 text-blue-600 py-2 px-8 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                <a href={issue.url} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">View on Github</a>
              </button>
            </div>
            </div>
          </div>
    )
  }
  
  export default GoodFirstIssueCard