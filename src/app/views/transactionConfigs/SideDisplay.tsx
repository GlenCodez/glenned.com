import {PeriodicTransactionConfig} from "glentils/dist/types";
import {WithId} from "mongodb";
import {memo} from "react";
import styles from "./SideDisplay.module.css";
import {AddTransactionConfig} from "./SideDisplay.utils";

export type SideDisplayProps = {
  name: string;
  data: WithId<PeriodicTransactionConfig>[]
}

type ToolBarProps = {
  name: string;
}

const ToolBar = memo(({name}: ToolBarProps) => {
  return (
    <div className={`${styles.toolBar}`}>
      <h1>{name}</h1>
      <button className={`${styles.btn}`} onClick={() => AddTransactionConfig()}>New</button>
    </div>
  )
})

const SideDisplay = ({name,data}: SideDisplayProps) => {
  console.log(data)
  return (
    <div className={`${styles.ctn}`}>
      <ToolBar name={name}/>
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

export default memo(SideDisplay)