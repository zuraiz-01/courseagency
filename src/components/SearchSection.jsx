function SearchSection({ onSearch }) {
  return (
    <section className="search-courses container" id="search">
      <h2>Search Courses</h2>
      <form className="search-box" onSubmit={onSearch}>
        <label className="input-holder" htmlFor="course-search">
          <span>⌕</span>
          <input id="course-search" type="text" placeholder="Search for over 50+ courses" />
        </label>
        <button className="btn-fill big" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchSection
