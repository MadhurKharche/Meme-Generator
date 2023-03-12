function Meme() {
  return (
    <form action="/" method="post" className="form">
      <input
        type="text"
        name="text2"
        className="form-inputs"
        placeholder="Top Text"
      />
      <input
        type="text"
        name="text1"
        className="form-inputs"
        placeholder="Bottom Text"
      />
      <button type="submit" className="form-button">
        Get a New Meme Image 🖼
      </button>
    </form>
  );
}

export default Meme;
