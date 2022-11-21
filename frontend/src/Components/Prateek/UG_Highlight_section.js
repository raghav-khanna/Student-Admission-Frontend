import React from "react";
import "./UG_Highlight_section.css";
import {
  FaUsers,
  FaBook,
  FaLaptop,
  FaMicrophone,
  FaFilm,
  FaSun,
  FaChartBar
} from "react-icons/fa";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const UG_Highlight_section = () => {
  return (
    <div className="container">
      <h2 className="institute-title">HIGHLIGHTS</h2>
      <section className="institute-information-container-parent">
        <div className="institute-information-container-row">
          <div className="institute-information-card">
            <figure>
              <FaChartBar />
            </figure>
            <strong className="title">Placements (2021-22)</strong>
            <br />
            <br /><h4 className="numbers2">Highest Package <span className="numbers">53.87 LPA</span><br />
            Average Package <span className="numbers">13.65 LPA</span><br />
            Students Placed <span className="numbers">99.89%</span><br /></h4>
            
            Recruiters<br />
            Adobe, Uber, Amazon, Samsung, Microsoft, OYO, ArcelorMittal, Goldsman Sach, IBM, BOSCH, American Express, Delhivery, and many more.
            <br />
            
          </div>
          <div className="institute-information-card">
            <figure>
              <FaChartBar />
            </figure>
            <strong className="title">Higher Education</strong>
            <br />
            <br />
            Our alumni are pursuing/completed higher education degrees from prestigious institutions in India
            and abroad<br />
            University of Illinois, University of California, NTU, University of Minnesota, IITs, IIMs, IIITs, XLRI, and<br />
            many more.
            <br />
            
          </div>
          <div className="institute-information-card">
            <figure>
              <FaChartBar />
            </figure>
            <strong className="title">Entrepreneurships/Startups</strong>
            <br />
            <br />
            Our alumni and students have started successful organizations.<br />

Acro Packaging, The Elite Express, Mytokri.com, OC2, EventGraphia, Playlyfe, Dream Animators,<br /> Rohilya Foods Pvt. Ltd., Codescape Consultants, Walscape, Epiflux Technologies Private Limited,<br /> Islands United Football Club, Finoit Technologies (I) Pvt. Ltd. And many more.
            <br />
            
          </div>
        </div>
        {/* <div className="institute-information-container-row">
          <div className="institute-information-card">
            <figure>
              <FaMicrophone />
            </figure>
            <strong className="title">Infrastructure</strong>
            <br />
            <br />
            The LNMIIT, spread over 100-acre green campus, is at par with the
            best technological institutions in the country.
            <br />
            
          </div>
          <div className="institute-information-card">
            <figure>
              <FaFilm />
            </figure>
            <strong className="title">
              Institute Accreditation and Ranking
            </strong>
            <br />
            <br />
            The LNMIIT is a deemed-to be university under UGC and Accredited 'A'
            grade by NAAC. (Second-cycle of re-accreditation is in process)
            <br />
            
          </div>
          <div className="institute-information-card">
            <figure>
              <FaSun />
            </figure>
            <strong className="title">Life at LNMIIT</strong>
            <br />
            <br />
            Students actively participate in institute's activity through
            Gymkhana, councils and clubs.
            <br />
            
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default UG_Highlight_section;
