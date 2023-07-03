import React from "react";
import Category from "./Category";
import "./Category.css";
function Categories() {
  return (
    <div style={{ background: "white" }}>
      <h1 className="OurCollection">Our Collection</h1>
      <div className="CategoryContainer" id="AllCatagery">
        <Category
          image="https://img.freepik.com/free-photo/abstract-geometric-background-with-liquid-shapes-generative-ai_8829-2896.jpg?w=1060&t=st=1688367973~exp=1688368573~hmac=bff621e6bdad5d5fc82313a7b7850a168f09347db337cbf5dacfa028d4e89c8b"
          title=" ABSTRACT"
        />

        <Category
          image="https://img.freepik.com/free-photo/closeup-lily-flower-blurred-background-generative-ai_169016-30630.jpg?w=1060&t=st=1688368052~exp=1688368652~hmac=f37f344d4753db9e0845b5702f5f31c28367999a937637e0c9d2911d8aa974f4"
          title="DECORATIVE"
        />

        <Category
          image="https://img.freepik.com/premium-photo/mind-spiraling-out-control-pointillism-colorful-color-generative-ai-aig15_31965-160482.jpg?w=996"
          title="POINTILLISM"
        />
         <Category
          image="https://img.freepik.com/premium-photo/beautiful-woman-portrait-illustration_691560-451.jpg?size=626&ext=jpg&uid=R97040590&ga=GA1.2.725487867.1680962943&semt=ais"
          title="SURREAL"
        />

        
      </div>
    </div>
  );
}

export default Categories;
