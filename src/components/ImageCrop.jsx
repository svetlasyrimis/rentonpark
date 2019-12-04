import React, { useEffect } from "react";

function ImageCrop({ className, image_id, alt, image }) {
  var Clipper = require("image-clipper");

  useEffect(() => {
    const crop_image = image.crop;
    if (image.crop) {
      let preview = document.getElementById(image_id);
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
      <img className={className} id={image_id} alt={alt}></img>
    </React.Fragment>
  );
}

export default ImageCrop;
