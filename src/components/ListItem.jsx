

const ListItem = ({contact, setContacts,allContacts}) => {
    const handleDeleteContact = () => {
        const newArray = allContacts.filter( (element) => element.id != contact.id)
        setContacts(newArray)
    }
  return (
    <>
        <div key={contact.id}>
            
            <img className="image" src={contact.pictureUrl} alt="" />
            <p>{contact.name}</p>
            <p>{contact.popularity}</p>
            <p>{contact.wonOscar ? "🏆" : null} </p>
            <p>{contact.wonEmmy ? "🌟" : null} </p>
            <button onClick={handleDeleteContact}>Delete</button>
        </div>
        
    </>
  )
}

export default ListItem
