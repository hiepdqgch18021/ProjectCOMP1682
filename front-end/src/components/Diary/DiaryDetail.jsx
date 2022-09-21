import Header from "../Header/Header";
import React, { useState } from "react";
import {CardImg,Card,CardBody,CardTitle,CardText,FormText} from 'reactstrap';


const DiaryDetail = () => {
    return ( 
        <>
        <header className='sidebar'>
              <Header/>
        </header>
        <main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-2 d-none d-lg-block d-md-block"></div>

                        <div className="col-lg-8 col-md-8 col-sm-10 diary-detail-container">
                        <Card className="my-2">
                            <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/900/180"
                            style={{height: 180}}
                            top
                            width="100%"
                            
                            />
                
                            <CardBody>
                            <CardTitle tag="h5">
                                Card Title
                            </CardTitle>
                            <CardText>
                                <div className="diary-detail-date-time">
                                    <span>
                                        25/5/2019
                                    </span>
                                    <span> - </span>
                                    <span>
                                        1:09:22
                                    </span>
                                </div>
                            </CardText>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos repudiandae, vitae nobis vero animi magni soluta sit illum voluptatem amet minima iusto quisquam id ratione veritatis totam ullam. Suscipit?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae laborum laudantium facilis dolores ratione in unde necessitatibus mollitia ipsa natus saepe architecto fugit, corporis reprehenderit! Nihil a at rerum!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id optio, eum nisi dolores iusto quisquam quas nihil amet culpa rem nesciunt dolore incidunt vero ad suscipit voluptas provident, quibusdam ex!
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </CardText>
                            </CardBody>
                        </Card>
                        </div>

                        <div className="col-2 d-none d-lg-block d-md-block"></div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <FormText>
                "Yesterday is history. Tomorrow is a mystery, but today is a gift. That’s why it’s called the present"
            </FormText>
        </footer>
        </>
     );
}
 
export default DiaryDetail;