import {Component} from 'react'
import TodoItem from './components/SimpleTodos'
import './index.css'
// eslint-disable-next-line import/extensions

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteList = id => {
    const {todosList} = this.state
    const filterList = todosList.filter(each => each.id !== id)
    this.setState({
      todosList: filterList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="cont">
            {todosList.map(eachItem => (
              <TodoItem
                todoDetails={eachItem}
                key={eachItem.id}
                deleteList={this.deleteList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
