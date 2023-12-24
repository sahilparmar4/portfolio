import { data } from "../api/resumeData";

export default function Footer(){
    return(
        <>
            <div className="container">
                <footer className="footer">
                    <p className="mb-0">
                    Copyright © <a target="_blank" href="javascript:void(0)">2023</a>
                    </p>
                    <div className="social-links text-right m-auto ml-sm-auto">
                        {
                            data?.social_links?.map((item)=>{
                                return(
                                    <>
                                        <a href={item?.link} target="_blank" className="link">
                                            <i className={item?.icon} />
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                </footer>
            </div>

        </>
    )
}