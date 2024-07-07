import './table.scss'
import {useEffect,useState} from 'react'
import axios from 'axios'
function Table(){
  const [rows,setRows] = useState([]);
  const [sr,setSr] = useState(1)

  useEffect(()=>{
    const readData = async () => {
      const response = await axios.post('/v1/readData')
      console.log(response)
      setRows(response.data)
    }
    readData()
  },[])
  const columns = [
    {
      key: "sr",
      label: "SR",
    },
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "enrollment",
      label: "ENROLLMENT",
    },
    {
      key: "email",
      label: "EMAIL",
    },
    {
      key: "phone",
      label: "PHONE",
    },
    {
      key: "dipartment",
      label: "DIPARTMENT",
    },

  ];
  const getSR = () => {
    let i = sr + 1
    setSr(i)
  }
  // Utility function to get the value from the row based on column key
  const getKeyValue = (row, key) => {
    return row[key];
  };

  return (
    <div className='table'>
     <div className='table-headers'>
        {columns.map(column => 
          <div className='table-column' key={column.key}>{column.label}</div>
        )}
      </div>
      <div className='table-data'>
        {rows.map((row,index) => 
          <div className='table-row' key={row.key}>
            {columns.map(column => 
              <div className='table-cell' key={column.key}>
                {column.key === 'sr' ? index+1 : getKeyValue(row, column.key)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Table;

