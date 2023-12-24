import { useLocation } from "react-router-dom";
import { data } from "../api/resumeData";

export default function Portfolio(){
  const location = useLocation();
    return(
        <>
            <section className="section" id="portfolio" style={location?.pathname==="/"?{}:{marginTop:"100px"}}>
              <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Projects</h6>
                <div className="row">
                  {
                    data?.projects?.map((item)=>{
                      return(
                        <>
                            <div className="col-md-4 service-card">
                              <a href="javascipt:void(0)" className="portfolio-card my-5">
                                <h6 className="title">{item?.name}</h6>
                                <p className="section-subtitle">{item?.technology}</p>
                                <p className="subtitle"> {item?.description} </p>
                              </a>
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