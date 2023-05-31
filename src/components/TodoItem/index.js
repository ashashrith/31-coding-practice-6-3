// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteList} = props
  const {title, id} = todoDetails
  const onDeleteList = () => deleteList(id)

  return (
    <li className="list-container">
      <p className="para">{title}</p>
      <button type="button" className="btn" onClick={onDeleteList}>
        Delete
      </button>
    </li>
  )
}
