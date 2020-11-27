import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/dummy-profile.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="Author | Richard Halliburton"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>

                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            R. Michael Richard, born of mixed race during the civil rights movement, struggled with identity issues much of his young life.
                            </p>
                            <p>
                            R. Michael served as a missionary 11 years and afterward in the United States Army for 14 more. He studied at many technical schools and colleges, eventually earning a medical certificate, a B.S. Psychology and M.A. Education (Leadership).
                            </p>
                            <p>
                            His tumultuous upbringing in the ghettos of Los Angeles, CA. and training as an embedded missionary color his views of the world, religion and politics.
                            </p>

                            <q>
                                We meet appropriately on this day of independence, reminded of our freedoms as we embark on a journey no one has ever known. Today, in this room and around this estate, our lives are being changed. Our destinies are being decided. Our hearts are being broken and molded together as one heart to one purpose
                            </q>
                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Richard Halliburton</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;