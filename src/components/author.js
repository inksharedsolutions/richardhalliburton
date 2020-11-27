import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/dummy-profile.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        R. Michael Richard, born of mixed race during the civil rights movement, struggled with identity issues much of his young life.<br /><br />
                        R. Michael served as a missionary 11 years and afterward in the United States Army for 14 more. He studied at many technical schools and colleges, eventually earning a medical certificate, a B.S. Psychology and M.A. Education (Leadership).
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>R. Michael</span>
                            <span>Richard</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;