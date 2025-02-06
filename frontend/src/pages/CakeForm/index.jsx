import React from "react";
import "../CakeForm/form.css";
import CakeOrderForm from "../../components/CakeOrderForm";

function CakeForm() {
    return (
      <form>
        <CakeOrderForm />
        {/* <label>Enter your name:
          <input type="text" />
        </label> */}
      </form>
    )
  }
export default CakeForm