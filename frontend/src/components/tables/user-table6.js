import * as React from "react";
import config from "../../config.json";
// import { DataGrid } from '@mui/x-data-grid';
import {
  DataGrid,
  GridColDef,
  GridCellParams,
  GridToolbar,
} from "@material-ui/data-grid";
import { Container } from "@material-ui/core";

import AccessManagement from "../AccessManagement/AccessManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

const payBill = (params) => {
  console.log(params.row.id);
  //const url=config.backEndURL+"/billing/user/paybill/" + params.row.id;
  const url = config.backEndURL + "/billing/user/paybill/" + params.row.id;
  var x = fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON) {
        //alert("Bill paid for invoice number: " + params.row.id)
        console.log("inside bill pay");
        //window.location.reload();
      } else {
        alert("Error in paying bill!");
      }
    });

  //const response=fetch(url);
  //alert("Bill Generated for " + params.row.firstName + " " + params.row.lastName + ". An email has been sent to " + params.row.email)
};

const columns = [
  {
    field: "pay",
    headerName: "Payment",
    width: 180,
    renderCell: (params: GridCellParams) => (
      <form action="https://buy.stripe.com/test_00g3eufoc3lQfyo5kk">
        <button
          className="btn btn-dark button"
          type="submit"
          onClick={(e) => {
            payBill(params);
          }}
        >
          Pay Bill
        </button>
      </form>
    ),
  },

  { field: "id", headerName: "Invoice No.", width: 140 },
  {
    field: "name",
    headerName: "Robot ID",
    width: 140,
    editable: true,
  },

  {
    field: "price",
    headerName: "Metric(min)",
    width: 130,
    editable: true,
  },

  {
    field: "duration",
    headerName: "Run(mins)",
    width: 150,
    editable: true,
  },

  {
    field: "created_date",
    headerName: "Bill Date",
    width: 190,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount(USD)",
    width: 180,
    editable: true,
  },
  {
    field: "ShareQR",
    headerName: "ShareQR",
    width: 200,
    renderCell: (params: GridCellParams) => (
      <Link
        to="/Billing/social"
        className="btn btn-dark m-3"
        style={{ float: "right" }}
      >
        Share QR
      </Link>
    ),
  },
];

class UserTable6 extends React.Component {
  state = { users: [] };
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = async () => {
    //const url=config.backEndURL+"/billing/user/bill/1";
    const ud = JSON.parse(sessionStorage.getItem("userDetails"));
    const url = config.backEndURL + "/billing/user/bill/" + ud.userId;
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    console.log(data);
    console.log("####");
    this.setState({ users: data });
  };

  render() {
    var total = 0;
    return (
      <div style={{ height: 250, width: "100%" }}>
        <div className="card-header text-white bg-dark pt-14 pb-14 text-center ">
          <b>Invoices</b>
        </div>
        <DataGrid
          class="center2"
          id={Math.random()}
          rows={this.state.users.map((user) => {
            total += user.duration;
            return {
              id: user.billingId,
              name: user.robotName,
              duration: user.duration,
              price: "1.0",
              amount: "USD " + user.duration,
              created_date: user.createdDate,
            };
          })}
          columns={columns}
          pageSize={2}
          rowsPerPageOptions={[1]}
        />

        <div className="card-header bg-dark text-white pt-14 pb-14 text-center ">
          <b>Total Pending Bill: USD {total}</b>
        </div>
      </div>
    );
  }
}

export default UserTable6;
