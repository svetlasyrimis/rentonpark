import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import SelectSession from "../components/SelectSession";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { ContentToHtml } from "../Helpers";
import moment from "moment";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ModalDeleteReservation from "../components/ModalDeleteReservation";

function FormReservation({ sessions, main_session, reservation = undefined }) {
  var content;
  if (reservation && reservation.description) {
    content = ContentToHtml(reservation.description);
  } else {
    content = EditorState.createEmpty();
  }
  const title = reservation ? "Editar reserva" : "Nueva reserva";
  const [editorState, seteditorState] = useState(content);
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const url = "http://localhost:3001/api/reservations/";

  const onEditorStateChange = e => {
    seteditorState(e);
  };

  const resetForm = () => {
    let form = document.getElementById("form-reservation");
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
    seteditorState(EditorState.createEmpty());
  };

  const CreateReservation = async data => {
    await axios
      .post(url, data)
      .then(response => {
        setIsSuccess("Reserva creada correctamente.");
        resetForm();
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const UpdateReservation = async data => {
    await axios
      .put(url + reservation._id, data)
      .then(response => {
        setIsSuccess("Reserva actualizada correctamente.");
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const onSubmit = async data => {
    setIsError(false);
    setIsLoading(true);
    data.description = convertToRaw(editorState.getCurrentContent());
    data.state = 1;

    if (reservation) {
      UpdateReservation(data);
    } else {
      CreateReservation(data);
    }

    setIsLoading(false);
  };

  const onCloseModal = e => {
    setIsModalOpen(false);
  };

  const onOpenModal = e => {
    setIsModalOpen(true);
  };

  const onDeleteReservation = async e => {
    setIsError(false);
    setIsLoading(true);

    await axios
      .delete(url + reservation._id)
      .then(response => {
        document.getElementById("all_reservations").click();
      })
      .catch(error => {
        setIsError(error.response.data.message);
        setIsLoading(false);
      });

    setIsLoading(false);
  };

  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <div className="card">
      <div className="card-header">
        <h5>{title}</h5>
      </div>
      <div className="card-block">
        {reservation && (
          <div className="text-center">
            <button onClick={onOpenModal} className="btn btn-danger btn-round">
              Eliminar Reserva
            </button>
            <ModalDeleteReservation
              isOpen={modalIsOpen}
              onClose={onCloseModal}
              onDeleteReservation={onDeleteReservation}
            />
          </div>
        )}
        <form
          className="form-material"
          id="form-reservation"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="text-success">{isSuccess}</h5>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input
                  name="start"
                  defaultValue={
                    reservation &&
                    moment(reservation.start)
                      .format()
                      .replace(":00-05:00", "")
                  }
                  className="form-control fill"
                  type="datetime-local"
                  ref={register({ required: true })}
                />
                <span className="form-bar"></span>
                <label className="float-label">Fecha/Hora Comienzo</label>
              </div>
              {errors.start && (
                <b className="label color-danger">Campo obligatorio</b>
              )}
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input
                  name="finish"
                  defaultValue={
                    reservation &&
                    moment(reservation.finish)
                      .format()
                      .replace(":00-05:00", "")
                  }
                  className="form-control fill"
                  type="datetime-local"
                  ref={register({ required: true })}
                />
                <span className="form-bar"></span>
                <label className="float-label">Fecha/Hora Fin</label>
              </div>
              {errors.finish && (
                <b className="label color-danger">Campo obligatorio</b>
              )}
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input
                  name="name"
                  defaultValue={reservation && reservation.name}
                  type="text"
                  className="form-control fill"
                  ref={register({ required: true })}
                />
                <span className="form-bar"></span>
                <label className="float-label">Nombre</label>
              </div>
              {errors.name && (
                <b className="label color-danger">Campo obligatorio</b>
              )}
            </div>
            <div className="col-lg-3">
              <div className="form-group form-default">
                <input
                  name="title"
                  defaultValue={reservation && reservation.title}
                  type="text"
                  className="form-control fill"
                  ref={register}
                />
                <span className="form-bar"></span>
                <label className="float-label">Título</label>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="offset-3 col-lg-6">
              <div className="form-group form-default">
                <SelectSession
                  data={sessions}
                  main_session={
                    reservation ? reservation.session : main_session
                  }
                  register={register}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <Editor
                name="description"
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
                localization={{
                  locale: "es"
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <button
                className="btn btn-success btn-round right"
                type="submit"
                disabled={isLoading}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormReservation;
