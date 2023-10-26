// import React, { useState } from 'react';
// import axios from 'axios';

// function Appy() {

//     const [formData, setFormdata] = useState([{
//         id:1, name:<b>External Sales</b>, col1:"", col2:"", col3:""
//     }])
//     const initialData = [
//         { id: 1, values: [0.000, 0.1000, 0.02000] },
//         { id: 2, values: [0.0005, 0.0010, 0.0015] },
//         // Add more rows as needed
//     ];

//     const [rowData, setRowData] = useState(initialData);

//     // const handleUpdateRow = async (id) => {
//     //     try {
//     //         const updatedRow = rowData.find((row) => row.id === id);
//     //         if (!updatedRow) {
//     //             console.error('Row not found:', id);
//     //             return;
//     //         }
//     //         // Send a POST request to update the row data
//     //         await axios.post(`/update-row/${id}`, updatedRow.values);
//     //         // Display a success message to the user
//     //         console.log(`Row ${id} updated successfully`);
//     //     } catch (error) {
//     //         console.error('Error updating row:', error);
//     //     }
//     // };
//     const handleUpdateRows = async () => {
//         try {
//             // Create an array to store the updated rows
//             const updatedRows = [];

//             for (const row of rowData) {
//                 const updatedRow = await axios.post(`/update-row/${row.id}`, row.values);
//                 updatedRows.push(updatedRow.data);
//             }

//             // Display a success message to the user
//             console.log('Rows updated successfully:', updatedRows);
//         } catch (error) {
//             console.error('Error updating rows:', error);
//         }
//     };

//     const handleInputChange = (e, id, index) => {
//         const updatedValue = parseFloat(e.target.value);
//         if (isNaN(updatedValue)) {
//             console.error('Invalid input:', e.target.value);
//             return;
//         }

//         setRowData((prevData) => {
//             return prevData.map((row) => {
//                 if (row.id === id) {
//                     const updatedValues = [...row.values];
//                     updatedValues[index] = updatedValue;
//                     return { ...row, values: updatedValues };
//                 }
//                 return row;
//             });
//         });
//     };

//     return <>
//         <div>
//             <h1>Update Data</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Row</th>
//                         <th>Column 1</th>
//                         <th>Column 2</th>
//                         <th>Column 3</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rowData.map((row) => (
//                         <tr key={row.id}>
//                             <td>{row.id}</td>
//                             {row.values.map((value, index) => (
//                                 <td key={index}>
//                                     <input
//                                         type="number"
//                                         value={value}
//                                         onChange={(e) => handleInputChange(e, row.id, index)}
//                                     />
//                                 </td>
//                             ))}
//                             {/* <td>
//                                 <button onClick={() => handleUpdateRow(row.id)}>Update</button>
//                             </td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={handleUpdateRows}>Update</button>
                            

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Parameter</th>
//                         <th>Year 1</th>
//                         <th>Year 2</th>
//                         <th>Year 3</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {formData.map((row) =>{
//                         <tr key={row.id}>
//                             <td>{row.name}</td>
//                             <td>
//                                 <input
                                    
//                                 />

//                             </td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
                            
//         </div>
//         </>
// }

// export default Appy;



























// import React, { useState } from 'react';
// import axios from 'axios';

// function Appy() {
//     const [externalSalesSummary, setExternalSalesSummary] = useState([0.000, 0.1000, 0.02000]);

//     const handleUpdateExternalSalesSummary = async () => {
//         try {
//             // Prepare the updated data
//             //   const updatedData = externalSalesSummary;
//             const updatedData = [parseFloat(externalSalesSummary[0]), parseFloat(externalSalesSummary[1]), parseFloat(externalSalesSummary[2])];
//             // Send a POST request to update external_sales_summary_yn
//             await axios.post('/update-external-sales-summary', updatedData);
//             // Display a success message to the user
//             console.log('External sales summary updated successfully br');
//         } catch (error) {
//             console.error('Error updating external sales summary:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Update Data</h1>
//             <div>
//                 <label>External Sales Summary:</label>
//                 <input
//                     type="number"
//                     value={externalSalesSummary[0]}
//                     onChange={(e) => setExternalSalesSummary([+e.target.value, externalSalesSummary[1], externalSalesSummary[2]])}
//                 />
//                 <input
//                     type="number"
//                     value={externalSalesSummary[1]}
//                     onChange={(e) => setExternalSalesSummary([externalSalesSummary[0], +e.target.value, externalSalesSummary[2]])}
//                 />
//                 <input
//                     type="number"
//                     value={externalSalesSummary[2]}
//                     onChange={(e) => setExternalSalesSummary([externalSalesSummary[0], externalSalesSummary[1], +e.target.value])}
//                 />
//                 <button onClick={handleUpdateExternalSalesSummary}>Update</button>
//             </div>
//             {/* Create similar UI elements and functions for other data types */}
//         </div>
//     );
// }

// export default Appy;






import React, { useState } from 'react';
import axios from 'axios';

function Appy() {
    const [externalSalesSummary, setExternalSalesSummary] = useState([0.000, 0.000, 0.00000]);

    const handleUpdateExternalSalesSummary = async () => {
        try {
            const updatedData = externalSalesSummary.map((value) => parseFloat(value));
            await axios.post('/update-external-sales-summary', updatedData);
            console.log('External sales summary updated successfully');
        } catch (error) {
            console.error('Error updating external sales summary:', error);
            // Handle and display the error to the user
        }
    };

    const handleInputChange = (index, value) => {
        const updatedSummary = [...externalSalesSummary];
        updatedSummary[index] = value;
        setExternalSalesSummary(updatedSummary);
    };

    return (
        <div>
            <h1>Update Data</h1>
            <div>
                <label>External Sales Summary:</label>
                {externalSalesSummary.map((value, index) => (
                    <input
                        key={index}
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(index, parseFloat(e.target.value))}
                    />
                ))}
                <button onClick={handleUpdateExternalSalesSummary}>Update</button>
            </div>
            {/* Create similar UI elements and functions for other data types */}
        </div>
    );
}

export default Appy;
