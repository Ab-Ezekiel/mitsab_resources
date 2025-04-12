import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdPlumbing } from "react-icons/md";
import { GiDrill } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { MdLandscape } from "react-icons/md";

import { RiWaterFlashFill } from "react-icons/ri";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    
];

export const services = [
  {
    id: 1,
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },

  {
    id:2,
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },

  {
    id: 3,
    name:"Minor Civil Maintainance",
    icon:<FaDrawPolygon/>,
    description:`Mitsab Resources specializes in providing tailored solutions for various 
        infrastructure maintenance needs, including road repairs and sidewalk maintenance
       .

    `,
  },
 
  {
    id:4,
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    id:5,
    name:"Pre-Construction Services",
    icon:<AiOutlineFileProtect/>,
    description:`Mitsab Resources ensures a solid project foundation through detailed feasibility 
        studies and precise cost estimations. Their thorough planning and risk assessments help identify 
        challenges before construction begins.`,
  },
  {
    id:6,
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, welding and fabrication steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
  {
    id:7,
    name:"Manpower Supply and Management",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    id:8,
    name:"Borehole Drilling Services",
    icon:<RiWaterFlashFill/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
        as land clearing, excavation, grading, and utility installation to ensure the site is ready 
        for building.`,
  },
  {
    id:9,
    name:"Earthwork Landscaping",
    icon:<MdLandscape/>,
    description:`This involves grading, excavation, and designing functional yet 
        aesthetically pleasing outdoor spaces. It balances practical land development with artistic 
        landscaping, creating environments that harmonize with surrounding architecture and nature.`,
  },
]

// src/data.jsx
export const servicesDetail = [
  {
    id: "construction-services",
    name: "Construction Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Construction Services:`,
    detailsInfo1: `Comprehensive Solutions:`,
    additionaldetailsInfo1: `End-to-end construction services, covering project conceptualization, design, management, and final delivery.`,
    detailsInfo2: `Versatility and Expertise`,
    additionaldetailsInfo2: `Skilled in residential, commercial, and industrial construction projects, backed by a team of seasoned professionals.`,
    detailsInfo3: `Commitment to Quality`,
    additionaldetailsInfo3: `Delivers projects to the highest standards of craftsmanship with a focus on excellence.`,
    detailsInfo4: `Innovation-Driven Approach`,
    additionaldetailsInfo4: `Leverages cutting-edge technologies and industry best practices for efficiency and precision.`,
    detailsInfo5: `Client-Centered Collaboration `,
    additionaldetailsInfo5: ` Works closely with clients, architects, and stakeholders to align with unique project goals.`,
    detailsInfo6: `Timely and Budget-Friendly Execution `,
    additionaldetailsInfo6: `Ensures projects are completed on schedule and within budget.`,
    detailsInfo7: `Dedication to Excellence`,
    additionaldetailsInfo7: `A trusted partner for elevating construction projects with unmatched expertise and strategic planning.`,
    contactMessage: `Contact us today to ensure your construction projects meet the highest standards of quality and safety`
  },
  {
    id: "project-and-program-management-services",
    name: "Project and Program Management",
    detailImage: building_5,
    details_subheading: `Key Features of Mitsab Resources' Project and Program Management Services:`,
    detailsInfo1: `Comprehensive Services:`,
    additionaldetailsInfo1: `From initial planning and scheduling to risk assessment and execution oversight.`,
    detailsInfo2: `Expert Team:`,
    additionaldetailsInfo2: `Professionals with precision and efficiency in handling every aspect of project management.`,
    detailsInfo3: `Strategic Approach:`,
    additionaldetailsInfo3: `Projects delivered on time, within budget, and to the highest standards of quality.`,
    detailsInfo4: `Cutting-Edge Tools:`,
    additionaldetailsInfo4: `Leveraging advanced tools and methodologies for optimal results.`,
    detailsInfo5: `Client-Centered Focus: `,
    additionaldetailsInfo5: ` Transparent communication and tailored solutions to meet unique project goals.`,
    detailsInfo6: `Collaborative Environment:`,
    additionaldetailsInfo6: `Close collaboration with clients, architects, and stakeholders to ensure cohesive project execution.`,
    detailsInfo7: `Proven Expertise:`,
    additionaldetailsInfo7: `A trusted leader in construction management, navigating complex challenges with excellence.`,
    contactMessage: `Reach out to us for expert project and program management, ensuring efficiency and successful execution`
  },
  {
    id: "manpower-supply-and-management-Services",
    name: "Manpower Supply and Management Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Manpower Supply and Management Services`,
    detailsInfo1: `Comprehensive Workforce Solutions:`,
    additionaldetailsInfo1: `Provides skilled labor and project management professionals for diverse construction needs.`,
    detailsInfo2: `Tailored Manpower Services:`,
    additionaldetailsInfo2: `Offers customized workforce solutions for both short-term assignments and long-term engagements.`,
    detailsInfo3: `Expert Workforce Deployment:`,
    additionaldetailsInfo3: `Ensures the right individuals with the necessary skills and expertise are matched to project-specific demands.`,
    detailsInfo4: `Training and Development:`,
    additionaldetailsInfo4: `Implements continuous training and performance evaluations to maintain productivity and quality.`,
    detailsInfo5: `Efficient Manpower Management:`,
    additionaldetailsInfo5: `Monitors and oversees workforce performance to ensure seamless project execution and adherence to timelines.`,
    detailsInfo6: `Focus on Client Needs: `,
    additionaldetailsInfo6: `Collaborates closely with clients to meet their unique manpower requirements and expectations.`,
    detailsInfo7: `Commitment to Excellence:`,
    additionaldetailsInfo7: `Delivers professionalism, efficiency, and reliability, empowering projects with a well-managed workforce.`,
    contactMessage:`Let us provide you with skilled manpower and seamless workforce management for your projects`
  },
  {
    id: "renovation-and-remodeling",
    name: "Renovation and Remodeling",
    detailImage: building_5,
    details_subheading: `Key Features of Mitsab Resources' Renovation and Remodeling`,
    detailsInfo1: `Comprehensive Renovation Solutions:`,
    additionaldetailsInfo1: `Offers tailored services for residential, commercial, and industrial properties, addressing both minor repairs and major overhauls.`,
    detailsInfo2: `Skilled Professional Team:`,
    additionaldetailsInfo2: `Leverages the expertise of seasoned professionals to ensure precision and quality in every project.`,
    detailsInfo3: `State-of-the-Art Techniques:`,
    additionaldetailsInfo3: `Utilizes cutting-edge technologies to revitalize and modernize existing structures.`,
    detailsInfo4: `Attention to Detail:`,
    additionaldetailsInfo4: `Focuses on every aspect of the renovation, from structural enhancements to intricate interior transformations.`,
    detailsInfo5: `Client-Centered Approach: `,
    additionaldetailsInfo5: `Collaborates closely with clients to align renovations with their vision and unique requirements.`,
    detailsInfo6: `Enhanced Property Value: `,
    additionaldetailsInfo6: `Delivers solutions that not only improve aesthetics but also enhance the functionality and market value of properties.`,
    detailsInfo7: `Seamless Project Execution:`,
    additionaldetailsInfo7: `Ensures a smooth and stress-free renovation process, from initial consultation to project completion.`,
    contactMessage:`Upgrade your space with our top-notch renovation and remodeling services. Contact us today`
  },
  {
    id: "minor-civil-maintenance-services",
    name: "Minor Civil Maintenance Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources'  Minor Civil Maintenance Services`,
    detailsInfo1: `Expertise in Minor Civil Maintenance:`,
    additionaldetailsInfo1: `Mitsab Resources specializes in providing tailored solutions for various infrastructure maintenance needs, including road repairs and sidewalk maintenance.`,
    detailsInfo2: `Timely and Efficient Solutions:`,
    additionaldetailsInfo2: `The company is known for delivering prompt and effective responses to maintenance issues, ensuring minimal disruption.`,
    detailsInfo3: `Precision and Attention to Detail:`,
    additionaldetailsInfo3: `Mitsab Resources is dedicated to addressing even the smallest details, ensuring high-quality outcomes for all projects.`,
    detailsInfo4: `Proactive Approach:`,
    additionaldetailsInfo4: `The team proactively identifies and addresses issues before they escalate, safeguarding the integrity of infrastructure.`,
    detailsInfo5: `Comprehensive Service Range:`,
    additionaldetailsInfo5: `From pothole repairs to sidewalk enhancements, Mitsab Resources covers a wide range of civil maintenance services.`,
    detailsInfo6: `Skilled and Dedicated Team:`,
    additionaldetailsInfo6: `The company boasts a team of professionals with extensive industry experience, committed to excellence and client satisfaction.`,
    detailsInfo7: `Enhancing Community Safety:`,
    additionaldetailsInfo7: `By maintaining essential civic amenities, Mitsab Resources contributes to the overall safety and functionality of local communities.`,
    contactMessage: `Ensure your infrastructure remains in top condition with our minor civil maintenance solutions`
  },
  {
    id: "specialty-construction-services",
    name: "Specialty Construction Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Specialty Construction Services:`,
    detailsInfo1: `Welding and Fabrication Expertise:`,
    additionaldetailsInfo1: `Provides structural and custom welding solutions, ensuring durability and precision in every project.`,
    detailsInfo2: `Electrical Systems Solutions:`,
    additionaldetailsInfo2: `Specializes in street lighting systems, electrical installations for buildings and industries, and maintenance of electrical machines like generators and motors.`,
    detailsInfo3: `Roofing Excellence:`,
    additionaldetailsInfo3: `Delivers top-notch roofing services tailored to the unique needs of residential, commercial, and industrial projects.`,
    detailsInfo4: `Concrete and Structural Integrity:`,
    additionaldetailsInfo4: `Offers high-quality concrete work for robust and reliable construction foundations and structures.`,
    detailsInfo5: `Plumbing Services:`,
    additionaldetailsInfo5: `Provides comprehensive plumbing solutions, including water systems installation and maintenance for diverse construction needs.`,
    detailsInfo6: `Steel Erection and Scaffolding: `,
    additionaldetailsInfo6: `Ensures safe and efficient steel erection, scaffolding, and structural assembly for complex projects.`,
    detailsInfo7: `Tailored Construction Trades:`,
    additionaldetailsInfo7: `Offers specialized trades like tiling, masonry, and finishing, customized to meet specific project requirements.`,
    contactMessage: `For specialized construction solutions tailored to your needs, get in touch with us today`
  },
  {
    id: "earthwork-landscaping",
    name: "Earthwork Landscaping",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Earthwork Landscaping`,
    detailsInfo1: `Comprehensive Landscaping Solutions:`,
    additionaldetailsInfo1: `Provides grading, excavation, and the creation of functional and aesthetically pleasing outdoor spaces.`,
    detailsInfo2: `Expert Team and Advanced Equipment:  `,
    additionaldetailsInfo2: `Employs skilled professionals and state-of-the-art machinery for precise and efficient land transformation.`,
    detailsInfo3: `Holistic Approach: `,
    additionaldetailsInfo3: `Balances the practical aspects of land development with the artistic elements of landscaping design.`,
    detailsInfo4: `Tailored Services: `,
    additionaldetailsInfo4: `Customizes solutions to meet the unique needs and visions of residential and commercial projects.`,
    detailsInfo5: `Seamless Integration:`,
    additionaldetailsInfo5: `Designs landscapes that harmonize with the surrounding architecture and environment.`,
    detailsInfo6: `Commitment to Quality: `,
    additionaldetailsInfo6: `Ensures high standards in every project, from initial terrain preparation to final landscaping touches.`,
    detailsInfo7: `Transformative Outdoor Spaces: `,
    additionaldetailsInfo7: `Creates lasting impressions by reshaping landscapes into visually stunning and functional environments.`,
    contactMessage: `Transform your land with professional earthwork and landscaping services. Contact us for a consultation`
  },
  {
    id: "borehole-drilling-services",
    name: "Borehole Drilling Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Manpower Supply and Management Services`,
    detailsInfo1: `Comprehensive Borehole Solutions:`,
    additionaldetailsInfo1: `Covers all aspects from site assessment and geological surveys to high-quality borehole installation.`,
    detailsInfo2: `State-of-the-Art Equipment: `,
    additionaldetailsInfo2: `Utilizes advanced drilling technology operated by skilled professionals for precise and efficient water access.`,
    detailsInfo3: `Customized Services: `,
    additionaldetailsInfo3: `Tailors borehole drilling solutions to meet the unique requirements of residential, commercial, and agricultural needs.`,
    detailsInfo4: `Focus on Sustainability: `,
    additionaldetailsInfo4: `Ensures long-term water resource accessibility with environmentally responsible practices.`,
    detailsInfo5: `Reliable Water Supply Systems:`,
    additionaldetailsInfo5: `Delivers not just a borehole but a dependable and efficient water source for diverse applications.`,
    detailsInfo6: `Commitment to Quality: `,
    additionaldetailsInfo6: `Prioritizes precision, efficiency, and excellence throughout the drilling process, from assessment to completion.`,
    detailsInfo7: ``,
    additionaldetailsInfo7: ``,
    contactMessage: `Secure a reliable water source with our professional borehole drilling services. Reach out today`
  },
  {
    id: "pre-construction services",
    name: "Pre-Construction Services",
    detailImage: building_5,
    detailsHeading: `Key Features of Mitsab Resources' Pre-Construction Services`,
    detailsInfo1: `Industry-Leading Expertise:`,
    additionaldetailsInfo1: `Mitsab Resources is renowned for providing innovative and comprehensive pre-construction services, setting the foundation for successful projects.`,
    detailsInfo2: `Collaborative Approach:  `,
    additionaldetailsInfo2: `The company works closely with clients, architects, and stakeholders to ensure alignment on goals, vision, and expectations throughout the planning phase.`,
    detailsInfo3: `Feasibility Studies & Cost Estimations: `,
    additionaldetailsInfo3: `Mitsab Resources conducts detailed feasibility studies and precise cost estimations to ensure every project begins with a solid foundation.`,
    detailsInfo4: `Meticulous Planning & Risk Assessment:  `,
    additionaldetailsInfo4: `Their approach includes thorough planning and risk assessments, identifying potential challenges before construction begins.`,
    detailsInfo5: `Value Engineering:`,
    additionaldetailsInfo5: `Mitsab Resources optimizes project timelines and budgets while maintaining high standards of quality through value engineering techniques.`,
    detailsInfo6: `Transparent & Collaborative Process:`,
    additionaldetailsInfo6: `The company empowers clients with a transparent and open process, enabling informed decision-making at every pre-construction stage.`,
    detailsInfo7: `Commitment to Successful Execution: `,
    additionaldetailsInfo7: `Selecting Mitsab Resources for pre-construction services ensures a seamless journey from concept to construction, driven by strategic insights and careful planning.`,
    contactMessage: `Start your projects the right way with our expert pre-construction planning and consulting`
  },
  // Add more details for other services...
];


export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Residential Development Project",
    image:building_5,
    description:`A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title:"Commercial Office Building",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"Retail Space Renovation",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"Industrial Warehouse Construction",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title:"Historic Building Restoration",
    image:building_9,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title:"Educational Facility Expansion",
    image:building_10,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:blog_2,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image:blog_3,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"mradinuba@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+2348149121918",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Gwarinpa, Abuja, Nigeria",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


