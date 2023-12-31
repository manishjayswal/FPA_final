import React, { useState, useEffect } from 'react';
import styles from "./Desktop6.module.css";
import axios from "axios";

const Desktop6 = () => {

  const initialData = [
    { id: "External Sales", values: [0.000, 0.000, 0.000] },
    { id: "Payment Rate", values: [0.000, 0.000, 0.000] },
    { id: "Merchant Sales", values: [0.000, 0.000, 0.000] },
    { id: "Credit Penetration", values: [0.000, 0.000, 0.000] },
    { id: "Transaction K", values: [0.000, 0.000, 0.000] },
    { id: "Applications", values: [0.000, 0.000, 0.000] },
    { id: "Approval Rate", values: [0.000, 0.000, 0.000] },
    { id: "Active Rate", values: [0.000, 0.000, 0.000] },
    { id: "Floating APR", values: [0.000, 0.000, 0.000] },
    { id: "Fixed APR", values: [0.000, 0.000, 0.000] },
    { id: "Promo APR", values: [0.000, 0.000, 0.000] },

    // Add more rows as needed
  ];

  const [rowData, setRowData] = useState(initialData);
  // const [rowData, setRowData] = useState();

  const handleUpdateAllRows = async () => {
    try {
      // Create a new data structure to send to the server
      const updatedData = rowData.map((row) => ({
        id: row.id,
        values: row.values.map((value) => parseFloat(value))
      }));
      
      console.log(updatedData);

      // Send a POST request to update all rows
      // await axios.post('http://127.0.0.1:5000/update-data', updatedData);
      // const response = await fetch('http://127.0.0.1:5000/calcm', {
        const response = await fetch('https://fpasimulate.azurewebsites.net/calcm', {
        method : "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      }).then((response)=>response.json())
      
      // const response = await axios.post('http://127.0.0.1:5000/calcm', updatedData);
      // const result = await response.json();
      console.log(response, "hello ram");
      setData(response)
      // fetchData();
      console.log('All rows updated successfully');
  
    } catch (error) {
      console.error('Error updating rows:', error);
      // Handle and display the error to the user
    }
  };

  const handleInputChange = (rowId, columnIndex, value) => {
    setRowData((prevData) => {
      return prevData.map((row) => {
        if (row.id === rowId) {
          const updatedValues = [...row.values];
          updatedValues[columnIndex] = value;
          return { ...row, values: updatedValues };
        }
        return row;
      });
    });
  };




const [data, setData] = useState({});

const fetchData = ()=>{
  // axios.get('http://127.0.0.1:5000/calcm')
  axios.get('https://fpasimulate.azurewebsites.net/calcm')

  .then((response)=>{
    console.log(response)
    setData(response.data);
  })
  .catch((error)=>{
    console.error('Error fetching updated data:',error);
  })

}

useEffect(()=>{
  fetchData();
},[]);



  // const [data, setData] = useState({});
  // useEffect(() => {
  //   // fetch("http://127.0.0.1:5000/members").then(
  //   fetch("http://127.0.0.1:5000/calcm")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data.members)
  //       setData(data)
  //       // console.log(data)
  //     })
  // }, [])


  const handleDownloadClick = () => {
    // Trigger the file download by creating a link and clicking it

  };

  return (
    <>
    {/* <div>
      <button onClick={handleUpdateAllRows} > Send Data </button>
      <p>{rowData.message}</p>
    </div> */}
      <div className="container">
        <div className={styles.left_panel}>
         
          <h1>Update Data</h1>
          <table>
            <thead>
              <tr>
                <th>Row</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  {row.values.map((value, index) => (
                    <td key={index}>
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(row.id, index, parseFloat(e.target.value))}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleUpdateAllRows}>Execute</button>
          <p>{rowData.message}</p>
        </div>


        <div className={styles.right_panel}>
          <table>
            <thead>
              <tr>
                <td>($MM)</td>
                <td>Baseline Year</td>
                <td>Year-1</td>
                <td>Year-2</td>
                <td>Year-3</td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Internal Sales Summary</td>

                <td>{data.internal_sales_summary_bs}</td>
                <td>{data.internal_sales_summary_1}</td>
                <td>{data.internal_sales_summary_2}</td>
                <td>{data.internal_sales_summary_3}</td>

              </tr>


              <tr>
                <td>External Sales Summary</td>
                <td>{data.external_sales_summary_bs}</td>
                <td>{data.external_sales_summary_1}</td>
                <td>{data.external_sales_summary_2}</td>
                <td>{data.external_sales_summary_3}</td>
              </tr>

              <tr>
                <td>Sales Summary</td>
                <td>{data.sales_summary_bs}</td>
                <td>{data.sales_summary_1}</td>
                <td>{data.sales_summary_2}</td>
                <td>{data.sales_summary_3}</td>
              </tr>

              <tr>
                <td>Payment Rate Summary</td>
                <td>{data.payment_rate_summary_bs}</td>
                <td>{data.payment_rate_summary_1}</td>
                <td>{data.payment_rate_summary_2}</td>
                <td>{data.payment_rate_summary_3}</td>
              </tr>
              <tr>
                <td>ENR Summary</td>
                <td>{data.enr_summary_bs}</td>
                <td>{data.enr_summary_1}</td>
                <td>{data.enr_summary_2}</td>
                <td>{data.enr_summary_3}</td>
              </tr>
              <tr>
                <td>ANR Summary</td>
                <td>{data.anr_summary_bs}</td>
                <td>{data.anr_summary_1}</td>
                <td>{data.anr_summary_2}</td>
                <td>{data.anr_summary_3}</td>
              </tr>
              <tr>
                <td>Merchant Sales Summary</td>
                <td>{data.merchant_sales_summary_bs}</td>
                <td>{data.merchant_sales_summary_1}</td>
                <td>{data.merchant_sales_summary_2}</td>
                <td>{data.merchant_sales_summary_3}</td>
              </tr>
              <tr>
                <td>Credit Penetration Summary</td>
                <td>{data.credit_penetration_summary_bs}</td>
                <td>{data.credit_penetration_summary_1}</td>
                <td>{data.credit_penetration_summary_2}</td>
                <td>{data.credit_penetration_summary_3}</td>
              </tr>
              <tr>
                <td>Transaction (K) Summary</td>
                <td>{data.transactions_k_summary_bs}</td>
                <td>{data.transactions_k_summary_1}</td>
                <td>{data.transactions_k_summary_2}</td>
                <td>{data.transactions_k_summary_3}</td>
              </tr>
              <tr>
                <td>Average Ticket Summary</td>
                <td>{data.average_ticket_summary_bs}</td>
                <td>{data.average_ticket_summary_1}</td>
                <td>{data.average_ticket_summary_2}</td>
                <td>{data.average_ticket_summary_3}</td>
              </tr>
              <tr>
                <td>Sales per Active Summary</td>
                <td>{data.sales_per_active_summary_bs}</td>
                <td>{data.sales_per_active_summary_1}</td>
                <td>{data.sales_per_active_summary_2}</td>
                <td>{data.sales_per_active_summary_3}</td>
              </tr>
              <tr>
                <td>Balance per Active Summary</td>
                <td>{data.balance_per_active_summary_bs}</td>
                <td>{data.balance_per_active_summary_1}</td>
                <td>{data.balance_per_active_summary_2}</td>
                <td>{data.balance_per_active_summary_3}</td>
              </tr>
              <tr>
                <td>New Accounts Summary</td>
                <td>{data.new_accounts_summary_bs}</td>
                <td>{data.new_accounts_summary_1}</td>
                <td>{data.new_accounts_summary_2}</td>
                <td>{data.new_accounts_summary_3}</td>
              </tr>

              <tr>
                <td>EOP Accounts Summary</td>
                <td>{data.eop_accounts_summary_bs}</td>
                <td>{data.eop_accounts_summary_1}</td>
                <td>{data.eop_accounts_summary_2}</td>
                <td>{data.eop_accounts_summary_3}</td>
              </tr>
              <tr>
                <td>Applications Summary</td>
                <td>{data.applications_summary_bs}</td>
                <td>{data.applications_summary_1}</td>
                <td>{data.applications_summary_2}</td>
                <td>{data.applications_summary_3}</td>
              </tr>
              <tr>
                <td>Approval Rate Summary</td>
                <td>{data.approval_rate_summary_bs}</td>
                <td>{data.approval_rate_summary_1}</td>
                <td>{data.approval_rate_summary_2}</td>
                <td>{data.approval_rate_summary_3}</td>
              </tr>
              <tr>
                <td>Average Actives Summary</td>
                <td>{data.average_actives_summary_bs}</td>
                <td>{data.average_actives_summary_1}</td>
                <td>{data.average_actives_summary_2}</td>
                <td>{data.average_actives_summary_3}</td>
              </tr>
              <tr>
                <td>Active Rate Summary</td>
                <td>{data.active_rate_summary_bs}</td>
                <td>{data.active_rate_summary_1}</td>
                <td>{data.active_rate_summary_2}</td>
                <td>{data.active_rate_summary_3}</td>
              </tr>
              <tr>
                <td>Floating APR Summary</td>
                <td>{data.floating_apr_summary_bs}</td>
                <td>{data.floating_apr_summary_1}</td>
                <td>{data.floating_apr_summary_2}</td>
                <td>{data.floating_apr_summary_3}</td>
              </tr>

              <tr>
                <td>Fixed APR Summary</td>
                <td>{data.fixed_apr_summary_bs}</td>
                <td>{data.fixed_apr_summary_1}</td>
                <td>{data.fixed_apr_summary_2}</td>
                <td>{data.fixed_apr_summary_3}</td>
              </tr>
              <tr>
                <td>Promo APR Summary</td>
                <td>{data.promo_apr_summary_bs}</td>
                <td>{data.promo_apr_summary_1}</td>
                <td>{data.promo_apr_summary_2}</td>
                <td>{data.promo_apr_summary_3}</td>
              </tr>
              <tr>
                <td>Transactors Summary</td>
                <td>{data.transactors_summary_bs}</td>
                <td>{data.transactors_summary_1}</td>
                <td>{data.transactors_summary_2}</td>
                <td>{data.transactors_summary_3}</td>
              </tr>
              <tr>
                <td>Total Average Balance Summary</td>
                <td>{data.total_average_balance_summary_bs}</td>
                <td>{data.total_average_balance_summary_1}</td>
                <td>{data.total_average_balance_summary_2}</td>
                <td>{data.total_average_balance_summary_3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Desktop6;
