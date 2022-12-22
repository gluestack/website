import { useEffect, useRef } from 'react'

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

const TypingAnimation = () => {
  const h1Ref = useRef(null)
  const pRef = useRef(null)

  useEffect(() => {
    var speed = 75;
    var h1 = h1Ref.current
    var p = pRef.current
    var delay = h1.innerHTML.length * speed + speed;

    typeEffect(h1, speed);
    setTimeout(function(){
      p.style.display = "inline-block";
      typeEffect(p, speed);
    }, delay);
  }, [])

  return (
    <div className='container bg-black py-20 px-20 text-white'>
      <div id="code">
           <h1 ref={h1Ref}>Sample typing effect.</h1>
            <p ref={pRef} style={{display: 'none'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ante arcu, dignissim non risus id, posuere efficitur felis.
            Vestibulum arcu diam, semper non ipsum quis, dictum ultricies diam. 
            Suspendisse vel luctus sapien. Mauris tristique condimentum velit tincidunt pharetra. 
            Curabitur ut lectus eleifend, malesuada lorem eget, consectetur augue. 
            Nunc scelerisque nisi in lacus eleifend eleifend. Praesent blandit ex at nunc maximus, 
            ut sodales ante auctor. Nunc elementum eros sit amet malesuada facilisis. 
            Morbi eget elit consequat, sodales urna in, lobortis nisi. Morbi dapibus velit eu 
            mattis bibendum. Nulla et nisi eget turpis vulputate
            </p>
        </div>
     </div>
    )
}

export default TypingAnimation