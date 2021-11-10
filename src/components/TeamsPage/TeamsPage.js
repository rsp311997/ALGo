import React from "react";
import "../../style/TeamsPage.css";
import Footer from "../Basic/Footer.js";
import NavBar from "../Basic/NavBar.js";
import Section1 from "./Section1";
import Section2 from "./Section2";

class TeamsPage extends React.Component{
    render(){
        return(
            <div className="TeamsPage">
                   {/*Section 0*/}
                        <NavBar />
                   {/*Section 0*/}

                   {/*Section 1*/}
                        <Section1/>
                   {/*Section 1*/}

                   {/* Section 2 */}
                        <Section2/>
                   {/* Section 3 */}

                   {/* Section 4 */}
                        <Footer />
                   {/* Section 4 */}
            </div>
        );
    }
}

export default TeamsPage;