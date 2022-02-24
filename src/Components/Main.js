import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
import { Helmet } from "react-helmet";

const Main = ({ selectedPunk, punkListData }) => {
  const TITLE = "Nep Punks";
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  //console.log(punkListData);
  //console.log(punkListData[1]);
  //console.log(activePunk);

  console.log(punkListData[selectedPunk]);
  console.log(selectedPunk);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">
            {activePunk.name}{" "}
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                className="ownerImage"
                src={activePunk.owner.profile_img_url}
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@swikarrr</div>
              </div>
              <div className="ownerLink">
                <a
                  href="https://www.instagram.com/swikarrr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramLogo} alt="" />
                </a>
              </div>
              <div className="ownerLink">
                <a
                  href="https://twitter.com/swikarrrr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitterLogo} alt="" />
                </a>
              </div>
              <div className="ownerLink">
                <a href="#">
                  <img src={moreIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
