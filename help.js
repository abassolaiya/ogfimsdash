// "build": "node scripts/build.js",
<div key={i}>
  <div className="im_box">
    <div className="thumbnail position-relative">
      <img
        className="w-100"
        src={`${baseURL}${value.thumbnail}`}
        alt="Video thumbnail"
      />
      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url={
          value.url.startsWith("https://")
            ? value.url
            : `${baseURL}${value.url}`
        }
        onClose={() => setIsOpen(false)}
      />
      <button
        className="video-popup position-top-center theme-color"
        onClick={() => openModal()}
      >
        <span className="play-icon"></span>
      </button>
    </div>
    <div className="content">
      <div className="inner">
        <div className="content_heading">
          <h4 className="title descriptionTrim">
            <p to="">{value.title}</p>
          </h4>
          <br />
          <div className="row">
            <p className="description descriptionTrim col-lg-8 col-md-12 col-sm-12 col-12">
              {value.body}
            </p>
          </div>
        </div>
      </div>
      {/*<Link className="transparent_link" to="/"></Link>*/}
    </div>
  </div>
</div>;
