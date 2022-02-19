import "./Hello.css"
import index from "./index.module.css"

function HelloWord() {
  return ( 
    <div className="test">
      Hello,react!
      <div className={index.testModule}>样式模块化</div>
    </div>
  );
}

export default HelloWord;