import { forwardRef } from "react";
import "../assets/css/Footer.css";


const Footer = forwardRef<HTMLInputElement>((_props,ref) => {
  return (
    <div className="Footer">
        <input type="button" value="前へ" />
        <input type="button" value="次へ" ref={ref}/>
    </div>
  )
});

export default Footer