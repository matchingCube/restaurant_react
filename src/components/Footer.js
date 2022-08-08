import React from "react";

function Footer() {
  let contactInfoList = [
    "Lagerstrabe 23",
    "82178 Puchheim",
    "jannatlagerstr@gmail.com",
    "+49 8961203673",
  ];
  let iconSrcList = [
    "img/twitter.svg",
    "img/facebook.svg",
    "img/instagram.svg",
  ];
  return (
    <div className="footer row bg-dark">
      <div className="col-sm-4">
        {contactInfoList.map((infoList) => {
          return <p>{infoList}</p>;
        })}
      </div>
      <div className="col-sm-4 text-center">
        <h5>
          <strong>Ordering System</strong>
        </h5>
        <p>
          <strong>Powered By</strong>
        </p>
        <img
          src="img/fleksa-logo.svg"
          alt="fleksa logo"
          width="38%"
          height="38%"
        ></img>
      </div>
      <div className="col-sm-4 text-center">
        <div className="icon-group">
          {iconSrcList.map((iconSrc) => {
            return (
              <a href="void(0)" className="round-icon">
                <img src={iconSrc} alt="icon"></img>
              </a>
            );
          })}
        </div>
        <p className="small">
          &copy;2021 Fleksa | Terms & Conditions | Privacy Policy | Imprint
        </p>
      </div>
    </div>
  );
}

export default Footer;
