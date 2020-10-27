import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../Components/ExperienceCards';


function HomeTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Experience</Tab>
      <Tab >Repositories</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
        <div>I am a software engineer</div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <div>Repositories</div>
    </TabPanel>
    <TabPanel>
      <div>Email: </div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;