import React,{useEffect} from 'react'
import lottie from "lottie-web";
function Animation({data}) {
  useEffect(() => {
    const instance =  lottie.loadAnimation({
      container: document.querySelector('#animation'), 
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
    <div id="animation"   className=''></div>
  )
}

export default Animation