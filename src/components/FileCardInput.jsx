import React from 'react'

function FileCardInput({name, handleChange, width_image, file}) {
    return (
        <div className="col-lg-6 text-center">
            <div className="row">
            <div className="col-lg-12">
                <div className="sub-title">{name}</div>
                <input type="file" name="files" onChange={handleChange} />
            </div>
            </div>
            <br />
            <div className="row">
            <div className="col-lg-12 text-center">
                <button
                className="btn btn-primary btn-round text-center"
                type="submit"
                >
                Guardar
                </button>
            </div>
            </div>
            <br />
            <div className="row">
            <div className="col-lg-12 text-center">
                <img className="img" style={width_image} src={file} />
            </div>
            </div>
        </div>
    )
}

export default FileCardInput
