import designportfolio from "../assets/images/designportfolio.png"
import about from "../assets/images/about.png"
import services from "../assets/images/services.png"
import aiinitiative from "../assets/images/aiinitiative.png"
import bookconsultation from "../assets/images/bookconsultation.png"
import faqs from "../assets/images/faq.png"
import { SlideShow, SlideTypes } from "@/common/types/slider.types"
import image0 from "../assets/images/image0.png"
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"
import image5 from "../assets/images/image5.png"
import image6 from "../assets/images/image6.png"
export const SlideImages:SlideShow[] =[ 
   
    {
        id: 0,
        image: image1
    },
    {
        id: 1,
        image: image2
    },
    {
        id: 2,
        image: image3
    },
    {
        id: 3,
        image: image4
    },
    {
        id: 4,
        image: image5
    },
    {
        id: 5,
        image: image6
    }

]
export const HomeImages = [
    {
        id: 1,
        title: "About",
        icon: about,
        path: ""
    },
    {
        id: 2,
        title: "Design Portfolio",
        icon: designportfolio,
        path: ""
    },
    {
        id: 3,
        title: "Services",
        icon: services,
        path: ""
    },
    {
        id: 4,
        title: "AI Initiative",
        icon: aiinitiative,
        path: ""
    },
    {
        id: 5,
        title: "Book a consultation",
        icon: bookconsultation,
        path: ""
    },
    {
        id: 6,
        title: "FAQs",
        icon: faqs,
        path: ""
    }
]