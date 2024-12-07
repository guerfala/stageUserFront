import { Competence } from "./competence";
import { Employee } from "./employee";

export class Note {
    noteId!: number;
    employee!: Employee;
    competence!: Competence;
    note!: number; 
}
