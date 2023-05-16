import React from "react";

const Navi = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid p-2 ">
          <a className=" text_brand navbar-brand navbar-dark ms-5" href="/">
            Weks.
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-dark me-5">
              <a className="text-link nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="text-link nav-link active" href="#about">
                About
              </a>
              <a className="text-link nav-link active" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="navbar md-12 ">
        <ul className="list_navbar">
          <li className="">
            <a className="content_navbar" href="/">
              JUNIOR.
            </a>
          </li>
        </ul>
        <ul className="list_navbar gap-5">
          <li>
            <a className="content_navbar" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="content_navbar" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="content_navbar" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div> */}
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#add8e6"
            fill-opacity="1"
            d="M0,160L6.2,181.3C12.3,203,25,245,37,229.3C49.2,213,62,139,74,128C86.2,117,98,171,111,197.3C123.1,224,135,224,148,218.7C160,213,172,203,185,176C196.9,149,209,107,222,106.7C233.8,107,246,149,258,138.7C270.8,128,283,64,295,58.7C307.7,53,320,107,332,112C344.6,117,357,75,369,53.3C381.5,32,394,32,406,42.7C418.5,53,431,75,443,85.3C455.4,96,468,96,480,117.3C492.3,139,505,181,517,165.3C529.2,149,542,75,554,69.3C566.2,64,578,128,591,154.7C603.1,181,615,171,628,192C640,213,652,267,665,266.7C676.9,267,689,213,702,202.7C713.8,192,726,224,738,218.7C750.8,213,763,171,775,176C787.7,181,800,235,812,261.3C824.6,288,837,288,849,250.7C861.5,213,874,139,886,138.7C898.5,139,911,213,923,208C935.4,203,948,117,960,101.3C972.3,85,985,139,997,165.3C1009.2,192,1022,192,1034,186.7C1046.2,181,1058,171,1071,186.7C1083.1,203,1095,245,1108,229.3C1120,213,1132,139,1145,117.3C1156.9,96,1169,128,1182,133.3C1193.8,139,1206,117,1218,112C1230.8,107,1243,117,1255,138.7C1267.7,160,1280,192,1292,202.7C1304.6,213,1317,203,1329,181.3C1341.5,160,1354,128,1366,133.3C1378.5,139,1391,181,1403,186.7C1415.4,192,1428,160,1434,144L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Navi;
