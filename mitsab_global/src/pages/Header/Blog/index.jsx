import React,{useRef} from 'react'
import "./Blog.css"
import { blogs } from '../../../data'
import { BsCalendar, BsCalendar2Date } from 'react-icons/bs'
import { MdOutlineThumbUpOffAlt } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa6'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Blog = () => {
  const container = useRef(null) 
  useGSAP(() => {
    const q = gsap.utils.selector(container);

    const timeline = gsap.timeline({
      delay: .5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });

    timeline
      .from(q(".g-text"), { y: 50, opacity: 0 })
      .from(q(".blog_sub_title"), { y: -50, opacity: 0 })
      .fromTo(q(".blog_card"), { y: 100, opacity: 0 }, { opacity: 1, stagger: .5, y: 0 });
  }, { scope: container });


  return (
    <section id='blog' ref={container}>
      <div className="container">
        
        <h3 className="blog_sub_title">Explore our articles</h3>
        <div className="blogs_container">
          {
            blogs.map((blog,index)=>(
              <div className="blog_card" key={index}>
                <p className="category">{blog.category}</p>
                <div className="picture">
                  <img src={blog.image} alt="" />
                </div>
                <div className="details">
                  <h3>{blog.title}</h3>
                  <div className="buttons_container">
                    <button className="btn">
                      <BsCalendar2Date/>
                      {blog.date.toLocaleDateString()}
                    </button>
                    <button className="btn">
                      <MdOutlineThumbUpOffAlt/>
                      {blog.likeCount}
                    </button>
                    <button className="btn">
                      <FaRegCommentDots/>
                      {blog.commentCount}
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
