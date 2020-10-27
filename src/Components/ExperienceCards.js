import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";
import DaughertyRoleCards from './DaughertyRoleCards';

class Button extends React.Component {
    render() {
      return (
        <button {...this.props}>
          click
        </button>
      );
    }  
  }

class ExperienceCards extends React.Component 
{ 
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
          clicked: true
        });
      }

    render() {
        if(!this.state.clicked) {
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>University of Missouri</h2></Card.Title>
          <Card.Text>
            <h7>AUG 2015 - MAY 2020</h7>
            <h6>B.S. Computer Science. Completed many challenging courses including: Compilers, Operating Systems, Data Structures and Algorithms, Web Development with JavaScript,
                Java, Software Security, C++...
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>Daugherty Business Solutions</h2></Card.Title>
          <Card.Text>
            <h7>MAY 2012 - PRESENT</h7>
            <h6>As a consultant I worked in several challenging areas that have required great attention to detail, the ability to adapt to different work environments, 
                and the need to be able to guide team members and clients in an effective and efficient manor to accomplish goals.</h6>
                <div>
                    <Button onClick={this.handleClick}></Button>
                </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Lindenwood University</h2></Card.Title>
          <Card.Text>
            <h7>AUG 2020 - PRESENT</h7>
            <h6>Currently in MBA program at Lindenwood University – emphasis in Finance.  Courses include Economics, Accounting, Managerial Studies.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>St. Louis Country Club and Algonquin Country Club</h2></Card.Title>
          <Card.Text>
            <h7>JUN 2014 - AUG 2018</h7>
            <h6>Coached tennis and paddleball lessons for children and adults. Worked in the shop selling clothing, 
                taking phone calls, setting up regular personal private lessons, and hosting various events. Implemented 
                a plan for keeping the tennis grounds in top shape for the members.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      } else {
          return <div><DaughertyRoleCards /></div>
        }
    } 
} 

export default ExperienceCards;
