const FilterSortBar = () => {
    return (
      <div className="bg-[#FAF4F4] h-[100px] flex items-center  py-4 border-b border-gray-200">
        <div className="container mx-6 flex items-center justify-between px-4">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            {/* Filter Button */}
            <button className="flex  items-center gap-2 text-gray-700 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-13.5 6.75h10.5m-7.5 6.75h4.5"
                />
              </svg>
              Filter
            </button>
  
            {/* Grid View */}
            <button className="p-2 hover:bg-gray-200 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M5 3.75A1.25 1.25 0 0 0 3.75 5v2.5A1.25 1.25 0 0 0 5 8.75h2.5A1.25 1.25 0 0 0 8.75 7.5V5A1.25 1.25 0 0 0 7.5 3.75H5z" />
                <path d="M5 12.25A1.25 1.25 0 0 0 3.75 13.5v2.5A1.25 1.25 0 0 0 5 17.25h2.5a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-1.25-1.25H5z" />
                <path d="M12.25 5A1.25 1.25 0 0 1 13.5 3.75h2.5A1.25 1.25 0 0 1 17.25 5v2.5a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 12.25 7.5V5z" />
                <path d="M13.5 12.25A1.25 1.25 0 0 0 12.25 13.5v2.5a1.25 1.25 0 0 0 1.25 1.25h2.5a1.25 1.25 0 0 0 1.25-1.25v-2.5a1.25 1.25 0 0 0-1.25-1.25h-2.5z" />
              </svg>
            </button>
  
            {/* List View */}
            <button className="p-2 hover:bg-gray-200 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12m-12 5.25h12m-12 5.25h12M3.75 6.75h.008v.008H3.75v-.008zm0 5.25h.008v.008H3.75v-.008zm0 5.25h.008v.008H3.75v-.008z"
                />
              </svg>
            </button>
  
            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>
  
            {/* Results Info */}
            <p className="text-sm text-gray-600">Showing 1–16 of 32 results</p>
          </div>
  
          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Show Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <input
                type="text"
                value="16"
                className="w-12 px-2 py-1 border rounded text-center"
                readOnly
              />
            </div>
  
            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <input
                type="text"
                value="Default"
                className="w-20 px-2 py-1 border rounded text-center"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FilterSortBar;
  