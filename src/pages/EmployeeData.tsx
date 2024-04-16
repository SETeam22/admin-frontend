
import React, { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Overlay from '../components/Overlay';

// Column Definitions
const userColumns = [
  // ... other columns remain unchanged
  // Action column removed for now, will be added later in the component
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Name",
    headerName: "Employee",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithNames ${params.row.Name}`}>
          {params.row.Name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "order",
    headerName: "Order ID",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      const statusClasses = {
        active: "bg-green-50 text-green-500 text-sm",
        inactive: "bg-red-50 text-red-500 text-sm"
      };
      const statusClass = statusClasses[params.row.status] || '';
      return (
        <div className="flex items-center justify-start h-full">
        <div className={`cellWithStatus ${statusClass} p-1 rounded`} style={{ width: 'fit-content' }}>
            {params.row.status}
        </div>
      </div>
        // <div className={`cellWithStatus flex items-center justify-start w-full ${statusClass} p-1 rounded`}>
        //   {params.row.status}
        // </div>
      );
    },
  },
];

// Initial rows data
const initialRows = [
  // ... Your initial data
  {
    id: 1,
    Name: "Jon Snow",
    email: "jon@example.com",
    age: 35,
    order: "1143155",
    status: "active"
  },
  {
    id: 2,
    Name: "Jamie Lannister",
    email: "jamie@example.com",
    age: 42,
    order: "",
    status: "inactive"
  }
];

const EmployeeData = () => {

  const [data, setData] = useState(initialRows);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Delete action handler
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Assign action handler
  const handleAssign = (driverId) => {
    const orderId = prompt("Please enter the Order ID:");
    if (orderId) {
      setData(data.map((item) =>
        item.id === driverId ? { ...item, order: orderId, status: 'active' } : item
      ));
    }
  };


  // Action column definitions
 

  const handleOrderDelivered = (driverId) => {
    setData(data.map((item) =>
      item.id === driverId ? { ...item, order: null, status: 'inactive' } : item
    ));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3 justify-start h-full">
            {params.row.status === 'active' && (
              <div
                className="deliveryButton bg-green-500 text-white py-1 px-2 rounded cursor-pointer text-sm"
                onClick={() => handleOrderDelivered(params.row.id)}
              >
                On Delivery
              </div>
            )}
            <div
              className="deleteButton bg-red-500 text-white py-1 px-2 rounded cursor-pointer text-sm"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            {params.row.status === 'inactive' && !params.row.order && (
              <div
                className="assignButton bg-yellow-500 text-white py-1 px-2 rounded cursor-pointe text-sm"
                onClick={() => handleAssign(params.row.id)}
              >
                Assign
              </div>
            )}
          </div>
        );
      },
    },
  ];
  

  
  return (
    <div>
      <div className="h-[600px] p-5">
        <div className="w-full text-2xl text-gray-500 mb-2 flex items-center justify-between">
          Drivers
          <button className="link text-green-500 border-green-500 border text-sm font-normal py-1 px-2 rounded cursor-pointer no-underline" onClick={openModal}>
            Add New
          </button>
        </div>
        <div style={{ height: "calc(100% - 50px)"}}>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
      <Overlay showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default EmployeeData;