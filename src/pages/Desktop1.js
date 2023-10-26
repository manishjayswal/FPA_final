import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";
import axios from "axios";
import Appy from "./Appy";

const Desktop1 = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [calculationDone, setCalculationDone] = useState(false); // Track calculation status

  const onUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  // const onRectangle2Click = useCallback(() => {
  //   navigate("/desktop-2");
  // }, [navigate]);

  // const onNextTextClick = useCallback(() => {
  //   navigate("/desktop-2");
  // }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      console.log("Uploading file:", selectedFile.name);
      uploadFile(selectedFile);
    } else {
      setSelectedFileName(null);
      console.log("No file selected");
    }
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const onCalculateButtonClick = () => {
    // Send a request to the backend to trigger the calculation
    axios
      .get("http://localhost:5000/calculate")
      .then((response) => {
        console.log(response.data);
        // Handle success, maybe show a success message
        setCalculationDone(true); // Update calculation status
      })
      .catch((error) => {
        console.error("Error calculating:", error);
        // Handle error, display an error message
      });
  };

  const onDownloadButtonClick = () => {
    // Trigger the file download by creating a link and clicking it
    const downloadLink = document.createElement("a");
    downloadLink.href = "http://localhost:5000/outputfiles/Output.csv";
    downloadLink.download = "Output.csv";
    downloadLink.click();
  };

  return (
    <div className={styles.desktop1}>
      <img className={styles.funding1Icon} alt="" src="/funding-1@2x.png" />
      <div className={styles.desktop1Child} />
      <div className={styles.simulateCardsPl}>{`Simulate Cards  P&L`}</div>
      <div className={styles.uploadInputFile}>
        {selectedFileName || "Upload Input File"}
      </div>
      <div className={styles.desktop1Item} />
      <div
        className={styles.uploadButton}
        onClick={onUploadButtonClick}
        style={{ cursor: "pointer" }}
      >
        <b>Upload</b>
      </div>
      <form encType="multipart/form-data">
        <input
          id="fileInput"
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </form>

      <button className={styles.calculateButton} onClick={ () => onCalculateButtonClick() }>
        <b>Calculate</b>
      </button>

      <button
        className={styles.downloadButton}
        onClick={onDownloadButtonClick}
        style={{ display: calculationDone ? "block" : "none" }} // Conditionally render the button
      >
       <b>Download</b>
      </button>
      
      <div className={styles.desktop4Item} ></div>
      <div className={styles.financialSimulation}>
        <h4>Financial Simulation</h4>
      </div>
      <div className={styles.desktop1Inner} onClick={onRectangle2Click} ></div>
      <div className={styles.next} onClick={onNextTextClick}>
        Next
      </div>
{/* <Appy/> */}
    </div>
  );
};

export default Desktop1;
