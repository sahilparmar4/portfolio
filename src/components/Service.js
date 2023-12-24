import { useLocation } from "react-router-dom";
import { data } from "../api/resumeData";

export default function Service(){
    const location = useLocation();
    return(
        <>
            <section className="section" id="service" style={location?.pathname==="/"?{}:{marginTop: "100px"}}>
                <div className="container text-center">
                    <p className="section-subtitle">My</p>
                    <h6 className="section-title mb-6">Technologies</h6>
                    <div className="row">
                        {
                            data?.techstack?.map((item)=>{
                                return(
                                    <>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="service-card">
                                            <div className="body">
                                                <img
                                                src={item?.icon}
                                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                                className="icon"
                                                />
                                                <h6 className="title">{item?.name}</h6>
                                                <p className="subtitle">
                                                {item?.subtitle}
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}