import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";
const Experience = () => {
  return (
    <div id="experience" name="Experience">
    <div className="container">
        <h1 className="sub-title">My Experience</h1>
        <div className="experience-list">
            <div>
                <h1>NETWORK ENGINEER</h1>
                <h2>MAY 2017 – APRIL 2022</h2>
                <p><BsFillPlayFill />&emsp;Monitoring and support network for 1000+ users in company</p>
                <p><BsFillPlayFill />&emsp;Create report of network operation and diagram</p>
                <p><BsFillPlayFill />&emsp;Configuring LAN, WAN and Wireless equipment</p>
                
            </div>
            <div>
                <h1>RF ENGINEER</h1>
                <h2>AUGUST 2014 – APRIL 2017</h2>
                <p><BsFillPlayFill />&emsp;Survey, test the performance of wireless networks (3G/LTE/4G) on customer site</p>
                <p><BsFillPlayFill />&emsp;Design and calculate power budget RF equipment for documentation</p>
                <p><BsFillPlayFill />&emsp;Communicate and requirement issue with customers</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Experience