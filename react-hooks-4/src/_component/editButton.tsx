import { useContext } from "react"
import { AdminFlagContext } from "./providers/AdminFlagProvider"

const style = {
  with: "100px",
  padding: "6px",
  borderRadius: "8px"
}

export const EditButton = () => {
  const { isAdmin }: any = useContext(AdminFlagContext)

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
}  