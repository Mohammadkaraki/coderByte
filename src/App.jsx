import { useState } from 'react';
import SearchBox from './components/SearchBox';
import ArticleCard from './components/ArticleCard';
import { articles } from './data/articles';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter articles based on search term
  const filteredArticles = articles.filter((article) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Article Search</h1>
        <p className="subtitle">Search through articles with real-time highlighting</p>
      </header>

      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="results-info">
        {searchTerm && (
          <p>
            Found {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for "{searchTerm}"
          </p>
        )}
      </div>

      <div className="articles-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} searchTerm={searchTerm} />
          ))
        ) : (
          <div className="no-results">
            <p>No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
