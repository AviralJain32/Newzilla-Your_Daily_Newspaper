import React from "react";

const newsitem1 = (props) => {
    let { title, description, imageurl, newsURL, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ backgroundColor: "#f7f7f9" }}>
                <img src={imageurl ? imageurl : "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            by {author ? author : "Unknown"} on {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
                        Read More
                    </a>
                    <div className="card my-3">
                        <div className="card-body " style={{ backgroundColor: "#e9ecef" }}>
                            <h4>Source : {source}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default newsitem1;
