import { data } from "../api/resumeData"

export default function Header(){
    return(
        <>
           
      <header id="home" className="header">
        <div className="overlay" />
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am {data?.name}</span>
          </h1>
          {
            data?.technologies?.map((item)=>{
              return(
                <>
                  <p className="header-subtitle">{item?.tech}</p>
                </>
              )
            })
          }
          
          <a href="https://www.github.com/sahilparmar4" target="_blank" className="btn btn-primary">Visit My Works</a>
        </div>
      </header>
        </>
    )
}