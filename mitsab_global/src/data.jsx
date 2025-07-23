import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon, FaTools } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdPlumbing } from "react-icons/md";
import { GiCargoShip, GiDrill, GiGearHammer, GiJeweledChalice } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { MdLandscape } from "react-icons/md";
import { slugify } from "./utils/slugify";
import { RiWaterFlashFill } from "react-icons/ri";

import { home_image2,infras, infras2,soak_away_pit, soak_away_pit1, soak_away_pit2,
         member1, member2, member3, member4,building_res, building_res1,
       Renovation_hospital,Renovation_hospital1,
         borehole_image, borehole_image2, mitsab_maintenance,tank_maintenance,
        portacabin,portacabin1, portacabin2, portacabin3, portacabin4,
        Rd_const,
        storage_tank_base,
        storage_tank_base1,
        oando_logo,
        frontier_logo,
        alscon_logo,
        rusal_logo,
        nepn_logo,
        bp_marine_logo,
        mgt,
        mgt1,
        mgt2,
        welding,
        welding1,
        welding2,
        welding3,
        welding4,
        welding6,
        welding5,
        cat_video,
        cat,
        cat1,
        cat2,
        cat4} from "./assets";

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
    detailId: "construction-services",
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },

  {
    id:2,
    detailId: "project-and-program-management-services",
    name: "Project and Program Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },

  {
    id: 3,
    detailId: "minor-civil-maintenance-services",
    name:"Minor Civil Maintainance",
    icon:<FaDrawPolygon/>,
    description:`Mitsab Resources specializes in providing tailored solutions for various 
        infrastructure maintenance needs, including road repairs and sidewalk maintenanc

    `,
  },
 
  {
    id:4,
    detailId: "renovation-and-remodeling",
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    id: 6,
    detailId: "welding-and-fabrication-services",
    name: "Welding & Fabrication Services",
    icon: <FaTools />,
    description: `We provide expert welding and metal fabrication services for structural steel, piping, supports, and other custom metal works, ensuring durability, precision, and adherence to safety standards.`,
  },
  {
    id:5,
    detailId: "pre-construction-services",
    name:"Pre-Construction Services",
    icon:<AiOutlineFileProtect/>,
    description:`Mitsab Resources ensures a solid project foundation through detailed feasibility 
        studies and precise cost estimations. Their thorough planning and risk assessments help identify 
        challenges before construction begins.`,
  },


  {
    id:7,
    detailId: "manpower-supply-and-management-Services",
    name:"Manpower Supply and Management",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    id:8,
    detailId: "borehole-drilling-services",
    name:"Borehole Drilling Services",
    icon:<RiWaterFlashFill/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
        as land clearing, excavation, grading, and utility installation to ensure the site is ready 
        for building.`,
  },
  {
    id:9,
    detailId: "earthwork-landscaping",
    name:"Earthwork Landscaping",
    icon:<MdLandscape/>,
    description:`This involves grading, excavation, and designing functional yet 
        aesthetically pleasing outdoor spaces. It balances practical land development with artistic 
        landscaping, creating environments that harmonize with surrounding architecture and nature.`,
  },
  {
  id: 10,
  detailId: "cat-engine-service",
  name: "CAT Engine Service & Maintenance",
  icon: <GiGearHammer />,
  description: `We offer specialized servicing, repairs, and routine maintenance for CAT engines 
    and heavy-duty equipment to ensure peak performance, durability, and minimal downtime.`,
},

{
  id: 11,
  detailId: "marine-services",
  name: "Marine Transportation Services",
  icon: <GiCargoShip />,
  description: `We offer safe and reliable boat transport services to nearby islands, 
    ensuring smooth movement of passengers, goods, and equipment across local waterways.`,
},

]

// src/data.jsx
export const servicesDetail = [
  {
    id: "construction-services",
    name: "Construction Services",
    detailImage: infras2,
    detailsHeading: `Building Excellence: MITSAB RESOURCES GLOBAL LIMITED Unveils Comprehensive Construction Services`,
    detailsDescription1: `
      MITSAB RESOURCES GLOBAL LIMITED proudly introduces its Comprehensive Construction Services, 
      embodying a commitment to delivering excellence in every facet of the construction process. 
      As a distinguished leader in the industry, Mitsab Reasources specializes in providing end-to-end 
      construction solutions, ensuring the seamless realization of diverse projects.`,
    detailsDescription2:`
      Mitsab Reasources’ Comprehensive Construction Services encompass a wide spectrum of capabilities, 
      from project conceptualization and design to construction management and final delivery. The company 
      recognizes the multifaceted nature of construction projects and is equipped with a team of seasoned 
      professionals who excel in their respective fields. Whether it’s residential, commercial, or industrial 
      construction, Mistab Reasources is dedicated to bringing client visions to life with precision and expertise.`,
    moreDetailImages: [soak_away_pit1, soak_away_pit2, tank_maintenance, infras],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its commitment to quality, innovation, and client satisfaction. 
      The company prioritizes collaboration with clients, architects, and stakeholders to ensure that each 
      project aligns with the unique goals and requirements of the client. Mitsab Reasources leverages cutting-edge 
      technologies and industry best practices to deliver projects on time, within budget, and to the highest standards of craftsmanship.`,
    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your construction needs, you are partnering with a company dedicated to 
      building excellence. With a focus on comprehensive services, strategic planning, and a commitment to exceeding client 
      expectations, Mitsab Reasources is poised to elevate your construction projects to new heights through its unparalleled construction services.`,
      contactMessage: "Contact us today to ensure your construction projects meet the highest standards of quality and safety"
  },
  {
    id: "project-and-program-management-services",
    name: "Project and Program Management",
    detailImage: mgt,
    detailsHeading: `Guiding Success: MITSAB RESOURCES GLOBAL LIMITED Unveils Project and Program Management Expertise`,
    detailsDescription1: `
      Mitsab Reasources Global Limited proudly introduces its Project and Program Management Services, showcasing a 
      commitment to orchestrating seamless and successful construction projects. As a distinguished leader in the 
      industry, Mitsab Reasources specializes in providing comprehensive project and program management solutions, 
      essential for delivering projects on time and within budget. detailsDescription2:`,
    detailsDescription2:`
      Mitsab Reasources Project and Program Management Services encompass a wide spectrum of responsibilities, from 
      initial planning and scheduling to risk assessment and execution oversight. The company understands the pivotal 
      role that effective project management plays in the success of construction endeavors. With a team of seasoned 
      professionals, Mitsab Reasources is equipped to handle the complexities of diverse projects, ensuring a strategic 
      and streamlined approach from inception to completion.`,

    moreDetailImages: [mgt1, mgt2],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its commitment to client satisfaction through transparent communication and tailored solutions. 
      The company collaborates closely with clients, architects, and stakeholders, fostering a collaborative environment to ensure that 
      project goals are met. Mitsab Reasources employs cutting-edge project management tools and methodologies to optimize efficiency and 
      adaptability in ever-changing construction landscapes.`,
    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your project and program management needs, you are investing in a partner dedicated 
      to the success and efficiency of your construction projects. With a focus on excellence, strategic planning, and a commitment to exceeding 
      client expectations, Mitsab Reasources is poised to guide your projects to success through unparalleled project and program management expertise.`,
    contactMessage: "Contact us today to ensure your construction projects meet the highest standards of quality and safety"
  },
  {
    id: "manpower-supply-and-management-services",
    name: "Manpower Supply and Management Services",
    detailImage: infras,
    detailsHeading: `Empowering Projects with Excellence: MITSAB RESOURCES GLOBAL LIMITED’s Manpower Supply and Management Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited proudly introduces its Manpower Supply and Management Services, a testament to its 
      commitment to delivering exceptional construction solutions. As a leading player in the industry, Mitsab Reasources 
      specializes in providing skilled and reliable manpower to drive the success of diverse projects.`,
    detailsDescription2:`
      Mitsab Reasources Manpower Supply and Management Services cover a spectrum of roles, from skilled labor to project management professionals. 
      The company recognizes the importance of having a competent and efficient workforce to ensure the seamless execution of construction projects. 
      Whether its a short-term assignment or a long-term engagement, Mitsab Reasources tailors its services to meet the specific requirements of each client.`,

    moreDetailImages: [infras2],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its meticulous approach to manpower management. The company goes beyond merely supplying personnel; it takes on the 
      responsibility of ensuring that the right individuals, with the necessary skills and expertise, are deployed to match the unique demands of each project. 
      This includes continuous monitoring, training, and performance evaluation to guarantee optimal productivity and adherence to project timelines.`,
    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your manpower supply and management needs, you are investing in a partner dedicated to the success of 
      your projects. With a focus on efficiency, professionalism, and a commitment to exceeding client expectations, Mitsab Reasources is poised to empower 
      your construction endeavors with a skilled and managed workforce.`,
    contactMessage: "Contact us today to ensure your construction projects meet the highest standards of quality and safety"
  },
  {
    id: "renovation-and-remodeling",
    name: "Renovation and Remodeling",
    detailImage: Renovation_hospital,
    detailsHeading: `Elevate Your Spaces with MITSAB RESOURCES GLOBAL LIMITED Expert Building Renovation Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited stands at the forefront of the construction industry, offering unparalleled expertise in building renovation 
      that transforms spaces into modern, functional, and aesthetically pleasing environments. As a premier construction company, Mitsab Reasources 
      is dedicated to delivering top-notch services to meet the evolving needs of clients.`,
    detailsDescription2:`

      Building renovation is a cornerstone of Mitsab Reasources comprehensive suite of offerings. The company leverages a team of skilled professionals 
      and cutting-edge technologies to breathe new life into existing structures. Whether you are looking to revitalize a residential space or enhance the 
      functionality of a commercial building, Mitsab Reasources takes pride in delivering tailored solutions that align with your vision.`,

    moreDetailImages: [Renovation_hospital1, portacabin2, portacabin3, portacabin4],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its commitment to quality craftsmanship and attention to detail. From structural enhancements to interior transformations, 
      the company ensures that every aspect of the renovation process is executed with precision. Clients can expect a seamless experience, from initial 
      consultation to project completion, as Mitsab Reasources collaborates closely to understand their unique requirements.`,

    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your building renovation needs, you are investing in a partner dedicated to enhancing the value 
      and aesthetics of your property. Elevate your spaces with Mitsab Reasources and experience the transformative power of expert building renovation 
      services.`,    
    contactMessage: "Contact us today to ensure your construction projects meet the highest standards of quality and safety"
  },
  {
    id: "minor-civil-maintenance-services",
    name: "Minor Civil Maintenance Services",
    detailImage: Rd_const,
    detailsHeading: `Precision and Excellence in Infrastructure Maintenance: Mitsab Reasources Global Limited’s Tailored Minor Civil Maintenance Solutions`,
    detailsDescription1: `
      Mitsab Reasources Global Limited stands as a distinguished player in the construction industry, offering unparalleled proficiency in Minor Civil Maintenance. 
      Acknowledged as the favored option for clients seeking meticulous attention to detail, Mitsab Reasources brings extensive experience and an unwavering 
      commitment to excellence to every minor civil maintenance initiative.`,
    detailsDescription2:`

      Within the domain of Minor Civil Maintenance, Mitsab Reasources excels in delivering prompt and effective solutions for diverse infrastructure needs. 
      Whether addressing road repairs, sidewalk maintenance, or other critical civic amenities, Mitsab Reasources ensures that each project is approached 
      with precision and diligence. The company’s dedicated team of professionals seamlessly combines industry know-how with practical experience, 
      consistently surpassing expectations.`,
    moreDetailImages: [storage_tank_base, storage_tank_base1 ],
    detailsDescription3:`
      Mitsab Reasources sets itself apart through its proactive approach to Minor Civil Maintenance, swiftly addressing issues to prevent escalation. 
      The company’s commitment to quality and efficiency is evident in its seamless execution of tasks, encompassing everything from patching up 
      potholes to enhancing sidewalk infrastructure, thereby contributing to the overall safety and functionality of the community.`,
    detailsDescription4:`
      Opting for Mitsab Reasources Global Limited for Minor Civil Maintenance needs means selecting a partner that recognizes the importance of 
      even the minutest details in infrastructure care. With Mitsab Reasources, clients can anticipate a reliable and dedicated team committed 
      to preserving and enhancing the integrity of civil structures, ensuring their longevity, and fostering community satisfaction. Experience 
      precision and excellence in Minor Civil Maintenance with Mitsab Reasources.`,    
    contactMessage: "Contact us today to ensure your construction projects meet the highest standards of quality and safety"
  },
  {
    id: "welding-and-fabrication-services",
    name: "Welding and Fabrication Services",
    detailImage: welding5,
    detailsHeading: `Crafting Excellence: MITSAB RESOURCES GLOBAL LIMITED Unveils Welding and Fabrication Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited proudly introduces its Welding and Fabrication Services, underscoring its dedication to delivering top-tier 
      construction solutions. As a prominent force in the industry, Mitsab Reasources specializes in providing precision welding and fabrication 
      expertise, essential for the success of a diverse array of projects.`,
    detailsDescription2:`

      Mitsab Reasources’ Welding and Fabrication Services cover a comprehensive range of applications, from structural welding to intricate 
      fabrication projects. The company recognizes the pivotal role that welding and fabrication play in ensuring the integrity and quality 
      of construction endeavors. With a team of skilled welders and fabricators, Mitsab Reasources is equipped to meet the unique needs and 
      specifications of each client.`,
    moreDetailImages: [welding1, welding2, welding3, welding4, welding, welding6],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its commitment to craftsmanship and attention to detail. The company not only provides welding and 
      fabrication services but also collaborates closely with clients to understand their design visions and project requirements. 
      Whether it’s creating custom structures or conducting on-site welding, Mitsab Reasources ensures that every project is 
      executed with precision and excellence.`,
    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your welding and fabrication needs, you are investing in a partner dedicated 
      to the success and longevity of your structures. With a focus on quality, expertise, and a commitment to surpassing client 
      expectations, Mitsab Reasources stands ready to elevate your construction projects through exceptional welding and fabrication services.`,    
    contactMessage: "Contact us today to ensure your metal construction projects meet the highest standards of quality and safety"
  },
  {
    id: "earthwork-landscaping",
    name: "Earthwork Landscaping",
    detailImage: home_image2 ,
    detailsHeading: `Transforming Terrain with Expertise: MITSAB RESOURCES GLOBAL LIMITED’s Earthwork Landscaping Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited proudly showcases its prowess in the construction industry, introducing Earthwork Landscaping 
      as a standout service that harmoniously blends functionality with aesthetic appeal. As a leading construction company, Mitsab 
      Reasources is committed to reshaping and enhancing outdoor spaces through innovative earthwork landscaping solutions.`,
    detailsDescription2:`

      The Earthwork Landscaping services offered by Mitsab Reasources encompass a wide range of capabilities, from grading and excavation 
      to the creation of inviting outdoor environments. With a team of skilled professionals and cutting-edge equipment, Mitsab Reasources 
      transforms raw terrain into thoughtfully designed landscapes that seamlessly integrate with the surrounding architecture.`,
    moreDetailImages: [Rd_const, storage_tank_base, home_image2],
    detailsDescription3:`
      What sets Mitsab Reasources apart is its holistic approach to earthwork landscaping, considering both the practical aspects of land 
      development and the artistic elements of creating visually stunning outdoor spaces. Whether it’s a residential property or a 
      commercial development, Mitsab Reasources tailors its services to meet the unique needs and visions of each client.`,
    detailsDescription4:`
      By choosing Mitsab Reasources Global Limited for your earthwork landscaping needs, you are investing in a partner dedicated to 
      elevating the outdoor aesthetics of your project. With a commitment to quality and a passion for transforming landscapes, 
      Mitsab Reasources stands ready to turn your vision into a reality, creating outdoor spaces that leave a lasting impression.`,    
    contactMessage: "Transform your land with professional earthwork and landscaping services. Contact us for a consultation"
    },
  {
    id: "borehole-drilling-services",
    name: "Borehole Drilling Services",
    detailImage: borehole_image,
    detailsHeading: `Tapping into Expertise: MITSAB RESOURCES GLOBAL LIMITED Introduces Borehole Drilling Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited, a leader in the construction industry, proudly unveils its Borehole Drilling Services, 
      showcasing a commitment to providing reliable and efficient water solutions. With a focus on sustainability and resource 
      accessibility, Mitsab Reasources brings unparalleled expertise to the forefront of borehole drilling services.`,
    detailsDescription2:`

      The Borehole Drilling Services offered by Mitsab Reasources encompass a comprehensive range of capabilities, from site 
      assessment and geological surveys to the installation of high-quality boreholes. The company employs state-of-the-art drilling 
      equipment operated by skilled professionals, ensuring precision in accessing clean and sustainable water sources.`,
    moreDetailImages: [borehole_image2],
    detailsDescription3:`
      Mitsab Reasources understands the critical role that water plays in various settings, be it for residential, commercial, 
      or agricultural purposes. The company’s borehole drilling services are tailored to meet the unique needs of each client, 
      taking into consideration factors such as water demand, geological conditions, and long-term sustainability.`,
    detailsDescription4:`
      What sets Mitsab Reasources apart is its dedication to delivering not just a borehole but a reliable water supply system. 
      From initial assessment to the completion of drilling projects, Mitsab Reasources prioritizes quality, efficiency, 
      and environmental responsibility. By choosing Mitsab Reasources Global Limited for your borehole drilling needs, you 
      are partnering with experts committed to ensuring access to a dependable and sustainable water source for your specific requirements.`,    
    contactMessage: "Secure a reliable water source with our professional borehole drilling services. Reach out today" 
  },
    
 
  {
    id: "pre-construction-services",
    name: "Pre-Construction Services",
    detailImage: mgt1,
    detailsHeading: `Charting a Course for Excellence: MITSAB RESOURCES GLOBAL LIMITED’s Leading Pre-Construction Services`,
    detailsDescription1: `
      Mitsab Reasources Global Limited, an industry leader in construction, proudly presents its distinguished Pre-Construction 
      Services, a pivotal element of its unwavering commitment to excellence in project planning and execution. Renowned for providing 
      innovative solutions, Mitsab Reasources is the preferred partner for clients seeking comprehensive pre-construction expertise.`,
    detailsDescription2:`

      At the core of Mitsab Reasources’ Pre-Construction Services is a dedicated team of professionals armed with the knowledge and 
      tools necessary to navigate the intricacies of project initiation. From conducting feasibility studies to precise cost estimations, 
      Mitsab Reasources ensures that every project commences on a robust foundation. The company collaborates closely with clients, 
      architects, and other stakeholders, fostering alignment of visions, goals, and expectations to establish the groundwork for 
      a successful construction journey.`,
    moreDetailImages: [mgt2, home_image2],
    detailsDescription3:`
      Mitsab Reasources’ Pre-Construction Services encompass thorough planning, meticulous risk assessment, and value engineering. 
      The company’s holistic approach is crafted to optimize project timelines and budgets while upholding uncompromising standards 
      of quality. Clients benefit from a transparent and collaborative process, empowering them to make informed decisions at 
      each pre-construction phase.`,
    detailsDescription4:`
      Selecting Mitsab Reasources Global Limited for your pre-construction needs signifies an investment in a partner dedicated 
      to mapping out the path for a seamless and prosperous construction project. With Mitsab Reasources, anticipate a journey 
      defined by careful planning, strategic insights, and a steadfast commitment to transforming visions into reality. 
      Experience a superior construction process with Mitsab Reasources’ leading Pre-Construction Services.`,    
    contactMessage: "Start your projects the right way with our expert pre-construction planning and consulting"
  },
  {  
    id: "cat-engine-repairs-and-maintenance",
    name: "CAT Engine Repairs & Maintenance",
    detailImage: cat_video, // replace with actual imported image
    detailsHeading: `Powering Performance: Expert CAT Engine Service & Maintenance by MITSAB RESOURCES GLOBAL LIMITED`,
    detailsDescription1: `
      Mitsab Resources Global Limited proudly offers specialized CAT Engine Service & Maintenance, ensuring the optimal performance 
      and longevity of Caterpillar (CAT) engines in heavy-duty equipment and industrial applications. With a team of certified technicians 
      and advanced diagnostic tools, Mitsab Resources is the trusted partner for maintaining critical engine systems.`,
    detailsDescription2: `
      Our CAT Engine Service covers a full range of maintenance protocols – from oil and filter changes to complete overhauls. 
      Our experts perform detailed inspections, identify wear and tear, and execute proactive repairs that minimize downtime and 
      extend engine lifespan. Whether it’s a routine check or emergency fix, we provide efficient and dependable service tailored 
      to your equipment needs.`,
    moreDetailImages: [cat, cat1, cat2, cat4], // replace with actual images
    detailsDescription3: `
      Mitsab Resources understands the importance of keeping your operations running without interruption. Our maintenance programs 
      are designed to support preventive care, reduce costly breakdowns, and improve fuel efficiency. We use only genuine CAT parts, 
      ensuring peak performance and preserving the integrity of your engine systems.`,
    detailsDescription4: `
      Choose Mitsab Resources Global Limited for your CAT Engine Service & Maintenance and gain a partner committed to reliability, 
      technical excellence, and customer satisfaction. Let us help power your success with expert service that keeps your machines 
      moving and your projects on schedule.`,
    contactMessage: "Let us keep your CAT engines running at peak performance with expert service and trusted care."
  }


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
    id: slugify("Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019"),
    title:"Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019",
    image:home_image2,
    description:`Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, 
      a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019`,
  },
  {
    id: slugify("Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State"),
    title:"Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State",
    image:borehole_image,
    description:`Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of 
      MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State`,
  },
  {
    id: slugify("Maintenance and Servicing Excellence in Partnership with Universal Energy Resources Limited Ensuring Optimal Performance for FUN CTF, Ibeno LGA, Akwa Ibom State"),
    title:"Maintenance and Servicing Excellence in Partnership with Universal Energy Resources Limited Ensuring Optimal Performance for FUN CTF, Ibeno LGA, Akwa Ibom State",
    image:mitsab_maintenance,
    description:`Maintenance and Servicing Excellence: Ensuring Optimal Performance in Partnership with Universal Energy Resources Limited (UERL/SIPEC) for FUN CTF, Ibeno LGA, Akwa Ibom State`,
  },
  {
    id: slugify("Elevating Precision: Scaffold Installation and Tank Maintenance at FUN CTF, Ibeno LGA, Akwa Ibom State by De-Absareal Global Ltd, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Partnership with Universal Energy Resources Limited-Sinopec"),
    title:"Elevating Precision: Scaffold Installation and Tank Maintenance at FUN CTF, Ibeno LGA, Akwa Ibom State by De-Absareal Global Ltd, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Partnership with Universal Energy Resources Limited-Sinopec",
    image:tank_maintenance,
    description:`In the intricate landscape of industrial maintenance, De-Absareal Global Ltd, a distinguished subsidiary of MITSAB RESOURCES GLOBAL LTD, takes center stage. Our latest achievement involves the meticulous installation of scaffolding 
      for the servicing of a leaked valve point and the comprehensive washing of the external surface of the Off Spec Tank at FUN CTF in Ibeno LGA, Akwa Ibom State.`,
  },
  {
    id: slugify("Undertake of the Renovation of Mkpanak Health Center"),
    title:"Undertake of the Renovation of Mkpanak Health Center",
    image:Renovation_hospital,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    id: slugify("Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State"),
    title:"Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State",
    image:infras2,
    description:`Mitsab Resources Global Ltd, through its subsidiary T-SAB Resources, is proud to showcase another impactful project undertaken for Frontier Oil Limited at FUN CTF, Ibeno LGA, Akwa Ibom State. This project involved the construction 
    of a bund wall around the Diesel Tank Shelter and the meticulous concreting of the base floor, illustrating Mitsab Resources Global Ltd’s unwavering commitment to safety and infrastructure excellence.`,
  },
  {
    id: slugify("A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria"),
    title:"A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria",
    image:soak_away_pit,
    description:`A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria`,
  },
  {
    id: slugify("Building Resilient Infrastructure for FUN Military Base, Ibeno LGA, Akwa Ibom State: A Triumph by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD"),
    title:"Building Resilient Infrastructure for FUN Military Base, Ibeno LGA, Akwa Ibom State: A Triumph by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD",
    image:building_res,
    description:`In the realm of essential infrastructure, T-SAB RESOURCES, a proud subsidiary of MITSAB RESOURCES GLOBAL LTD, stands as a beacon of excellence. Our latest triumph involves the meticulous construction 
    of a military toilet, a reinforced concrete tank stand, and two cesspools for the esteemed FUN Military Base in Ibeno LGA, Akwa Ibom State.`,
  },
  {
    id: slugify("Maintenance and Repairs of CAT 3512 Generating Set for ALSCON, Ikot Abasi LGA, Akwa Ibom State Nigeria"),
    title:"Maintenance and Repairs of CAT 3512 Generating Set for ALSCON, Ikot Abasi LGA, Akwa Ibom State Nigeria",
    image:cat1,
    description:`Maintenance and Repairs of CAT 3512 Generating Set for ALSCON, Ikot Abasi LGA, Akwa Ibom State Nigeria`,
  },
  {
    id: slugify("Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria"),
    title:"Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria",
    image:portacabin3,
    description:`Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria`,
  },
  {
    id: slugify("Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022"),
    title:"Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022",
    image:Rd_const,
    description:`Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022`,
  },
  {
    id: slugify("Concreting of the off Spec Crude Storage Tank Base"),
    title:"Concreting of the off Spec Crude Storage Tank Base",
    image:storage_tank_base,
    description:`Concreting of the off Spec Crude Storage Tank Base`,
  },
];

export const projectsDetail = [
  {
    id: slugify("Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019"),
    name: "Transforming Surroundings: Landscaping and Chippings Spraying at FUN CTF Area, Ibeno LGA, Akwa Ibom State by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Collaboration with Frontier Oil Limited 2019",
    
    image: home_image2,
    description1: `In the realm of environmental enhancement, T-SAB RESOURCES, a proud subsidiary of MITSAB RESOURCES GLOBAL LTD, emerges as a steward of 
      transformative landscapes. Our recent endeavor involves the meticulous landscaping and spraying of Granite/Chippings around the FUN CTF Area in 
      Ibeno LGA, Akwa Ibom State. This project was executed in collaboration with Frontier Oil Limited in 2019.`,

    description2: [
      {
        type: "section",
        title: "Landscaping Excellence",
        text: `T-SAB RESOURCES prides itself on crafting environments that harmonize with their surroundings. The landscaping initiative at FUN CTF Area is a testament 
          to our commitment to creating aesthetically pleasing, sustainable, and functional spaces. Our team of skilled professionals employed advanced landscaping 
          techniques to seamlessly integrate natural elements, enhancing the visual appeal of the area.`

      },
      {
        type: "section",
        title: "Granite/Chippings Spraying Precision",
        text: `The spraying of Granite/Chippings around the FUN CTF Area required a delicate balance of precision and expertise. T-SAB RESOURCES leveraged state-of-the-art 
          equipment and environmentally friendly materials to ensure an even and durable application. This meticulous approach not only enhances the aesthetic charm of 
          the area but also contributes to the longevity of the surfaces.`,
      },
      {
        type: "section",
        title: "Collaboration with Frontier Oil Limited 2019",
        text: `Our collaboration with Frontier Oil Limited in 2019 exemplifies the strength of strategic partnerships. T-SAB RESOURCES, as an extension of MITSAB RESOURCES GLOBAL LTD, 
          understands the unique requirements of our clients. The collaboration with Frontier Oil Limited was marked by mutual respect, transparent communication, and a shared 
          commitment to environmental sustainability.`

      },
    ],
    gallery: [home_image2, home_image2],
    description3: [
      {
        type: "section",
        title: "Eco-Friendly Practices",
        text: `In line with global environmental standards, T-SAB RESOURCES prioritizes eco-friendly practices in every project. The landscaping and spraying of Granite/Chippings 
          at FUN CTF Area were executed with a focus on minimizing ecological impact. We believe in responsible landscaping that not only enhances aesthetics but also promotes 
          environmental well-being.`

      },
      {
        type: "section",
        title: "Upholding MITSAB RESOURCES Global LTD Legacy",
        text: `As part of the MITSAB RESOURCES GLOBAL LTD family, T-SAB RESOURCES inherits a legacy of excellence. Our dedication to precision, environmental responsibility, 
          and collaborative partnerships aligns seamlessly with the overarching principles of our parent company. Together, we continue to raise the bar in environmental landscaping.`,
      },
      {
        type: "section",
        title: "",
        text: `In summary, the landscaping and spraying of Granite/Chippings at FUN CTF Area underscore T-SAB RESOURCES’ commitment to creating visually appealing and environmentally 
          sustainable spaces. With a focus on precision, collaboration, and eco-friendly practices, we take pride in contributing to the enhancement of the FUN CTF Area in conjunction 
          with our valued partner, Frontier Oil Limited.`

      },
    ],
    client: "FUN CTF",
    location: "Ibeno, Nigeria",
    completionDate: "2024-12-01",
    category: "Earth Landscaping"
  },
  {
    id: slugify(`Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State`),
    name: `Enhancing Healthcare Infrastructure: T-SAB Resources a Subsidiary of MITSAB Reasources Global Constructs RC Water Tank Stand, Drills Borehole, and Installs Water Treatment Plant in Okoroutip, Akwa Ibom State`,
    
    image: borehole_image,
    description1: `Mitsab Resources Global Ltd, through its subsidiary T-SAB Resources, proudly presents a noteworthy portfolio highlight – the successful completion of a 
      transformative project for Frontier Oil Limited in Okoroutip, Ibeno LGA, Akwa Ibom State. This comprehensive initiative encompassed the construction of an RC water tank stand, 
      drilling of a water borehole, and the installation of a cutting-edge water treatment plant with a dedicated generating set.`,
    description2: [
      {
        type: "section",
        title: "RC Water Tank Stand Construction",
        text: `Mitsab Resources Global Ltd, renowned for its commitment to excellence, spearheaded the construction of a robust Reinforced Concrete (RC) water tank stand. 
          This structure not only serves as a testament to engineering precision but also ensures a secure and enduring foundation for water storage needs. 
          The forward-thinking design allows for scalability, reflecting Mitsab Resources Global Ltd’s dedication to future-proof solutions.`
      },
      {
        type: "section",
        title: "Water Borehole Drilling",
        text: `A hallmark of Mitsab Resources Global Ltd’s holistic approach to infrastructure development is the strategic drilling of a water borehole. This initiative ensures 
          a sustainable and self-sufficient water supply for the community. Leveraging advanced drilling technologies, Mitsab Resources Global Ltd mitigates environmental 
          impact while meeting the immediate and long-term water requirements of the health center.`
       },
      {
        type: "section",
        title: "Water Treatment Plant Installation",
        text: `Mitsab Resources Global Ltd, in collaboration with T-SAB Resources, installed a state-of-the-art water treatment plant. This facility aligns with the highest 
          standards of water quality, utilizing advanced purification and filtration processes. The installation underscores Mitsab Resources Global Ltd’s 
          commitment to promoting health and well-being by providing communities with access to clean and safe drinking water.`

      },
    ],
    gallery: [borehole_image2, borehole_image],
    description3: [
      {
        type: "section",
        title: "Generating Set Integration",
        text: `Acknowledging the importance of continuous service delivery, Mitsab Resources Global Ltd ensured seamless operations by integrating a dedicated generating set into the 
          water treatment system. This strategic addition guarantees uninterrupted functionality of the water treatment plant, showcasing Mitsab Resources Global Ltd’s foresight in 
          addressing potential challenges and ensuring sustained infrastructure reliability.`

      },
     
      {
        type: "section",
        title: "",
        text: `In summary, Mitsab Resources Global Ltd takes pride in its diverse portfolio, exemplified by the successful completion of this transformative project. 
          The collaboration with Frontier Oil Limited in Okoroutip stands as a beacon of Mitsab Resources Global Ltd’s commitment to elevating communities through 
          innovative infrastructure solutions. This portfolio showcase reflects Mitsab Resources Global Ltd’s dedication to sustainable development, corporate 
          responsibility, and the creation of lasting positive impacts on the communities it serves.`

      },
    ],
    client: "Okoroutip",
    location: "Ibeno, Nigeria",
    completionDate: "2024-12-01",
    category: "Borehole Drilling"
  },
  {
    id: slugify(`Maintenance and Servicing Excellence in Partnership with Universal Energy Resources Limited Ensuring Optimal Performance for FUN CTF, Ibeno LGA, Akwa Ibom State`),
    name: `Maintenance and Servicing Excellence in Partnership with Universal Energy Resources Limited Ensuring Optimal Performance for FUN CTF, Ibeno LGA, Akwa Ibom State`,
    
    image: mitsab_maintenance,
    description1: `In the dynamic landscape of the energy sector, maintaining the integrity and efficiency of critical infrastructure is paramount. De-Absareal Global Ltd, a proud subsidiary of 
      MITSAB RESOURCES GLOBAL LTD, has emerged as a stalwart in the field, showcasing unparalleled expertise in the maintenance and servicing of Foam Concentrate Tank Valves. 
      This specialized undertaking has been executed with precision for the esteemed client, Universal Energy Resources Limited (UERL/SIPEC), at the FUN CTF facility in Ibeno LGA, Akwa Ibom State.`,
    description2: [
      {
        type: "section",
        title: "Our Commitment to Excellence",
        text: `De-Absareal Global Ltd operates at the forefront of technological advancements and industry best practices, providing a comprehensive suite of services tailored 
          to meet the unique demands of the energy sector. Our commitment to excellence is underscored by the intricate maintenance and servicing processes undertaken for Foam 
          Concentrate Tank Valves at the FUN CTF facility.`
      },
      {
        type: "section",
        title: "Technical Expertise",
        text: `Our highly skilled and certified technicians leverage cutting-edge technologies and adhere to rigorous safety standards to ensure the optimal functioning of Foam Concentrate Tank Valves. 
          Rigorous training and continuous professional development empower our team to navigate the complexities of industrial equipment, ensuring the longevity and reliability of critical infrastructure.`
       },
      {
        type: "section",
        title: "Client-Centric Approach",
        text: `Understanding the unique needs of our client, Universal Energy Resources Limited (UERL/SIPEC), is integral to our service delivery. We collaborate closely with our clients, 
          fostering transparent communication and customized solutions. This client-centric approach enables us to address specific challenges, enhance system performance, and extend the lifespan of crucial assets.`

      },
    ],
    gallery: [mitsab_maintenance],
    description3: [
      {
        type: "section",
        title: "Operational Efficiency",
        text: `De-Absareal Global Ltd excels in optimizing operational efficiency through meticulous planning and execution. Our maintenance and servicing protocols are designed 
          not only to meet industry standards but to exceed them, contributing to the seamless operation of Foam Concentrate Tank Valves at the FUN CTF facility.`

      },
     
      {
        type: "section",
        title: "",
        text: `In summary, our portfolio proudly showcases the successful execution of maintenance and servicing operations for Foam Concentrate Tank Valves at FUN CTF, Ibeno LGA, Akwa Ibom State. 
          De-Absareal Global Ltd remains steadfast in its commitment to excellence, technical expertise, client-centricity, and operational efficiency, setting industry benchmarks in the 
          maintenance of critical infrastructure within the energy sector.`

      },
    ],
    client: "FUN CTF",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Maintenance and Servicing"
  },
  {
    id: slugify(`Elevating Precision: Scaffold Installation and Tank Maintenance at FUN CTF, Ibeno LGA, Akwa Ibom State by De-Absareal Global Ltd, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Partnership with Universal Energy Resources Limited-Sinopec`),
    name: `Elevating Precision: Scaffold Installation and Tank Maintenance at FUN CTF, Ibeno LGA, Akwa Ibom State by De-Absareal Global Ltd, a Subsidiary of MITSAB RESOURCES GLOBAL LTD – In Partnership with Universal Energy Resources Limited-Sinopec`,
    
    image: tank_maintenance,
    description1: `In the intricate landscape of industrial maintenance, De-Absareal Global Ltd, a distinguished subsidiary of MITSAB RESOURCES GLOBAL LTD, takes center stage. Our latest achievement involves the meticulous installation of 
      scaffolding for the servicing of a leaked valve point and the comprehensive washing of the external surface of the Off Spec Tank at FUN CTF in Ibeno LGA, Akwa Ibom State.`,
    description2: [
      {
        type: "section",
        title: "Scaffold Precision for Leaked Valve Servicing",
        text: `De-Absareal Global Ltd excels in the precision installation of scaffolding, a critical element in the servicing of a leaked valve point at FUN CTF. Our skilled technicians meticulously planned and executed the 
          scaffold installation, ensuring a secure and stable platform for the maintenance team. This precision approach enhances safety and facilitates efficient servicing operations.`
      },
      {
        type: "section",
        title: "Comprehensive Tank Surface Washing",
        text: `The external surface of the Off Spec Tank at FUN CTF received meticulous attention through our comprehensive washing services. De-Absareal Global Ltd leverages cutting-edge techniques and 
          environmentally friendly solutions to ensure the removal of contaminants and the restoration of the tank’s external integrity. Our commitment to excellence extends beyond functionality to the aesthetic maintenance of industrial assets.`
       },
      {
        type: "section",
        title: "Strategic Partnership with UERL/SIPEC",
        text: `In our collaborative venture with Universal Energy Resources Limited/Sinopec (UERL/SIPEC), we showcase the seamless integration of expertise. De-Absareal Global Ltd, as an extension of MITSAB RESOURCES GLOBAL LTD, understands 
          the unique operational needs of our clients. Our partnership is rooted in transparent communication, responsive solutions, and a shared commitment to industry-leading standards.`

      },
    ],
    gallery: [tank_maintenance],
    description3: [
      {
        type: "section",
        title: "Safety-First Approach",
        text: `The installation of scaffolding and the washing of the Off Spec Tank’s external surface were executed with a paramount focus on safety. De-Absareal Global Ltd adheres to rigorous safety protocols, 
          ensuring the well-being of our personnel and the protection of the environment. Our safety-first approach is ingrained in every facet of our operations.`

      },
     
      {
        type: "section",
        title: "Upholding the MITSAB RESOURCES Global LTD Legacy",
        text: `As part of the MITSAB RESOURCES GLOBAL LTD family, De-Absareal Global Ltd upholds a legacy of excellence. Our dedication to precision, safety, and collaborative partnerships resonates with 
          the overarching principles of our parent company. Together, we forge ahead in elevating standards in industrial maintenance.`

      },
      {
        type: "section",
        title: "",
        text: `In summary, the scaffold installation for the servicing of a leaked valve point and the washing of the external surface of the Off Spec Tank at FUN CTF exemplify the commitment to precision, safety, 
          and collaborative excellence by De-Absareal Global Ltd. As we continue to contribute to the maintenance and enhancement of critical industrial assets, our focus remains unwavering on delivering 
          unparalleled service quality in line with the esteemed legacy of MITSAB RESOURCES GLOBAL LTD.`

      },
    ],
    client: "FUN CTF",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Maintenance and Servicing"
  },
  {
    id: slugify(`Undertake of the Renovation of Mkpanak Health Center`),
    name: `Undertake of the Renovation of Mkpanak Health Center`,
    
    image: Renovation_hospital,
    description1: `Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [Renovation_hospital1],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "Mkpanak Health Center",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Maintenance and Servicing"
  },
  {
    id: slugify(`Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State`),
    name: `Enhancing Safety Infrastructure at FUN CTF, Ibeno LGA, Akwa Ibom State`,
   
    image: infras,
    description1: `Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [infras2],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "FUN CTF",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Maintenance and Servicing"
  },
  {
    id: slugify(`A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria`),
    name: `A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria`,
  
    image: soak_away_pit,
    description1: `A precast Concreting and Construction of a 2no Soak away Pit and Septic tank for NEPN Drilling Camp Site at Qua Iboe Field, Ibeno LGA Akwa Ibom State Nigeria`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [soak_away_pit1, soak_away_pit2],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "NEPN Drilling Camp",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Building"
  },
  {
    id: slugify(`Building Resilient Infrastructure for FUN Military Base, Ibeno LGA, Akwa Ibom State: A Triumph by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD`),
    name: `Building Resilient Infrastructure for FUN Military Base, Ibeno LGA, Akwa Ibom State: A Triumph by T-SAB RESOURCES, a Subsidiary of MITSAB RESOURCES GLOBAL LTD`,
  
    image: building_res,
    description1: `In the realm of essential infrastructure, T-SAB RESOURCES, a proud subsidiary of MITSAB RESOURCES GLOBAL LTD, stands as a beacon of excellence. 
    Our latest triumph involves the meticulous construction of a military toilet, a reinforced concrete tank stand, and two cesspools for the esteemed FUN Military Base in Ibeno LGA, Akwa Ibom State.`,
    description2: [
      {
        type: "section",
        title: "Precision in Construction",
        text: `At T-SAB RESOURCES, precision is our hallmark. The construction of the military toilet, reinforced concrete tank stand, and cesspools at FUN Military Base required a seamless integration of 
          technical expertise and advanced construction methodologies. Our team of skilled professionals meticulously planned and executed each phase of the project to meet the stringent standards demanded by military infrastructure.`
      },
      {
        type: "section",
        title: "Advanced Engineering Solutions",
        text: `Our commitment to delivering excellence is reflected in the incorporation of advanced engineering solutions. The military toilet, designed with durability and functionality in mind, showcases our dedication to providing 
          top-tier facilities for the servicemen and women stationed at FUN Military Base. The reinforced concrete tank stand and cesspools, crafted to withstand the rigors of military operations, represent a fusion of robust design and structural resilience.`
       },
      {
        type: "section",
        title: "Environmental Sensitivity",
        text: `T-SAB RESOURCES recognizes the importance of environmental sustainability in every project. The construction of the military toilet, reinforced concrete tank stand, and cesspools was executed with a focus on minimizing ecological impact. 
          Our environmentally sensitive approach ensures that the FUN Military Base not only meets operational needs but also aligns with contemporary ecological standards.`

      },
    ],
    gallery: [building_res1],
    description3: [
      {
        type: "section",
        title: "Seamless Collaboration with FUN Military Base",
        text: `Effective collaboration with our client, FUN Military Base, was fundamental to the success of this project. T-SAB RESOURCES engaged in transparent communication and a client-centric approach, ensuring that the construction 
          process aligned with the specific requirements of the military base. This collaborative effort has resulted in infrastructure that not only meets but exceeds the expectations of our esteemed client.`

      },
     
      {
        type: "section",
        title: "MITSAB RESOURCES Global LTD Legacy",
        text: `As a subsidiary of MITSAB RESOURCES GLOBAL LTD, T-SAB RESOURCES inherits a legacy of excellence. Our commitment to upholding the highest standards in construction aligns seamlessly with the overarching 
          principles of our parent company. Together, we continue to contribute to the development of robust, resilient, and sustainable infrastructure.`

      },
      {
        type: "section",
        title: "",
        text: `In conclusion, T-SAB RESOURCES takes pride in the successful completion of the construction project for FUN Military Base in Ibeno LGA, Akwa Ibom State. The military toilet, reinforced concrete tank stand, 
          and cesspools stand as a testament to our commitment to precision, advanced engineering, environmental sensitivity, seamless collaboration, and the enduring legacy of MITSAB RESOURCES GLOBAL LTD.`

      },
    ],
    client: "FUN CTF",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Building"
  },
  {
    id: slugify(`Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria`),
    name: `Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria`,
  
    image: portacabin3,
    description1: `Fabrication and Welding of Dilapidated Storage Portacabin For UERL-SCL at Unyeghe, Mbo LGA, Akwa Ibom State, Nigeria`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [portacabin, portacabin1, portacabin2, portacabin4, ],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "FUN CTF",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2024-12-01",
    category: "Maintenance and Servicing"
  },
  {
    id: slugify(`Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022`),
    name: `Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022`,
  
    image: Rd_const,
    description1: `Concreting Expansion of the FUN Facilty Manifold Entrance Gate and Road Rehabilitation for UERL-SINOPEC at IBENO LGA, AKWA IBOM STATE - 2022`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [Rd_const, Rd_const ],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "UERL/SINOPEC",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2022-12-01",
    category: "Road Construction"
  },
  {
    id: slugify(`Concreting of the off Spec Crude Storage Tank Base`),
    name: `Concreting of the off Spec Crude Storage Tank Base`,
  
    image: storage_tank_base,
    description1: `Concreting of the off Spec Crude Storage Tank Base`,
    description2: [
      {
        type: "section",
        title: "",
        text: ``
      },
      {
        type: "section",
        title: "",
        text: ``
       },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    gallery: [storage_tank_base, storage_tank_base1 ],
    description3: [
      {
        type: "section",
        title: "",
        text: ``

      },
     
      {
        type: "section",
        title: "",
        text: ` `

      },
      {
        type: "section",
        title: "",
        text: ``

      },
    ],
    client: "UERL/SINOPEC",
    location: "Ibeno LGA, Akwa Ibom State. Nigeria",
    completionDate: "2022-12-01",
    category: "Road Construction"
  },

]
export const testimonial = [
  {
    image:oando_logo,
    name:'OANDO',
    position: 'operations Manager',
      review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment 
      demonstrated by MIREGL throughout the construction of our facility. From project planning 
      to execution, their team maintained clear communication, met every milestone, and delivered top-tier 
      quality that exceeded our expectations. The structure was completed on schedule and within budget, and we 
      couldn’t be more satisfied with the outcome. We highly recommend MIREGL for any engineering 
      construction projects where quality and reliability are a priority.`
  },
  {
    image:frontier_logo,
    name:'Frontier',
    position: 'Facilities Manager',
    review:`Working with MIREGL was a seamless experience from start to finish. Their team brought a 
    level of precision and problem-solving that made a significant difference in the success of our infrastructure upgrade. 
    They handled every challenge with professionalism and delivered a structure that is not only durable but also aligns 
    perfectly with our operational needs. We look forward to future collaborations.`
  },
  {
    image:alscon_logo,
    name:'ALSCON',
    position: 'Operations Manager',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  {
    image:rusal_logo,
    name:'RUSAL',
    position: 'Manager RUSAL',
    review:`We are thoroughly impressed with the professionalism, technical expertise, and commitment demonstrated 
    by MIREGL throughout the construction of our facility. From project planning to execution, their team 
    maintained clear communication, met every milestone, and delivered top-tier quality that exceeded our expectations. 
    The structure was completed on schedule and within budget, and we couldn’t be more satisfied with the outcome.
    We highly recommend MIREGL for any engineering construction projects where quality and reliability are a priority.`
  },
  {
    image:nepn_logo,
    name:'NEPN',
    position: 'HR/Admin NEPN',
    review:`The construction team at Mitsab Resources Global exceeded our expectations in every way. They delivered high-quality 
    results, kept us updated throughout the project, and were proactive in resolving potential issues before they became problems. 
    Their attention to detail and safety standards were commendable. Highly recommended for any serious engineering project.`
  },
  {
    image:bp_marine_logo,
    name:'BP Marine Global Services',
    position: 'Logistics Supervisor',
    review:`Safety and reliability are non-negotiables for us, and MIREGL has consistently delivered both. Their passenger 
    transport service is top-notch — vessels are well-maintained, crew members are courteous, and schedules are strictly 
    followed. We’ve used their service multiple times and each trip has been smooth and secure.

    They set the standard for marine transportation.`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:building_res,
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
      image:Rd_const,
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
      image:storage_tank_base,
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
    value1:"mit-sabresources@outlook.com",
    value2:"info@mitsabresourcesglobal.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value1:"+2348023851800",
    value2:"+2347067912527",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value1:"REGISTERED OFFICE:89 University Road,Use Offot, Nwaniba Road, Uyo,Akwa Ibom State,Nigeria",
    value2:"OPERATIONAL OFFICE: 35 Terminal Jetty Road, Inua Eyet Ikot, Ibeno L.G.A, Akwa Ibom State,Nigeria",
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


