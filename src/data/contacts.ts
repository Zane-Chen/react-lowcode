let data = {contacts: [
  {
    id: 1,
    first: 'Dalien',
    last: 'Chen',
    favorite: 'banana'
  },
  {
    id: 2,
    first: 'Zeno',
    last: 'Chen',
    favorite: 'apple'
  },
]}

export function getContacts () {
  return data
}

export function createContact() {
  data.contacts.push({
    id: Math.random(),
    first: 'Test',
    last: 'Chen',
    favorite: 'banana'
  })
}

export interface ContactItem {
  id: number
  first: string
  last: string
  favorite: string
}