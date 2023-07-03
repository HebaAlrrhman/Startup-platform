export function Post({ content, handleDeletePost, id, HoldImage }) {
  return (
    <>
      <div className="ui comments">
        
          
            <div className="text" >{content}</div>
            <button
              className="ui  button"
              style={{
                backgroundColor: "red",
                width: "70px",
                height: "25px",
                color: "white",
                marginTop:"15px"
              }}
              onClick={() => handleDeletePost(id)}
            >
              Delete
            </button>
          </div>

          <div className="Image">{HoldImage}</div>
      
    
    </>
  );
}
