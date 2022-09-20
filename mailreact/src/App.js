import React, { Fragment } from 'react'
import logo from './logo.svg';
import './App.css';
import Heading from './Heading/Heading';
import SideNav from './SideNav/SideNav';
import Search from './Searchbox/Search';
import '@elastic/eui/dist/eui_theme_light.css';
import InboxMailTabs from './MailContent/InboxMailTabs';
function App() {
  return (
    <Fragment>
      <Heading />
      <Search />
      <SideNav />
    </Fragment>
  );
}

export default App;
