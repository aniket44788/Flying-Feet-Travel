
import "./svgimage.css"
import svg from "../Home/svg.png"
function Svgimage() {
    return (
        <>
            <div className="image-container">
                <img src={svg} alt="Banner" />
                <a href="/packages">

                    <button className="center-button">
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">Our Packages</span>
                    </button>
                </a>

            </div>

        </>
    )
}

export default Svgimage 