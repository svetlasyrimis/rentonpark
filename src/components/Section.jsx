import React from "react";
import ImageCrop from "../components/ImageCrop";
import { convertFromJSONToHTML } from "../Helpers";

function Section({ data }) {
  return (
    <section className="image-square">
      <div className="col-md-6 image">
        <div className="background-image-holder fadeIn">
          <ImageCrop
            className={"background-image"}
            image_id={"section_" + data._id}
            alt={"Background"}
            image={data}
          />
        </div>
      </div>
      <div className="col-md-6 content right">
        <h3 className="fontLemonMilk">{data.title}</h3>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: convertFromJSONToHTML(data.description)
          }}
        />
      </div>
    </section>
  );
}

export default Section;
