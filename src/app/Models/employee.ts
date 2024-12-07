import { Note } from "./note";

export class Employee {
    EmployeeId!: number;
    Nom!: string;
    Prenom!: string;
    Notes!: Note[];
}
