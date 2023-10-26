import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <div className={styles.upload}>Upload</div>
      <div className={styles.upload1}>Upload</div>
      <div className={styles.download}>Download</div>
      <img className={styles.funding1Icon} alt="" src="/funding-1@2x.png" />
      <div className={styles.desktop3Child} />
      <div className={styles.generateActualPlContainer}>
        <p
          className={styles.generateActualPl}
        >{`Generate Actual P&L for Month-1`}</p>
        <p className={styles.generateActualPl}> through Month-12</p>
      </div>
      <div className={styles.desktop3Item} />
      <div className={styles.generatePl}>{`Generate P&L`}</div>
      <div className={styles.financialSimulation}> Financial Simulation</div>
      <div className={styles.desktop3Inner} onClick={onRectangle2Click} />
      <div className={styles.next}>Next</div>
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.previous}>Previous</div>
    </div>
  );
};

export default Desktop3;
