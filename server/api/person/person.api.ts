import {Person} from "./person.dto";
import {delay} from "~~/server/helper";

export function getAllPerson(): Promise<Person[]> {
  return delay(1000).then(() => [
    {
      firstName: 'Nicolas',
      lastName: 'DUPOND',
      email: 'nicolas@gmail.com',
    },
    {
      firstName: 'Anne',
      lastName: 'Lefloch',
      email: 'anne.lefloch@hotmail.bzh',
    }
  ])
  // return Promise.all([
  //   {
  //     firstName: 'Nicolas',
  //     lastName: 'DUPOND',
  //     email: 'nicolas@gmail.com',
  //   },
  //   {
  //     firstName: 'Anne',
  //     lastName: 'Lefloch',
  //     email: 'anne.lefloch@hotmail.bzh',
  //   }
  // ])
}
