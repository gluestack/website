import React,{useEffect} from 'react'
import lottie from "lottie-web";
function Animation({data}) {
  useEffect(() => {
    const instance =  lottie.loadAnimation({
      container: document.querySelector('#car'), 
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data, 
      rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice', 
        clearCanvas: false,
        hideOnTransparent: true, 
      }
    });
    return () => instance.destroy();
   }, [])
  return (
    <div id="car"   className=''></div>
  )
}

export default Animation