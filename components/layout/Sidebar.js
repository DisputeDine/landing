import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="d-flex" href="/"><img alt="DisputeDine" src="assets/imgs/template/logo.svg" /></Link></div>
                        <div className="perfect-scroll">

                            <div className="mobile-menu-wrap mobile-header-border">
                                
                                   
                                   
                                        <div className="tab-pane">
                                            <nav className="mt-15">
                                                <ul className="mobile-menu font-heading">
                                                    <li >
                                                        
                                                        <Link className="active" href="/">Home</Link>
                                                        
                                                    </li>
                                                    <li >
                                                        
                                                        <Link href="/about">About Us</Link>
            
                                                    </li>
                                                    <li >
                                                        
                                                        <Link href="/service">Services</Link>
                                                        
                                                    </li>
                                                    <li >
                                                        
                                                        <Link href="/pricing">Prices & Plans</Link>
                                                        
                                                    </li>
                                                    
                                                    
                                                   
                                                    
                                                </ul>
                                            </nav>
                                        </div>
                                    
                                    
                                    
                                
                            </div>
                            <div className="site-copyright color-grey-400 mt-0">
                               {/*} <div className="box-download-app">
                                    <p className="font-xs color-grey-400 mb-25">Download our App and get some deal here</p>
                                    <div className="mb-25"><Link className="mr-10" href="#"><img src="assets/imgs/template/appstore.png" alt="DisputeDine" /></Link><Link href="#"><img src="assets/imgs/template/google-play.png" alt="DisputeDine" /></Link></div>
                                    <p className="font-sm color-grey-400 mt-20 mb-10">Secured Payment Gateways</p><img src="assets/imgs/template/payment-method.png" alt="DisputeDine" />
                                </div>*/}
                                <div className="mb-0">Copyright 2024 © DisputeDine - All right reversed.<br />Designed by<Link href="/http:/alithemes.com" target="_blank">&nbsp; Suave Tech Solutions</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;