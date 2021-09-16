import React from 'react';
import SingleSearch from "./SingleSearch";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import uniqid from "uniqid"

export default class SearchResult extends React.Component {
  
  state = {
      jobquery: "",
      jobs: []
    }

  handleChange = (e) => {    
    this.setState({ jobquery: e.target.value})     
    console.log(this.state.jobquery)
  }

  handleFetch = async (e) => { 
    try {
      e.preventDefault()
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${this.state.jobquery}&limit=6`)
      // {this.state.jobquery} + &limit=5
      let jobsData = await response.json();
      this.setState({ jobs: jobsData.data })
      console.log(this.state.jobs)
    } catch (e) {
      console.log(e);
      return e;
    }    
  }
 

    render() {
      return (
        <>
 
          <Form onSubmit={this.handleFetch}>
              <Row className="justify-content-md-center">
                <Form.Group as={Col} controlId="formGridSearch">         
                  <Form.Control type="text" placeholder="What job are you looking for?" value={this.state.jobquery} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridButton">      
                    <Button type="search" variant="outline-success">Search</Button>
                </Form.Group>         
              </Row>
          </Form>   
    
          <Container>
            <Row>
               
                  {this.state.jobs && this.state.jobs.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)} 
              
            </Row>
          </Container>
    
        </>      
        );  
    }    
}
