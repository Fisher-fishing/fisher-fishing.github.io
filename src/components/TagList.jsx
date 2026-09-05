function TagList({ tags }) {
  return (
    <div className="tags" aria-label="技术栈">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default TagList;

