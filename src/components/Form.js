
import HoldImage from "./HoldImage";
export function Form({ content, setContent,  handleAdd  }) {
  return (
    <form className="ui reply form">
      <div className="field">
     
        <textarea
          value={content} 
          placeholder="Write her ..."
          onChange={(e) => setContent(e.target.value)} style={{height:"100px" ,width:"300px"}}>

        </textarea>

        {/* < HoldImage /> */}
                
       
      </div>

      <button className="ui labeled submit icon button" style={{backgroundColor:"rgb(86, 86, 215)" , width:"70px" , height:"25px",color:"white" }} onClick={handleAdd}>
        <i className="icon edit"></i> Add Post
      </button>
    </form>
  );
}
