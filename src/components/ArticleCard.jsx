import HighlightText from './HighlightText';

const ArticleCard = ({ article, searchTerm }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">
        <HighlightText text={article.title} highlight={searchTerm} />
      </h2>
      <p className="article-content">
        <HighlightText text={article.content} highlight={searchTerm} />
      </p>
    </div>
  );
};

export default ArticleCard;
