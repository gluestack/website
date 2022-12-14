import React from "react";
import TermsCondition from "../../components/Terms/TermsCondition";

function Details() {

  const terms=[
    {
      id:1,
      title:"1. AGREEMENT TO TERMS",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>"
    },
    {
      id:2,
      title:"2. Lorem ipsum dolor sit amet con. Arcu tristique egestas sit pulvinar.",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>"
    },
    {
      id:3,
      title:"3. ACCEPTABLE USE",
      desc:" <p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/> <p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>"
    },
    {
      id:4,
      title:"4. DISCLAIMER/LIMITATION OF LIABILITY",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/> <li>Digital design is like painting, except the paint never dries.</li>  <li>Creativity is only as obscure as your reference</li> <li>Whitespace is like air: it is necessary for design to breathe</li> <li>You don’t have to be ‘a creative’ to be creative. </li> <li>The best way to predict the future is to create it</li>"
    },
    {
      id:5,
      title:"5. TERM AND TERMINATION",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/> <p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>"
    },
    {
      id:6,
      title:"6. GENERAL",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p> <br/> <p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p> <br/> <p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><p>Insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p>"
    },
    {
      id:7,
      title:"7. CONTACT US",
      desc:"<p>Welcome to our blog, where we share our thoughts, insights, and expert knowledge on a variety of topics. From industry news and trends to company updates and behind-the-scenes looks at our work, our blog is your go-to source for staying informed and engaged. We invite you to explore our latest posts and join the conversation by leaving comments and sharing with your network. Happy reading!</p><br/><li>Digital design is like painting, except the paint never dries.</li><li>Creativity is only as obscure as your reference</li><li>Whitespace is like air: it is necessary for design to breathe.</li><li>You don’t have to be ‘a creative’ to be creative. </li><li>The best way to predict the future is to create it</li>"
    },
  ]
  return (
    <>
    {
      terms.map((ele:any)=>{
        return <>
        <TermsCondition key={ele.id} title={ele.title}><div dangerouslySetInnerHTML={{__html:ele.desc}}></div></TermsCondition>
        </>
      })
    }
    </>
  );
}

export default Details;
