import { useRef, useEffect } from "react"
import "./GetQuote.css"
import { services } from "../../data"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)



const GetQuote = () => {
  const container = useRef(null)
 
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      })
      timeline
        .fromTo(".quote_form", { x: -100, opacity: 0 }, { opacity: 1, x: 0 })
        .fromTo(".info_card", { x: 100, opacity: 0 }, { opacity: 1, stagger: 0.5, x: 0 })
    },
    { scope: container },
  )
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh
    const form = e.target;
  
    const data = {
      firstName: form.Firstname.value,
      lastName: form.Lastname.value,
      email: form.email.value,
      phone: form.Phone.value,
      service: form.service.value,
      details: form.projectDetails.value,
      budget: form.budget.value,
      timeline: form.timeline.value,
      files: form.projectFiles.files,
    };
  
    console.log("Form Submitted:", data);
    // You can send 'data' to an API or third-party service here
  };
  

  return (
    <section id="get-quote" ref={container}>
      <div className="container">
        <div className="quote_form">
          <div className="quote_form_top">
            <h1 className="title">
              <span className="g-text">Get a Custom Quote</span>
            </h1>
            <p className="text_muted">
              Tell us about your project and we'll provide you with a detailed estimate tailored to your specific needs.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="quote_form_middle">
                <div className="row">
                <input type="text" placeholder="First name" name="Firstname" className="control" />
                <input type="text" placeholder="Last name" name="Lastname" className="control" />
                </div>
                <div className="row">
                <input type="email" placeholder="Email address" name="email" className="control" />
                <input type="tel" placeholder="Phone number" name="Phone" className="control" />
                </div>
                <div className="row">
                <select name="service" className="control" defaultValue="">
                    <option value="" disabled>
                    Select service required
                    </option>
                    {services.map((service, index) => (
                    <option key={index} value={service.name}>
                        {service.name}
                    </option>
                    ))}
                </select>
                </div>
                <textarea
                name="projectDetails"
                cols={30}
                rows={5}
                placeholder="Project details/scope"
                className="control"
                ></textarea>
                <div className="row">
                <select name="budget" className="control" defaultValue="">
                    <option value="" disabled>
                    Budget range (optional)
                    </option>
                     <option value="under5k">Under ₦500,000</option>
                    <option value="5k-10k">₦500,000 - ₦5,000,000</option>
                    <option value="10k-25k">₦5,000,000 - ₦50,000,000</option>
                    <option value="25k-50k">₦50,000,000 - ₦500,000,000</option>
                    <option value="over50k">Over ₦500,000,000</option>
                                  </select>
                <input type="text" placeholder="Timeline (e.g., 2 months)" name="timeline" className="control" />
                </div>
                <div className="file_upload">
                <label htmlFor="fileUpload" className="file_label">
                    <span>Upload project files (optional)</span>
                </label>
                <input type="file" id="fileUpload" name="projectFiles" className="file_input" multiple />
                <p className="file_info text_muted">Max file size: 10MB (PDF, DOC, JPG, PNG)</p>
                </div>
            </div>
            <div className="quote_form_bottom">
                <button className="btn btn_primary">Request Quote</button>
            </div>
          </form>
        </div>
        
        <div className="quote_info">
          <div className="info_card">
            <div className="icon_container">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="name">Quick Response</h3>
            <h4 className="text_muted">We'll get back to you within 24 hours</h4>
          </div>
          <div className="info_card">
            <div className="icon_container">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="name">No Obligation</h3>
            <h4 className="text_muted">Our quotes are free with no commitment required</h4>
          </div>
          <div className="info_card">
            <div className="icon_container">
              <i className="fas fa-file-contract"></i>
            </div>
            <h3 className="name">Detailed Estimate</h3>
            <h4 className="text_muted">Receive a comprehensive breakdown of costs</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetQuote

