import ListItem from "./ListItem"


const List = ({listContacts, setContacts}) => {

   

  return (
    <>


      {listContacts.map((user) => {
        return (
            <div key={user.id}>
                <ListItem contact={user} allContacts={listContacts} setContacts={setContacts} />
            </div>
        )
      })}
     
    </>
  )
}

export default List
