import React from "react";

import "./EditUserProfile.css";
import { MDBInput } from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { defaultUserImg } from "../../../helpers/GlobalVariables";

const EditUserProfile = () => {
  return (
    <div className="edit_page_Container">
      <p className="wishlist_page_head">EditUserProfile</p>
      <div className="img_flex">
        {" "}
        <img
          style={{ height: "80px", marginBottom: "1rem", borderRadius: "60%" }}
          src={defaultUserImg}
          alt="user_img"
        />{" "}
      </div>
      <div style={{ columnGap: "1rem" }} className="user_detail_wrapper">
        {/* Childs of Grid Elements */}
        <div>
          <h3 className="user_name">Full Name </h3>
          <p className="user_name_ans">
            <MDBInput size="lg" placeholder="Full Name" />
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="user_name">Email</h3>
          <p
            style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            className="user_name_ans"
          >
            ha6817334@gmail.com{" "}
            <span className="update_email">
              <Link style={{ color: "white" }}>
                <FiEdit2 />
              </Link>{" "}
            </span>
          </p>
        </div>
        {/* 3 */}
        <div>
          <h3 className="user_name">Gender </h3>
          <p className="user_name_ans">
            <Form.Select aria-label="Default select example">
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </p>
        </div>
        {/* 4 */}
        <div className="details_wrapper">
          <h3 className="user_name">Mobile Number</h3>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.2rem",
            }}
            className="user_name_ans"
          >
            03160490149{" "}
            <span
              style={{
                backgroundColor: "rgb(75,180,151)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "50px",
              }}
            >
              {" "}
              <Link style={{ color: "white" }}>
                <FiEdit2 />
              </Link>{" "}
            </span>{" "}
          </p>
        </div>
        {/* 5 */}
        <div className="details_wrapper">
          <h3 className="user_name">Address</h3>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "0.2rem",
            }}
            className="update_profile_style"
          >
            03160490149{" "}
            <span
              style={{
                backgroundColor: "rgb(75,180,151)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "50px",
              }}
            >
              {" "}
              <Link style={{ color: "white" }}>
                <GrFormAdd style={{ fontSize: "1rem" }} />
              </Link>{" "}
            </span>{" "}
          </p>
        </div>
        {/* ENDS OF CHILDS */}
      </div>
      <button className="btn_update_profilee">Save</button>
    </div>
  );
};

export default EditUserProfile;
