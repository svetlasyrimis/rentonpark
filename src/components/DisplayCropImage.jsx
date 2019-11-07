import React, { useEffect } from "react";

function DisplayCropImage({ image, width_image, index }) {
  var Clipper = require("image-clipper");

  useEffect(() => {
    const crop_image = image.crop;
    if (image.crop) {
      let preview = document.getElementById("image_" + index);
      let x = crop_image.x;
      let y = crop_image.y;
      let width = crop_image.width;
      let height = crop_image.height;
      let src_image = "/images/" + image.image.originalname;
      Clipper(src_image, function() {
        this.crop(x, y, width, height).toDataURL(function(dataUrl) {
          preview.src = dataUrl;
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="col-lg-6">
        {image.crop && (
          <img
            className="mt-5"
            style={width_image}
            alt=""
            id={"image_" + index}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default DisplayCropImage;
