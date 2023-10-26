import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop7.module.css";

const Desktop7 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className={styles.desktop7}>
      <div className={styles.upload}>Upload</div>
      <div className={styles.upload1}>Upload</div>
      <div className={styles.download}>Download</div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.financialSimulation}> Financial Simulation</div>
      <div className={styles.desktop7Child} />
      <div className={styles.desktop7Item} />
      <div className={styles.clickHere}>Click here</div>
      <div className={styles.chart3}>Chart-3</div>
      <div className={styles.chart4}>Chart-4</div>
      <div className={styles.chart1}>Chart-1</div>
      <div className={styles.chart2}>Chart-2</div>
      <div className={styles.desktop7Inner} />
      <div className={styles.chart5}>Chart-5</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop7Child1} />
      <div className={styles.desktop7Child2} />
      <div className={styles.clickHere1}>Click here</div>
      <div className={styles.clickHere2}>Click here</div>
      <div className={styles.clickHere3}>Click here</div>
      <div className={styles.clickHere4}>Click here</div>
      <div className={styles.chart6}>Chart-6</div>
      <div className={styles.desktop7Child3} />
      <div className={styles.clickHere5}>Click here</div>
      <div
        className={styles.visualizePlForecast}
      >{`Visualize P&L Forecast`}</div>
      <div className={styles.desktop7Child4} onClick={onRectangle7Click} />
      <div className={styles.previous}>Previous</div>
    </div>
  );
};

export default Desktop7;
