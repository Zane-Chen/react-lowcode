let data = {contacts: [
  {
    id: 1,
    first: 'Dalien',
    last: 'Chen',
    favorite: 'banana',
  },
  {
    id: 2,
    first: 'Zeno',
    last: 'Chen',
    favorite: 'apple',
  },
]}

export function getContacts (contactsId?: number) {
  if (contactsId) {
    return data.contacts.find(item => item.id === Number(contactsId))
  }else{
    return data
  }
}

export function createContact() {
  const obj = {
    id: Math.random(),
    first: 'Test',
    last: 'Chen',
    favorite: 'banana'
  }
  data.contacts.push(obj)
  return obj
}

export function updateContact(id: string, updates) {
  console.log('更新',updates)
}

export function deleteContact(id: string){

}

export interface ContactItem {
  id: number
  first: string
  last: string
  favorite: string
}