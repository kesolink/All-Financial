import React from 'react'
import "./Digital.scss"
import lady from "../../assets/lady.png"
import img1 from "../../assets/mobile-banking 1.png"
function Digital() {
  return (
    <div className='digital-container'>
        <header>Digital Banking Tool</header>
        <div className="digital-wrap">
            <div className="left">
                <img src={lady} alt="" />
            </div>
            <div className="right">
                <span>Bank Anytime, Anywhere</span>
                <div className="main-wrap">
                    <div className="left">
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img1} alt="" />
                            </div>
                            <p><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Digital