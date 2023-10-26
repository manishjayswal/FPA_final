import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Appy2() {
    const initialData = [
        { id: "exe", values: [0.000, 0.000, 0.000] },
        { id: 2, values: [0.000, 0.000, 0.000] },
        // Add more rows as needed
    ];

    const [rowData, setRowData] = useState(initialData);

    const handleUpdateAllRows = async () => {
        try {
            // Create a new data structure to send to the server
            const updatedData = rowData.map((row) => ({
                id: row.id,
                values: row.values.map((value) => parseFloat(value))
            }));

            // Send a POST request to update all rows
            await axios.post('/update-data', updatedData);
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
        // Function to fetch the updated data
        const fetchUpdatedData = async () => {
            try {
                const response = await axios.get('/get-updated-data', {
                    headers: {
                        Accept: 'application/json',
                    },
                });
                const updatedData = response.data;
    
                // Process the retrieved data (for example, update the state)
                // For simplicity, you can set the entire updated data to the rowData state
                setRowData(updatedData);
    
                console.log('Updated data retrieved successfully');
            } catch (error) {
                console.error('Error fetching updated data:', error);
                // Handle and display the error to the user
            }
        };
    
        // useEffect(() => {
        //     fetchUpdatedData(); // Fetch updated data when the component mounts
        // }, []); // The empty dependency array ensures it runs only once
    
    

    return (
        <div>
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
            <button onClick={handleUpdateAllRows}>Update All Rows</button>
        </div>
    );
}

export default Appy2;
