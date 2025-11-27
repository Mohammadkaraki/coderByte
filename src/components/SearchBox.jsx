const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBox;
