export class Assignment {
  _id!:string;
  id!:number;
  nomDevoir!:string
  dateDeRendu!:Date
  rendu!:boolean
  matiere!: string;
  note!: number;
  remarque !: string;
  auteur: string | undefined;
  nomProf!: string;
}
