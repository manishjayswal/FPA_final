import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <div className={styles.upload}>Upload</div>
      <div className={styles.upload1}>Upload</div>
      <div className={styles.download}>Download</div>
      <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      <div className={styles.financialSimulation}> Financial Simulation</div>
      <div className={styles.desktop2Child} />
      <div className={styles.desktop2Item} />
      <div className={styles.clickHere}>Click here</div>
      <div className={styles.desktop2Inner} />
      <div className={styles.chart3}>Chart-3</div>
      <div className={styles.chart4}>Chart-4</div>
      <div className={styles.chart1}>Chart-1</div>
      <div className={styles.chart2}>Chart-2</div>
      <div className={styles.previewAndVisualizeContainer}>
        <p className={styles.previewAndVisualize}>
          Preview and Visualize based
        </p>
        <p className={styles.previewAndVisualize}> on the input file</p>
      </div>
      <div className={styles.viewFile}>View file</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.clickHere1}>Click here</div>
      <div className={styles.chart5}>Chart-5</div>
      <div className={styles.desktop2Child1} />
      <div className={styles.desktop2Child2} />
      <div className={styles.desktop2Child3} />
      <div className={styles.clickHere2}>Click here</div>
      <div className={styles.clickHere3}>Click here</div>
      <div className={styles.clickHere4}>Click here</div>
      <div className={styles.clickHere5}>Click here</div>
      <div className={styles.desktop2Child4} onClick={onRectangle7Click} />
      <div className={styles.next}>Next</div>
      <div className={styles.desktop2Child5} onClick={onRectangle8Click} />
      <div className={styles.previous}>Previous</div>
    </div>
  );
};

export default Desktop2;
