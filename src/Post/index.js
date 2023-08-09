import "../styles.css";

const Post = ({ data }) => {
  console.log("data", data);

  if (data.length === 0) {
    return "No data Present";
  }

  return (
    <div className="post_style">
      {data.map((item) => (
        <div key={item.id} className="post_name">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Post;
