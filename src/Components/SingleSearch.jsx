import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'

const SingleSearch = ({data}) => {

    /* const imageurl = `https://remotive.io/job/${data._id}/logo` */

    return ( 
        <Col sm={6}>         
            <Card className="m-2">
                <Row>
{/*                      <Col>
                         <Card.Img variant="overlay" src={imageurl} /> 
                    </Col>  */}
                    <Col>
                        <Card.Header>{data.title}</Card.Header>                
                        <Card.Body>
                        <Card.Title><Link to={`/${data.company_name}`}>{data.company_name}</Link></Card.Title>
                            <Card.Text className="text-left">
                            {data.category}
                            </Card.Text>
                            <Button variant="primary"><a className="text-white" href={data.url}>Open</a></Button>
                        </Card.Body>
                    </Col> 
                </Row>
            </Card>
        </Col>       
    );   
} 

export default SingleSearch;