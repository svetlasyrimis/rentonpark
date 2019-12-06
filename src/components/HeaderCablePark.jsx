import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import { convertFromJSONToHTML } from "../Helpers";

function HeaderCablePark() {
  const [isInitLoading, setIsInitLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDataBackground, setIsDataBackground] = useState(undefined);
  const [isReglamento, setIsReglamento] = useState("");

  const fetchData = async () => {
    setIsError(false);

    await axios
      .get("http://localhost:3001/api/images_type/cablepark")
      .then(res => {
        setIsDataBackground(res.data);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsInitLoading(false);
      });

    await axios
      .get("http://localhost:3001/api/sections_type/reglamento_cablepark")
      .then(res => {
        setIsReglamento(res.data[0]);
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsInitLoading(false);
      });

    setIsInitLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInitLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error....</h1>;
  }

  return (
    <section className="image-bg overlay parallax">
      <div className="background-image-holder fadeIn">
        {isDataBackground.map((background, index) => (
          <Slider index={index} data={background} key={index} title="" />
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 boxRiders">
            <h1 className="fontTide text-center">Cable Park</h1>
            <div className="feature feature-1 boxed">
              <div className="text-center">
                <i className="ti-package icon"></i>
                <h5 className="uppercase">Reservar</h5>
              </div>
              <div className="dLeyends">
                <div className="col-md-4">
                  <div className="dColour dPending"></div>
                  <span className="sText">Pendiente Confirmación</span>
                </div>
                <div className="col-md-4">
                  <div className="dColour dSuccess"></div>
                  <span className="sText">Reservado</span>
                </div>
                <div className="col-md-4">
                  <div className="dColour dOwn"></div>
                  <span className="sText">Turno Ocupado</span>
                </div>
              </div>
              <div className="dReglament">
                <div className="col-xs-12">
                  <h4>Reglamento</h4>
                  <span className="textReglament">
                    {isReglamento.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: convertFromJSONToHTML(
                            isReglamento.description
                          )
                        }}
                      />
                    )}
                  </span>
                </div>
              </div>
              <div className="dGrilla">
                <div className="col-xs-12">
                  <a href="#sectionCalendar" className="linkNavigation">
                    <h2 className="fontTide">Ver Grilla</h2>
                    <i className="fa fa-chevron-down fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderCablePark;
