import {Person} from "./person.dto";
import {delay} from "~~/server/helper";

const persons: Person[] = [
  {
    id: 1,
    firstName: 'Nicolas',
    lastName: 'DUPOND',
    email: 'nicolas@gmail.com',
  },
  {
    id: 2,
    firstName: 'Anne',
    lastName: 'Lefloch',
    email: 'anne.lefloch@hotmail.bzh',
  }
]

export function getAllPerson(): Promise<Person[]> {
  return delay(1000).then(() => persons)
}

export function getPersonById(personId: number): Promise<Person> {
  return delay(1000).then(() => {
    const person = persons.find(person => person.id === personId)
    if(person){
      return Promise.resolve(person)
    }else {
      return Promise.reject(`Person not found with id ${personId}`)
    }
  })
}
