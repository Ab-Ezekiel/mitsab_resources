import React from 'react'
import "./Footer.css"
import Logo from '../Logo'
import { Link } from 'react-scroll'
import { footer, teams } from '../../data'


const Footer = () => {
  return (
    <footer id='footer'>
      <div className="row">
        <div className="column">
          <Logo/>
          <p className='mission-text'>
            Mitsab Resources Global Limited (MIREGL) is a Nigerian company delivering sustainable solutions across construction, 
            exploration, and environmental sectors. We manage specialized subsidiaries and are driven by local content and excellence.
          </p>
          <form action="" className='newsletter'>
            <h3>Get weekly update</h3>
            <div className="control_container">
              <input type="email" placeholder='Enter your email address' className='control' />
              <button className="btn" type='button' >Subscribe</button>
            </div>
          </form>
        </div>
        
        {footer.map((list, index) => (
          <div className="column" key={index}>
            <div className="routes_name">{list.name}</div>
            <div className="routes_container">
              {list.routes.map((route, i) => (
                route.id ? (
                  <Link to={route.id} className='route_item' key={i}>
                    <p className="name">{route.name}</p>
                  </Link>
                ) : (
                  <span className='route_item' key={i}>
                    <p className="name">{route.name}</p>
                  </span>
                )
              ))}
            </div>
          </div>
        ))}

        
      </div>
        
      <div className="copyright">
        <div className='social-container'>
          <p>Follow Us</p>
          <div className='socials'>
            {
              teams[0].social.map((item,i)=>(
                <a href={item.url || "#"} target='_blank' className="icon_container" key={i}>
                  {item.icon}
                </a>
              ))
            }
          </div>

        </div>
        <div className="container">
          <h3>Copyright &copy; 2025 | All Rights Reserved</h3>
          <p className="text_muted">Developed with precision and care by Manful Technologies</p>

          {/* DUNS Seal will appear here */}
          <div id="DunsRegisteredSeal"></div>
        </div>
        
      </div>
      
    </footer>
  )
}

export default Footer
