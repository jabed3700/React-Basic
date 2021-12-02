import React from "react";
import './profile.style.css'

class Profile extends React.Component{
    render(){
        return (
            <div className="Container">
                <div className="Bio">
                    <h3>Md Jabed Hosen</h3>
                    <p>FullStack Javascript developer</p>
                </div>
                <div className="Skills">
                    <h3>Skills:</h3>
                    <ul>
                        <li>Java</li>
                        <li>Phython</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className="Links">
                    <h3>Social Links:</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Githum</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile