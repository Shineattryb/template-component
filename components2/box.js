import React,{useState} from 'react'
import DocMainHeader from './Container';
import './box.css';
import text from "../assets/text.svg";
import video from "../assets/video.svg";
import form from "../assets/form.svg";
import photo from "../assets/photo.svg";

function Box() {
    const [selectedbox, setselectedbox]=useState(null);
    const handleboxclick=(boxname)=>{
        setselectedbox(boxname);
    }
  return (
    <div className='box_wrapper'>
      <DocMainHeader header="Text" svgLink={text} sub_head="Use Text as the Header" selected={selectedbox=='text'} onClick={()=>handleboxclick("text")} />
      <DocMainHeader  header="Image" svgLink={photo} sub_head="Use an Image as the Header" selected={selectedbox=='image'} onClick={()=>handleboxclick("image")}/>
      <DocMainHeader  header="Video" svgLink={video} sub_head="Use a Video as the Header" selected={selectedbox=='video'} onClick={()=>handleboxclick("video")}/>
      <DocMainHeader header="Document" svgLink={form} sub_head="Use a Document as the Header"selected={selectedbox=='document'} onClick={()=>handleboxclick("document")}/>
    </div>
  )
}

export default Box;
