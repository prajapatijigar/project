import React, { useState,useEffect } from 'react';

const CrudApplication = () => { 
    const [data,setData] = useState([])
    const [formData,setFormData] = useState({fullname:"",lastname:""})
    const [editIndex,setEditIndex] = useState(null)
      
    const  onChangeData = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    useEffect(() => {
         console.log("called"); 
    }, [data]);

    const addData = () => {
        if (!formData.fullname || !formData.lastname) {
            alert("Please enter both full name and last name");
            return;
        }
             
           if( editIndex !== null){
               const updatedData = data.map((item,index) => (
                     index === editIndex ? formData : item 
               )
               )
               setData(updatedData)
               setEditIndex(null)
           }       
               else {
                setData([...data, formData]);
              }

            setFormData({ fullname: '', lastname: '' }); // Reset form
    
    }

    const deleteData = (index) => {
        const newData = data.filter((item, idx) => idx !== index);
        setData(newData);
    }

    const editData = (index) => {
         setFormData(data[index])
        setEditIndex(index)

    }

    return (
        <>
             <div>
             <input type="text" name='fullname' value={formData.fullname} onChange={onChangeData} placeholder="Full Name"/>
             <input type="text" name='lastname' value={formData.lastname} onChange={onChangeData} placeholder="Last Name"/>
                  <button onClick={addData}>{editIndex !==null ? "Update": "Add"}</button>
             </div>

             <table className='table  table-hover'>   
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Fullname</td>
                        <td>Lastname</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item,index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.fullname}</td>
                            <td>{item.lastname}</td>
                            <td>
                                 <button className='btn btn-primary' onClick={() => editData(index)}>Edit</button>&nbsp;
                                 <button className='btn btn-secondary' onClick={() => deleteData(index)}>Delete</button>
                            </td>
                        </tr>
                           ) )}
                </tbody>
             </table>
        </>
    );
};

export default CrudApplication;