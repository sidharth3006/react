import React , {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import Navbar from './Navbar'

const App = () => {

  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [loading, setLoading] = useState(false)
  const itemsPerPage = 5

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  async function getData(page = 1) {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${itemsPerPage}`
      );
      setData(response.data);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false)
    }
  }

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      getData(pageNumber);
    }
  }

    // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]); 

  useEffect(() => {
    getData(1);
  }, []);
  
  return (
    <div className="h-screen" style={{ backgroundColor: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div style={{ padding: '20px' }}>
        {loading ? (
          <div className="flex justify-center mt-6">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 mt-6 p-4 border h-[calc(100vh-200px)] overflow-y-auto">
            {data.map((item) => (
              <Card key={item.id} item={item} theme={theme} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          <button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="px-3 py-1">Page {currentPage}</span>
          <button 
            onClick={() => paginate(currentPage + 1)}
            disabled={data.length < itemsPerPage}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
      {/*<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={getData}>Get Data</button>*/}
    </div>
    
  )
}

export default App