import React from "react";
import faqsData from "./retreats.json";

const Faqs = () => {
  return (
    <div className="container">
      <div class="accordion" id="accordionExample">
        {faqsData.map((ini, i) => {
          return (
            <div class="accordion-item border-primary">
              <h2 class="accordion-header" id={`heading${i + 1}`}>
                <button
                  class="noFocus  fs-5 py-4 accordion-button collapsed text-primary bg-dark fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i + 1}`}
                  aria-expanded="false"
                  aria-controls={`collapse${i + 1}`}
                >
                  #{i + 1} {ini.name}
                </button>
              </h2>
              <div id={`collapse${i + 1}`} class="accordion-collapse collapse" aria-labelledby={`heading${i + 1}`} data-bs-parent="#accordionExample">
                <div class="accordion-body text-primary bg-dark">
                  {ini.info}
                  <strong> {ini.info}</strong>
                  {ini.info}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
