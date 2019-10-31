import React from "react";

function Section({ data }) {
  return (
    <section className="image-square">
      <div className="col-md-6 image">
        <div className="background-image-holder fadeIn">
          <img
            alt="Background"
            className="background-image"
            src={"/images/" + data.image.originalname}
          ></img>
        </div>
      </div>
      <div className="col-md-6 content right">
        <h3 className="fontLemonMilk">{data.title}</h3>
        <hr />
        {data.body}
      </div>
    </section>
  );
}

export default Section;
