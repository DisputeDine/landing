import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                <section className="section mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/headphone.png" alt="DisputeDine" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Help &amp; support</h6>
                                        <p className="font-xs color-grey-500">Email <a className="color-success" href="mailto:support@alithemes.com">support@alithemes.com </a><br />For help with a current product or service or refer to FAQs and developer tools</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="card-small card-small-2">
                                    <div className="card-image">
                                        <div className="box-image"><img src="assets/imgs/page/contact/phone.png" alt="DisputeDine" /></div>
                                    </div>
                                    <div className="card-info">
                                        <h6 className="color-brand-1 mb-10">Call Us</h6>
                                        <p className="font-xs color-grey-500">Call us to speak to a member of our team.<br />(+01) 234 567 89<br />(+01) 456 789 21</p>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>
                <section className="section mt-70">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="color-brand-1 mb-15">Get in touch</h2>
                                <p className="font-sm color-grey-500">Do you want to know more or contact our sales department?</p>
                                <div className="mt-50">
                                    
        
                                    <div className="card-offer card-we-do card-contact hover-up">
                                        <div className="card-image"><img src="assets/imgs/page/contact/img3.png" alt="DisputeDine" /></div>
                                        <div className="card-info">
                                            <h6 className="color-brand-1 mb-10">Get in touch with Sales</h6>
                                            <p className="font-md color-grey-500 mb-5">Let us talk about how we can help your enterprise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="box-form-contact">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-user" type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-email" type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-phone" type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group mb-25">
                                                <input className="form-control icon-company" type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <input className="form-control" type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mb-25">
                                                <textarea className="form-control textarea-control" placeholder="Write something" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6 col-9">
                                            <div className="form-group">
                                                <button className="btn btn-brand-1-full font-sm" type="submit">Send message
                                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                    <div className="container" style={{ paddingTop: '40px' }}>
                        <div className="row">
                            <div className="col-lg-3 width-20">
                                <div style={{display:'flex', alignItems:'center'}}>
                                <div className="mb-10"style={{display:'flex', alignItems:'left', width:'4rem', height: '4rem'}}><img src="assets/imgs/template/logo.svg" alt="DisputeDine" /></div>
                                <div className="mb-10"style={{display:'flex',paddingLeft:'10px', alignItems:'right', width:'12rem', height: '5rem'}}><img src="assets/imgs/template/DisputeDlogo.svg" alt="DisputeDine" /></div>
                                </div>
                                
                                <h6 className="color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-linkedin" href="#" /></div>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/index">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/pricing">Pricing Plan</Link></li>
                                    {/*<li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>*/}
                                </ul>
                            </div>

                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Product Features</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Dispute Manager</Link></li>
                                    <li><Link href="#">Promotions Manager</Link></li>
                                    <li><Link href="#">Downtime Controller</Link></li>
                                    <li><Link href="#">Reviews and Ratings</Link></li>
                                    <li><Link href="#">Finance &amp; Reconciliation</Link></li>
                                    <li><Link href="#">Analytics &amp; Insights</Link></li>
                                </ul>
                            </div>
                            
                            
                            <div className="col-lg-3 width-23">
                                <h5 className="mb-10 color-brand-1"> Payment</h5>
                                <div>
                                    <p className="font-sm color-grey-400">Download our App and get some deal here</p>
                                    
                                    <p className="font-sm color-grey-400 mt-20 mb-10">Secured Payment Gateways</p><img src="assets/imgs/template/payment-method.png" alt="DisputeDine" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-2">
                    <div className="container" >
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Privacy policy</Link></li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm color-grey-300" href="/term-conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end"><span className="color-grey-300 font-md">©Dispute Dine Official 2024. All right reversed.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>


        </>
    );
};

export default Footer;