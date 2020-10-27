import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function DaughertyRoleCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Intern: Computer Technician</h2></Card.Title>
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
          <Card.Title><h2>Marketing Research Analyst</h2></Card.Title>
          <Card.Text>
            <h7>MAY 2012 - PRESENT</h7>
            <h6>As a consultant I worked in several challenging areas that have required great attention to detail, the ability to adapt to different work environments, 
                and the need to be able to guide team members and clients in an effective and efficient manor to accomplish goals.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Anheuser-Busch InBev</h2></Card.Title>
          <Card.Text>
            <h7>AUG 2020 - PRESENT</h7>
            <h6>Currently in MBA program at Lindenwood University – emphasis in Finance.  Courses include Economics, Accounting, Managerial Studies.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Software Engineer</h2></Card.Title>
          <Card.Text>
            <h7>JUN 2014 - AUG 2018</h7>
            <h6>Coached tennis and paddleball lessons for children and adults. Worked in the shop selling clothing, 
                taking phone calls, setting up regular personal private lessons, and hosting various events. Implemented 
                a plan for keeping the tennis grounds in top shape for the members.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default DaughertyRoleCards;
