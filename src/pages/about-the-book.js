import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/hardcover1.png'



const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'r-michael-richard',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | R. Michael Richard"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Redemption Lost`,
                                spanFirst: `The Beginning of the End`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        R. Michael Richard, born of mixed race during the civil rights movement, struggled with identity issues much of his young life.
                                        </p>

                                        <p>
                                        R. Michael served as a missionary 11 years and afterward in the United States Army for 14 more. He studied at many technical schools and colleges, eventually earning a medical certificate, a B.S. Psy and M.A. Ed. (Leadership). His tumultuous upbringing in the ghettos of Los Angeles, CA. and training as an embedded missionary color his views of the world, religion and politics.
                                        </p>

                                        <p>
                                        His stories tell the tale of historic events through fiction, exploiting what he considers a whole in history.
                                        </p>

                                        <p>
                                        The descendants of King Solomon's first born by the Queen of Sheba, vanish for 400 years.
                                        </p>

                                        <p>
                                        R. Michael's fictitious world speculates why and how the heirs to the throne of Solomon and Kingdom of Sheba exist and operate today.
                                        </p>
                                                
                                    `,

                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/true-crime-cases/',
                                    // barnes: 'https://www.barnesandnoble.com/w/true-crime-cases-ron-rupert/1136287286?ean=9781643457864',
                                    amazon: 'https://www.amazon.com/Redemption-Lost-Beginning-Michael-Richard-ebook/dp/B08KWNH4KP/ref=sr_1_1?dchild=1&keywords=9781648951336&qid=1602270689&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Redemption-Lost-Beginning-Michael-Richard/dp/1648951325/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1606380474&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/redemption-lost-r-michael-richard/1137881706?ean=9781648951329',
                                    booksamillion: 'https://www.booksamillion.com/p/Redemption-Lost/R-Michael-Richard/9781648951329?id=8063815731890',
                                },
                                hardcover: {
                                    amazon: 'https://www.amazon.com/Redemption-Lost-Beginning-Michael-Richard/dp/1648952798/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1602270689&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/redemption-lost-r-michael-richard/1137881706?ean=9781648952791',
                                    booksamillion: 'https://www.booksamillion.com/p/Redemption-Lost/R-Michael-Richard/9781648952791?id=8097439242082',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;