import Header from "../Header/Header";
import {CardImg,Card,CardBody,CardTitle,CardText,FormText} from 'reactstrap';
import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useParams } from "react-router-dom";
const DiaryDetail = () => {
    const url = process.env.REACT_APP_URL_AXIOS;
    const [diaryData, setDiaryData] = useState()
    const token = localStorage.getItem('jwtLogin')
    const {id} =useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/diary/getOneDiary/' + id,
                    {
                        headers: {                         
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                console.log(res);
                setDiaryData(res.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);
    return (
    <>
        {diaryData?  <>
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
                                src={diaryData.diaryPhotos}
                                // src="https://picsum.photos/900/180"
                                style={{height: 180}}
                                top
                                width="100%"
                                />

                                <CardBody>
                                <CardTitle tag="h5">
                                    Create At : {diaryData.createdAt} 
                                </CardTitle>
                                <CardText>
                                    <div className="diary-detail-date-time">
                                        <span>
                                            {diaryData.diaryTitle}
                                        </span>    
                                    </div>
                                </CardText>
                                <CardText>
                                    {diaryData.diaryContent}
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                    update at : {diaryData.updatedAt}
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
            </> : <></> }
    </>
    );
}
 
export default DiaryDetail;