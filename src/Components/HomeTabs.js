import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../Components/ExperienceCards';
import Repositories from './Repositories';


function HomeTabs() 
{ 
  return <div className="fluid-container"><Tabs>
    <TabList>
      <Tab name="AboutMeTab">About Me</Tab>
      <Tab name="ExperienceTab">Experience</Tab>
      <Tab name="RepositoriesTab">Repositories</Tab>
      <Tab name="ContactTab">Contact</Tab>
    </TabList>

    <TabPanel>
        <div>I am a software engineer</div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <Repositories />
    </TabPanel>
    <TabPanel>
      <div>Email: </div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;