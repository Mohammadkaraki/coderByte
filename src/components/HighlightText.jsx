const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  // Escape special regex characters
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create regex pattern for case-insensitive matching
  const regex = new RegExp(`(${escapeRegex(highlight)})`, 'gi');

  // Split text by the search term
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="highlight">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export default HighlightText;
