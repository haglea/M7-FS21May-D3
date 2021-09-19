import React from 'react';
import SingleSearch from "./SingleSearch";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import uniqid from "uniqid"

export default class SearchResult extends React.Component {
  
  state = {
      jobquery: "",
      jobs: [],
      categories: []
    }

  handleChange = (e) => {    
    this.setState({ jobquery: e.target.value})     
    console.log(this.state.jobquery)
  }

  handleFetch = async (e) => { 
    try {
      e.preventDefault()
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${this.state.jobquery}&limit=6`)
      
      let jobsData = await response.json();
      this.setState({ jobs: jobsData.data })
      console.log(this.state.jobs)
    } catch (e) {
      console.log(e);
      return e;
    }    
  }

  componentDidMount = async () => { 
      try {
        let categoriesResponse = await fetch(`https://strive-jobs-api.herokuapp.com/jobs/categories`)
        let jobCategories = await categoriesResponse.json()
        this.setState({ categories: jobCategories })
        console.log(this.state.categories)
      } catch (e) {
        console.log(e);
        return e;
      }
    }    
   
  filterJobs = async (e) => { 
    try {
      let categoryResponse = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${e.target.value}&limit=6`)
      
      let jobsData = await categoryResponse.json();
      this.setState({ jobs: jobsData.data })
      console.log(this.state.jobs)
    } catch (e) {
      console.log(e);
      return e;
    }   
  }

    render() {
      return (
 
          <Container>
            <Row>
              <Col>
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
              </Col>

              <Col>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom" >
                    <Form.Label>Filter Jobs by Category</Form.Label>
                    <Form.Control as="select" custom onChangeCapture={this.filterJobs}> 
                    {
                      this.state.categories.map(c => <option>{c}</option>)                   
                      }
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </Row> 
           
            <Row>

                  {this.state.jobs && this.state.jobs.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)} 
              
            </Row>
          </Container>
    
     
        );  
    }    
}
