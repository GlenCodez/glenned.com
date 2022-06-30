import {PeriodicTransactionConfig} from "glentils/dist/types";
import styles from "./SideDisplay.module.css";

export type SideDisplayProps = {
  name: string;
  data: PeriodicTransactionConfig[]
}

const SideDisplay = ({name,data}: SideDisplayProps) => {

  return (
    <div className={`${styles.ctn}`}>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default SideDisplay