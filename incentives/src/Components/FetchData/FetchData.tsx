import React, { useEffect, useState } from "react";

function FetchData()
{
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(error => alert(error))
      }, []);
    

    return(
        <div>
            <ul>
            {
                records.map((record:any) =>
                    <li key={record.id}>{record.id} | {record.name}</li>
                )
            }
            </ul>
        </div>
    )
}

export default FetchData;