import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop4.module.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <div className={styles.upload}>Upload</div>
      <div className={styles.upload1}>Upload</div>
      <div className={styles.download}>Download</div>
      <div className={styles.desktop4Child} />
      <div className={styles.desktop4Item} />
      <div className={styles.clickHere}>Click here</div>
      <div className={styles.desktop4Inner} />
      <div className={styles.chart3}>Chart-3</div>
      <div className={styles.chart4}>Chart-4</div>
      <div className={styles.chart1}>Chart-1</div>
      <div className={styles.chart2}>Chart-2</div>
      <div className={styles.viewFile}>View file</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.clickHere1}>Click here</div>
      <div className={styles.upload2}>Upload</div>
      <div className={styles.chart5}>Chart-5</div>
      <div className={styles.desktop4Child1} />
      <div className={styles.desktop4Child2} />
      <div className={styles.desktop4Child3} />
      <div className={styles.clickHere2}>Click here</div>
      <div className={styles.clickHere3}>Click here</div>
      <div className={styles.clickHere4}>Click here</div>
      <div className={styles.clickHere5}>Click here</div>
      <div className={styles.visualizePlMonth1Container}>
        <p className={styles.visualizePl}>{`               Visualize P&L`}</p>
        <p className={styles.visualizePl}>Month-1 through Month-12</p>
      </div>
      <div className={styles.upload2}>Upload</div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.financialSimulation}> Financial Simulation</div>
      <div className={styles.desktop4Child4} onClick={onRectangle7Click} />
      <div className={styles.next}>Next</div>
      <div className={styles.desktop4Child5} onClick={onRectangle8Click} />
      <div className={styles.previous}>Previous</div>
    </div>
  );
};

export default Desktop4;
