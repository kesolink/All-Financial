import React from 'react'
import "./Digital.scss"
import lady from "../../assets/lady.png"
import img1 from "../../assets/mobile-banking 1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
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
                            <p className='lap'><strong>Mobile Banking:</strong> Accessible banking through mobile devices.</p>
                        </div>
                        
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img3} alt="" />
                            </div>
                            <p className='lap'><strong>USSD Banking:</strong> Easy access without an internet connection.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img2} alt="" />
                            </div>
                            <p className='lap'><strong>Internet Banking:</strong> A secure online banking portal for all users.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img4} alt="" />
                            </div>
                            <p className='lap'><strong>Chat Box: </strong> Enhance customer communication with AI-powered tools.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img5} alt="" />
                            </div>
                            <p><strong>Digital Field Apps:</strong> Enable field agents to access banking tools remotely.</p>
                        </div>
                        <div className="box">
                            <div className="img-wrap">
                                <img src={img6} alt="" />
                            </div>
                            <p className='lap'><strong>Card Management:</strong>Comprehensive tools for issuing and managing payment cards.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Digital