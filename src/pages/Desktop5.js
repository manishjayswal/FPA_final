import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop5.module.css";

const Desktop5 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className={styles.desktop5}>
      <div className={styles.upload}>Upload</div>
      <div className={styles.upload1}>Upload</div>
      <div className={styles.download}>Download</div>
      <img className={styles.funding1Icon} alt="" src="/funding-1@2x.png" />
      <div className={styles.financialSimulation}> Financial Simulation</div>
      <div className={styles.desktop5Child} />
      <div className={styles.forecastPl}>{`Forecast  P&L`}</div>
      <div className={styles.desktop5Item} />
      <div className={styles.clickHere}>Click here</div>
      <div className={styles.desktop5Inner} />
      <div className={styles.detailedYear3}>Detailed Year-3</div>
      <div className={styles.detailedYear12}>Detailed Year-1, 2</div>
      <div className={styles.detailedYear1}>Detailed Year-1</div>
      <div className={styles.detailedYear2}>Detailed Year-2</div>
      <div className={styles.annualizedSummary}>Annualized Summary</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.clickHere1}>Click here</div>
      <div className={styles.detailedYear123}>Detailed Year-1,2 ,3</div>
      <div className={styles.desktop5Child1} />
      <div className={styles.desktop5Child2} />
      <div className={styles.desktop5Child3} />
      <div className={styles.clickHere2}>Click here</div>
      <div className={styles.clickHere3}>Click here</div>
      <div className={styles.clickHere4}>Click here</div>
      <div className={styles.clickHere5}>Click here</div>
      <div className={styles.desktop5Child4} onClick={onRectangle7Click} />
      <div className={styles.next}>Next</div>
      <div className={styles.desktop5Child5} onClick={onRectangle8Click} />
      <div className={styles.previous}>Previous</div>
    </div>
  );
};

export default Desktop5;
