import { useOutletContext } from "react-router-dom"

const DragonNews = () => {
  const newsData = useOutletContext()
  const update = newsData.slice(0, 3)

  return (
    <div>
      {
        update.map((news, index) =>


          <div key={index} className="bg-white rounded-lg shadow-md p-4 mx-auto ">
            {/* Header Section */}
            <div className="flex items-center mb-4">
              <img
                src={news.image_url}
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-sm font-semibold">{news.author.name}</h2>
                <p className="text-xs text-gray-500">2022-08-21</p>
              </div>
              <div className="ml-auto">
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-bookmark"></i>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <h3 className="text-lg font-bold mb-2">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid
              Package Yet
            </h3>
            <img
              src={news.thumbnail_url}
              alt="News Thumbnail"
              className="rounded-lg w-full h-80  object-cover mb-3"
            />
            <p className="text-sm text-gray-600 mb-3">
              {news.title}
            </p>
            <a
              href="#"
              className="text-red-500 font-semibold text-sm hover:underline"
            >
              Read More
            </a>

            {/* Footer Section */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text-sm text-gray-600 ml-2">4.9</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-eye text-gray-500"></i>
                <p className="text-sm text-gray-600 ml-1">499</p>
              </div>
            </div>
          </div>


        )
      }
    </div>
  )
}

export default DragonNews
