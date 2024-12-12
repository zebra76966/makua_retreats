import React from "react";
import "./feedback.css";
import { motion, spring } from "framer-motion";

const FeedBack = () => {
  return (
    <motion.form className="help-form bg-primary p-4 shadow" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 2, type: spring }}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label fw-bold">
          Email address
        </label>
        <input type="email" class="form-control p-2 px-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="joeswanson@hotmail.com" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label fw-bold">
          Please describe your issue.
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type Here..."></textarea>
      </div>

      <button type="submit" class="btn bg-dark text-primary w-100 fw-bold">
        SUBMIT
      </button>
    </motion.form>
  );
};

export default FeedBack;
