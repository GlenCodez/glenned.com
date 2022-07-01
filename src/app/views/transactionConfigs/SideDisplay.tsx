import {PeriodicTransactionConfig} from "glentils/dist/types";
import {WithId} from "mongodb";
import styles from "./SideDisplay.module.css";

export type SideDisplayProps = {
  name: string;
  data: WithId<PeriodicTransactionConfig>[]
}

const SideDisplay = ({name,data}: SideDisplayProps) => {
  console.log(data)
  return (
    <div className={`${styles.ctn}`}>
      <div>
        <h1>{name}</h1>
      </div>
      <ul className={`${styles.tcList}`}>
        {
          data.map((tc) => {
            const {
              _id,
              name
            } = tc
            return (
              <li key={`${_id}`} className={`${styles.tcItem}`}>
                <p>{name}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SideDisplay