import  React from "react";
import "./AllProducts.css";
import { MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import {DataGrid} from "@mui/x-data-grid"
// mock data
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]
const AllProducts = () => {
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Products Manegment <span></span> </p>
      <div style={{marginBottom:"1rem"}} className="all_product_actions"> <Link to="/admin/products/add"><MDBBtn style={{ backgroundColor: "#00BA9D", display: "flex", alignItems: "center", columnGap: "0.5rem" }}>Add new Product <IoAddCircle size={30} /></MDBBtn></Link>  </div>
<p style={{color:"#848484",fontSize:"14px"}}>View Products:<span style={{fontWeight:"bold"}}>7</span>/<span>12</span></p>
<div className="products_grid">
<DataGrid 
columns={columns}
rows={rows}
/>
</div>




    </div>
  );
};

export default AllProducts;
