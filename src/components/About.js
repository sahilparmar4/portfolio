import { saveAs } from "file-saver";
import { data } from "../api/resumeData";
import { useLocation } from "react-router-dom";
export default function About(){
    const location = useLocation();
    return(
        <> 
            <section className="section pt-0" id="about" style={location?.pathname==="/"? {}: {marginTop: "100px"}}>
                <div className="container text-center">
                    <div className="about">
                    <div className="about-img-holder">
                        <img
                        src={process.env.PUBLIC_URL+data?.photo}
                        className="about-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                        />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                        {data?.about}
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4" onClick={()=>{
                            saveAs("https://drive.google.com/file/d/1BF_4Boz8-JDPqydkOsdT6qg-RGkJjYUV/view?usp=sharing", "Sahil_Parmar_Blockchain_Reactjs.pdf")
                        }}>
                        Download CV
                        </button>
                    </div>
                    </div>
                    {/* end of about wrapper */}
                </div>
            </section>
        </>
    )
}