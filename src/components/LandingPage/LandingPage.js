import React from 'react'
import "./LandingPage.css"
import { Link } from "gatsby"

function LandingPage() {
    return (
        <div>
            <div className="container landingPage">
                <div className="row">
                    <div className="col-lg-5 text-dark right-section">
                        <h1 className="mainHeading" >Tell us the Complete story </h1>
                        <div className="text-left">
                            <Link to="/bloglist/">
                                <button className="lp-btn">Start Reading</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 imgContainer"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage