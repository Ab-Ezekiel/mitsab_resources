import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../../../data';
import { slugify } from '../../../utils/slugify';
import './BlogDetail.css';
import {
 

  FaRegCommentDots,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa6';
import { MdOutlineThumbUpOffAlt } from 'react-icons/md';
import { BsCalendar2Date } from 'react-icons/bs';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const blog = blogs.find((b) => slugify(b.title) === slug);

  // Set page title
  useEffect(() => {
    if (blog) {
      document.title = blog.title;
    }
  }, [blog]);

  // Animate with GSAP
  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
    });

    tl.from(q('.title'), { y: 50, opacity: 0, duration: 0.6 })
      .from(q('.meta'), { y: 30, opacity: 0, duration: 0.4 })
      .from(q('.cover-image'), { y: 50, opacity: 1, duration: 0.4 })
      .from(q('.content p'), { y: 20, opacity: 0, stagger: 0.2, duration: 0.4 })
      .from(q('.related-posts'), { y: 60, opacity: 0, duration: 0.5 })
      .from(q('.follow-us-section'), { y: 40, opacity: 0, duration: 0.5 });
  }, { scope: containerRef });

  if (!blog) {
    return <div className="blog-detail-notfound">Blog post not found.</div>;
  }

  return (
    <div className="blog-detail" ref={containerRef}>
      <div className="blog-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <p className="category">{blog.category}</p>
        <h1 className="title">{blog.title}</h1>
        <div className="meta">
          <span><BsCalendar2Date /> {blog.date.toLocaleDateString()}</span>
          <span><MdOutlineThumbUpOffAlt /> {blog.likeCount}</span>
          <span><FaRegCommentDots /> {blog.commentCount}</span>
        </div>

        <img
          className="cover-image"
          src={blog.image}
          alt={blog.title}
          onError={(e) => (e.target.src = "fallback.jpg")}
        />

        {blog.images && blog.images.length > 0 && (
          <div className="blog-gallery">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              {blog.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx}`}
                  onError={(e) => (e.target.src = "fallback.jpg")}
                />
              ))}
            </div>
          </div>
        )}

        <div className="content">
          {blog.content ? (
            blog.content.split('\n').map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>No content provided for this post.</p>
          )}
        </div>

        <div className="social-share">
          <h4>Share this post:</h4>
          <div className="icons">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="related-posts">
          <h3>Related Posts</h3>
          <div className="related-posts-container">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((related, i) => (
                <div key={i} className="related-post">
                  <img src={related.image} alt={related.title} onError={(e) => e.target.src = "fallback.jpg"} />
                  <h4>{related.title.slice(0, 60)}...</h4>
                  <button className="btn" onClick={() => navigate(`/blog/${slugify(related.title)}`)}>Read More</button>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="follow-us-section">
        <h4>Follow us on:</h4>
        <div className="social-icons">
          <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com/company/YOUR_PAGE" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.youtube.com/channel/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://instagram.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
