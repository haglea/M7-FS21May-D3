import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFav } from '../actions'
import { Link } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (l) => { dispatch(removeFromFav(l)) }
})

class Favourites extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup className="mt-2">
                        {
                            this.props.likes.map(l => (
                                <ListGroupItem >
                                    <StarFill className="mr-3" onClick={() => this.props.removeFromFav(l)} />
                                    <Link to={`/${ l }`}>{ l }</Link>     
                                </ListGroupItem>
                            ))

                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(s => s, mapDispatchToProps)(Favourites)