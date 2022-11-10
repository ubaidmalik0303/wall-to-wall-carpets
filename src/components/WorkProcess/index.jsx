import React from "react";
import * as styles from "./styles.module.css";
import {
  FaCalculator,
  FaRulerHorizontal,
  FaToolbox,
  FaLongArrowAltRight,
} from "react-icons/fa";

const WorkProcess = () => {
  return (
    <div
      className={`row ${styles.workProcess} justify-content-center align-items-center py-5`}
    >
      <div className="col-md-3">
        <FaRulerHorizontal />
        <h5>Measurement</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          earum perspiciatis magni. Dolore, dolores praesentium quia eos
          architecto nam deleniti laborum rem facere dolorum enim. Autem, vel!
          Eius, perferendis molestias!
        </p>
      </div>
      <div className="col-md-1">
        <FaLongArrowAltRight className={styles.arrowIcon} />
      </div>
      <div className="col-md-3">
        <FaCalculator />
        <h5>Estimate</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          earum perspiciatis magni. Dolore, dolores praesentium quia eos
          architecto nam deleniti laborum rem facere dolorum enim. Autem, vel!
          Eius, perferendis molestias!
        </p>
      </div>
      <div className="col-md-1">
        <FaLongArrowAltRight className={styles.arrowIcon} />
      </div>
      <div className="col-md-3">
        <FaToolbox />
        <h5>Installation</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          earum perspiciatis magni. Dolore, dolores praesentium quia eos
          architecto nam deleniti laborum rem facere dolorum enim. Autem, vel!
          Eius, perferendis molestias!
        </p>
      </div>
    </div>
  );
};

export default WorkProcess;
