import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="historyItem">
      <div className="logos">
        <p className="time">{timeAccessed}</p>
        <img className="img-item" src={logoUrl} alt="domain logo" />
        <p className="heading">{title}</p>
        <p key="domainUrl">{domainUrl}</p>
      </div>
      <div className="buttons">
        <button
          data-testid="delete"
          type="button"
          className="delete-btn"
          onClick={onDelete}
        >
          <img
            src=" https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
