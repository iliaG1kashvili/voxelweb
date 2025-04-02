import { useState } from 'react';
import './GetInTouchTable.css';
import GlowingCursor from '../goloweffect/GlowingCursor';

function GetInTouchTable() {
  return (
    <div className="GetInTouchTable">
      <GlowingCursor />
      <div className="GetInTouchTableDiv">
        {/* Left Section - Inputs */}
        <div className="GetInTouchTableDiv1">
        <div className="GetInTouchTableInfo">
          <div className="GetInTouchTableInfoInputContainer">
            <input className="GetInTouchTableInfoInput1" placeholder=" " />
            <label>Your name</label>
          </div>

          <div className="GetInTouchTableInfoInputContainer">
            <input className="GetInTouchTableInfoInput2" placeholder=" " />
            <label>Your phone number</label>
          </div>

          <div className="GetInTouchTableInfoInputContainer">
            <input className="GetInTouchTableInfoInput3" placeholder=" " />
            <label>Your email</label>
          </div>
        </div>

        {/* Right Section - Email */}
        <div className="GetInTouchTableEmail">
          <textarea className="GetInTouchTableEmailInput" placeholder="Enter your email" />
        </div>
        </div>

        {/* Submit Button - Placed Inside and Centered */}
        <div className='GetInTouchTableSentButtondiv'>
        <button className="GetInTouchTableSentButton" >Submit</button>
        </div>
      </div>
      
    </div>
  );
}

export default GetInTouchTable;
