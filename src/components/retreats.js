import React from "react";
import cardsData from "./retreats.json";

const RetreatCards = () => {
  return (
    <div className="row">
      {cardsData.map((ini, i) => {
        return (
          <div className="col-lg-3 col-md-6 mb-4 mx-auto" key={ini.id}>
            <div class="card w-100 txtSecondary card-retreats h-100">
              <div class="card-body">
                <img src={`${ini.icon}`} height={80} />
                <h5 class="card-title fs-2 fw-bold">{ini.name}</h5>

                <p class="card-text">{ini.info}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RetreatCards;
