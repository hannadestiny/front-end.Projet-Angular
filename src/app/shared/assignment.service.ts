import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable,catchError,forkJoin,map,of, switchMap, tap } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  

  oponed = false;
  url = 'http://localhost:8010/api/assignments';
  constructor( private http: HttpClient ) { }
  
    
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url)
      .pipe(
        catchError(this.handleError<Assignment[]>('getAssignments', []))
      );
  }

  getNonRenduAssignments(): Observable<Assignment[]> {
    return this.getAssignments().pipe(
      map(assignments => assignments.filter(assignment => !assignment.note)),
      catchError(this.handleError<Assignment[]>('getNonRenduAssignments', []))
    );
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.url, assignment)
      .pipe(
        catchError(this.handleError<Assignment>('addAssignment'))
      );
  }

  updateAssignment(assignment:Assignment):Observable<any>{
    return this.http.put(this.url,assignment);
  }

  deletedAssignment(assignment:Assignment):Observable<any>{
    const deleteUrl = this.url+"/"+assignment._id;
    return this.http.delete(deleteUrl);
  }

  getAssignment(id:number):Observable<Assignment|any>{

    return this.http.get<Assignment>(this.url+"/"+id);
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation+" a echoue"+error.message);
      return of(result as T);
    };
  }

  generateAndAddAssignments(count: number): Observable<Assignment[]> {
    const newAssignments: Observable<Assignment>[] = [];
  
    for (let i = 0; i < count; i++) {
      const newAssignment = this.generateRandomAssignment();
      newAssignments.push(this.addAssignment(newAssignment));
    }
  
    return forkJoin(newAssignments).pipe(
      tap(() => {
        console.log(`${count} new assignments added`);
      }),
      switchMap(() => this.getAssignments())
    );

    }
  

  nom ="";
  generateRandomAssignment(): Assignment {

  const startDate = new Date('2022-01-01'); 
  const endDate = new Date('2026-12-31');   

  
  const timeDifference = endDate.getTime() - startDate.getTime();

 
  const randomTimeDifference = Math.random() * timeDifference;

 
    const randomId = Math.floor(Math.random() * 10000); 
    const randomName = ["TP1", "TP2", "TP3", "TP4", "TP5", "TP6", "TP7", "TP8", "TP9", "TP10","Pokemon 1","Pokemon 2","Pokemon 3","Pokemon 4","Pokemon 5","Pokemon 6","Pokemon 7","Pokemon 8","Pokemon 9","Pokemon 10"
  ,"Etude de cas 1","Etude de cas 2","Etude de cas 3","Etude de cas 4","Etude de cas 5","Etude de cas 6","Etude de cas 7","Etude de cas 8","Etude de cas 9","Etude de cas 10",
  "Projet 1","Projet 2","Projet 3","Projet 4","Projet 5","Projet 6","Projet 7","Projet 8","Projet 9","Projet 10",
  "QCM 1","QCM 2","QCM 3","QCM 4","QCM 5","QCM 6","QCM 7","QCM 8","QCM 9","QCM 10",
  "Wims 1","Wims 2","Wims 3","Wims 4","Wims 5","Wims 6","Wims 7","Wims 8","Wims 9","Wims 10",
  "Web 1","Web 2","Web 3","Web 4","Web 5","Web 6","Web 7","Web 8","Web 9","Web 10",
  "B-Arbre 1","B-Arbre 2","B-Arbre 3","B-Arbre 4","B-Arbre 5","B-Arbre 6","B-Arbre 7","B-Arbre 8","B-Arbre 9","B-Arbre 10",
  "Chatbot 1","Chatbot 2","Chatbot 3","Chatbot 4","Chatbot 5","Chatbot 6","Chatbot 7","Chatbot 8","Chatbot 9","Chatbot 10",
  "Outils de développement 1","Outils de développement 2","Outils de développement 3","Outils de développement 4","Outils de développement 5","Outils de développement 6","Outils de développement 7","Outils de développement 8","Outils de développement 9","Outils de développement 10",
  "Mini-projet 1","Mini-projet 2","Mini-projet 3","Mini-projet 4","Mini-projet 5","Mini-projet 6","Mini-projet 7","Mini-projet 8","Mini-projet 9","Mini-projet 10",
  "Outils de gestion 1","Outils de gestion 2","Outils de gestion 3","Outils de gestion 4","Outils de gestion 5","Outils de gestion 6","Outils de gestion 7","Outils de gestion 8","Outils de gestion 9","outils de gestion 10",
  "Introspection 1","Introspection 2","Introspection 3","Introspection 4","Introspection 5","Introspection 6","Introspection 7","Introspection 8","Introspection 9","Introspection 10",
  "Rapport de projet 1","Rapport de projet 2","Rapport de projet 3","Rapport de projet 4","Rapport de projet 5","Rapport de projet 6","Rapport de projet 7","Rapport de projet 8","Rapport de projet 9","Rapport de projet 10",
"Rapport d'activité 1","Rapport d'activité 2","Rapport d'activité 3","Rapport d'activité 4","Rapport d'activité 5","Rapport d'activité 6","Rapport d'activité 7","Rapport d'activité 8","Rapport d'activité 9","Rapport d'activité 10",
  "Presentation 1","Presentation 2","Presentation 3","Presentation 4","Presentation 5","Presentation 6","Presentation 7","Presentation 8","Presentation 9","Presentation 10",
  "Jeu de rôle 1","Jeu de rôle 2","Jeu de rôle 3","Jeu de rôle 4","Jeu de rôle 5","Jeu de rôle 6","Jeu de rôle 7","Jeu de rôle 8","Jeu de rôle 9","jeu de rôle 10",
  "Recueil des exigences 1","Recueil des exigences 2","Recueil des exigences 3","Recueil des exigences 4","Recueil des exigences 5","Recueil des exigences 6","Recueil des exigences 7","Recueil des exigences 8","Recueil des exigences 9","Recueil des exigences 10",
  "Projet de rechercehe SGBD 1","Projet de rechercehe SGBD 2","Projet de rechercehe SGBD 3","Projet de rechercehe SGBD 4","Projet de rechercehe SGBD 5","Projet de rechercehe SGBD 6","Projet de rechercehe SGBD 7","Projet de rechercehe SGBD 8","Projet de rechercehe SGBD 9","Projet de rechercehe SGBD 10",
];
    const randomDate = new Date(startDate.getTime() + randomTimeDifference); 
    const matieres = ["Angular", "Management", "Statistique", "Java", "OIB", "Communication","Base de données"];
    const randomRendu = Math.random() < 0.55; 
    const randomAuteur= ["Rania", "Claude", "Yassine", "Vanessa","Neila","Nour","Jose","Vincent","Richard","Laurent",
  "Joanna","Philippe","Charles","Paul","Marie","Jean","Pierre","Anne","Sophie","Marie","Julie","Juliette",
  "Julien","Arthur","Emmanuella","Francesca",];

    const randomNote = Math.random() < 0.5;
    const randomRemarques = Math.random() < 0.5; 

  
    const newAssignment = new Assignment();
    newAssignment.id = randomId;
    this.nom = randomName[Math.floor(Math.random() * randomName.length)];
    newAssignment.nomDevoir = this.nom;
    newAssignment.dateDeRendu = randomDate;
    if (this.nom.includes("Pokemon") || this.nom.includes("Wims")) {
      newAssignment.matiere = "Statistique";
    } else if (this.nom.includes("Etude de cas") || this.nom.includes("Rapport d'activité")) {
      const random = ["Management", "OIB"];
      newAssignment.matiere = random[Math.floor(Math.random() * random.length)]
    } else if (this.nom.includes("Recueil des exigences") || this.nom.includes("Outils de gestion")) {
      newAssignment.matiere = "OIB";
    } else if (this.nom.includes("TP") || this.nom.includes("Outils de développement")) {
      const random1 = ["Angular", "Java", "Base de données"];
      newAssignment.matiere = random1[Math.floor(Math.random() * random1.length)] 
    } else if (this.nom.includes("Presentation") || this.nom.includes("Jeu de rôle")) {
      newAssignment.matiere = "Communication";
    } else if (this.nom.includes("Web")) {
      newAssignment.matiere = "Angular";
    } else if (this.nom.includes("Introspection")) {
      newAssignment.matiere = "Java";
    } else if (this.nom.includes("Chatbot")) {
      newAssignment.matiere = "Management";
    } else if (this.nom.includes("Projet de rechercehe SGBD" || this.nom.includes("B-Arbre"))) {
      newAssignment.matiere = "Base de données";
  }else {
      newAssignment.matiere = matieres[Math.floor(Math.random() * matieres.length)];
    }
  
    newAssignment.auteur = randomAuteur[Math.floor(Math.random() * randomAuteur.length)];
    newAssignment.rendu = randomRendu
    if (randomRendu && randomNote) {
      newAssignment.note = Math.floor(Math.random() * 21); 
    }

    if (newAssignment.matiere === "Angular") {
      newAssignment.nomProf = "M. Buffa";
      if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
        newAssignment.remarque = "Très bon travail, le code est propre et bien commenté";
      }
      else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
        newAssignment.remarque = "Bon travail mais il manque des commentaires et des couleurs";
      } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
        newAssignment.remarque = "Le code ne contient pas toutes les fonctionnalités demandées";
      }
      else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
        newAssignment.remarque = "Le code ne compile pas";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
        newAssignment.remarque = "La date de rendu est dépassée";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
        newAssignment.remarque = "N'oubliez pas d'écrire le README et de commenter votre code";
      }

    } else if (newAssignment.matiere === "Java") {
      newAssignment.nomProf = "M. Lahire";
      if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
        newAssignment.remarque = "Très bon travail, le code est propre et bien commenté";
      }
      else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
        newAssignment.remarque = "Bon travail mais il manque des commentaires et des details";
      } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
        newAssignment.remarque = "Le code ne contient pas toutes les fonctionnalités demandées";
      }
      else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
        newAssignment.remarque = "Le code ne compile pas";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
        newAssignment.remarque = "La date de rendu est dépassée";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
        newAssignment.remarque = "N'oubliez pas commenter votre code et le cours";
      }

    } else if (newAssignment.matiere === "Management") {
        newAssignment.nomProf= "M. Tounsi";
        if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
          newAssignment.remarque = "Très bon travail, le rapport est bien structuré et bien rédigé";
        }
        else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
          newAssignment.remarque = "Bon rendu mais il manque des details et des propriétés";
        } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
          newAssignment.remarque = "Le rendu ne contient pas toutes les informations demandées et mal structuré";
        }
        else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
          newAssignment.remarque = "Le rendu n'est pas complet, il manque beaucoup d'informations";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
          newAssignment.remarque = "La date de rendu est dépassée";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
          newAssignment.remarque = "Prenez le temps de bien rédiger le rendu et de le structurer, referencez vos sources";
        }
      } else if (newAssignment.matiere === "Base do données") {
        newAssignment.nomProf= "M. Galli";
        if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
          newAssignment.remarque = "Très bon travail, le rapport est bien structuré et bien rédigé";
        }
        else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
          newAssignment.remarque = "Bon rendu mais il manque des details et des propriétés";
        } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
          newAssignment.remarque = "Le rendu ne contient pas toutes les informations demandées et mal structuré";
        }
        else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
          newAssignment.remarque = "Le rendu n'est pas complet, il manque beaucoup d'informations";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
          newAssignment.remarque = "La date de rendu est dépassée";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
          newAssignment.remarque = "Prenez le temps de bien rédiger le rendu et de le structurer, referencez vos sources";
        }


      } else if (newAssignment.matiere === "Statistique") {
        newAssignment.nomProf = "M. Donati";
        if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
          newAssignment.remarque = "Très bon travail, continuez comme ça";
        }
        else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
          newAssignment.remarque = "Bon rendu mais il manque des couleurs et des details";
        } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
          newAssignment.remarque = "Le cours n'a pas été utilisé";
        }
        else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
          newAssignment.remarque = "Le rendu ne contient pas le strict minimum";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
          newAssignment.remarque = "La date de rendu est dépassée";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
          newAssignment.remarque = "Trouvez les formules dans le cours et utilisez les";
        }
      }

       else if(newAssignment.matiere === "OIB"){
        newAssignment.nomProf = "Mme. Mirbel";
        if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
          newAssignment.remarque = "Très bon travail, le rapport est bien structuré et les diagrammes sont bien faits";
        }
        else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
          newAssignment.remarque = "Bon travail mais il manque exigences et des illustrations";
        } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
          newAssignment.remarque = "Le rendu est mal structuré et ne contient pas toutes les exigences";
        }
        else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
          newAssignment.remarque = "Le rendu ne répond pas aux exigences et au travil demandées";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
          newAssignment.remarque = "La date de rendu est dépassée";
        }
        else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
          newAssignment.remarque = "Voir les exigences et les diagrammes dans le cours";
        }

    }else if (newAssignment.matiere === "Communication") {
      newAssignment.nomProf = "M. Arnault";
      if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
        newAssignment.remarque = "Très bon travail, le rapport et la présentation sont bien structurés et bien rédigés";
      }
      else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
        newAssignment.remarque = "Bon travail mais la présentation a pris trop de temps, et le stress au début était visible";
      } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
        newAssignment.remarque = "La présentation n'est pas structurée et vous avez oublié de parler de certains points";
      }
      else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
        newAssignment.remarque = "La présentation était hors sujet ";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
        newAssignment.remarque = "La date de rendu est dépassée";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
        newAssignment.remarque = "Prenez le temps de répéter votre présentation et de vous entrainer";
      }
    }
    else if (newAssignment.matiere === "Base de données") {
      newAssignment.nomProf = "M. Galli";
      if (newAssignment.rendu && newAssignment.note >= 15 && randomRemarques) {
        newAssignment.remarque = "Très bon travail";
      }
      else if (newAssignment.rendu && newAssignment.note < 15 && newAssignment.note >10 && randomRemarques) {
        newAssignment.remarque = "Bon travail";
      } else if (newAssignment.rendu && newAssignment.note <= 10 && newAssignment.note >=5 && randomRemarques) {
        newAssignment.remarque = "Il manque des details";
      }
      else if (newAssignment.rendu && newAssignment.note < 5 && randomRemarques) {
        newAssignment.remarque = "Rendu hors sujet ";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu < new Date()) {
        newAssignment.remarque = "La date de rendu est dépassée";
      }
      else if (!newAssignment.rendu && randomRemarques && newAssignment.dateDeRendu > new Date()) {
        newAssignment.remarque = "Utilisez le cours et les exemples";
      }
    }
    
   
    return newAssignment;
  }
  

 
}
