import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./style.css";

export default function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              style={{display: '',
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid #CF0505",
              backgroundColor: "transparent",
             }}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}style={{display: '',
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid #CF0505",
              backgroundColor: "transparent",
             }}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}style={{display: '',
              borderRadius: 10, borderColor: "green", width: 'auto', color: "green", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid #CF0505",
              backgroundColor: "transparent",
             }}>Update</button>
                  <button onClick={() => onImageRemove(index)}style={{display: '',
              borderRadius: 10, borderColor: "#CF0505", width: 'auto', color: "#CF0505", height: 35, fontSize: 13, margin: "1px 5px 1px 5px", padding: '5px 15px 5px 15px',
              fontWeight: 800,
              border: " 2px solid #CF0505",
              backgroundColor: "transparent",
             }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

;
