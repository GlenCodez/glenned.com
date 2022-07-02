import {PeriodicTransactionConfig} from "glentils/dist/types";
import {ObjectId, WithId} from "mongodb";
import {memo, useCallback, useState} from "react";
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

type TCListProps = {
  data: WithId<PeriodicTransactionConfig>[]
  selectTCItem: (_id: ObjectId) => void
}
const TCList = ({data, selectTCItem}: TCListProps) => {
  return (
    <ul className={`${styles.tcList}`}>
      {
        data.map((tc) => {
          const {
            _id,
            name
          } = tc
          return (
            <li key={`${_id}`} className={`${styles.tcItem}`} onClick={() => selectTCItem(_id)}>
              <p>{name}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

type TCItemProps = {
  tcItem: WithId<PeriodicTransactionConfig>
  backToList: () => void
}

const TCItem = ({tcItem, backToList}: TCItemProps) => {
  return (
    <div>
      <div>
        <button onClick={backToList}>Back</button>
      </div>
      <div>
        <p>{tcItem.name}</p>
        <p>{tcItem.amount}</p>
      </div>
    </div>
  )
}

const SideDisplay = ({name,data}: SideDisplayProps) => {
  const [selectedTC, setSelectedTC] = useState<WithId<PeriodicTransactionConfig>|null>(null)
  const SelectTCItem = useCallback((_id:ObjectId) => {
    const item = data.find(i => i._id === _id)
    setSelectedTC(item as WithId<PeriodicTransactionConfig>)
  }, [])
  const BackToList = () => {
    setSelectedTC(null)
  }
  return (
    <div className={`${styles.ctn}`}>
      <ToolBar name={name} />
      {
        selectedTC ?
          <TCItem tcItem={selectedTC} backToList={BackToList} /> :
          <TCList data={data} selectTCItem={SelectTCItem}/>
      }
    </div>
  )
}

export default memo(SideDisplay)