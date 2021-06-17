import "./works.scss"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState} from "react"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon: "./assets/mobileicon.jpg",
            title: "Blurble",
            desc: "Blurble is a virtual book club app",
            img: ""
        },
        {
            id: "2",
            icon: "./assets/laptop-code.png",
            title: "NC news",
            desc: "This is an online news website",
            img: ""

        }

    ]

    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    }
    return(
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>))}
               
            </div>
            <ArrowForwardIosIcon className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right" onClick={()=>handleClick("right")}/>
        </div>
    )
}