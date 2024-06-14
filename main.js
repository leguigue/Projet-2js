
const prompt = require("prompt-sync")()
let tab = [
    {
        question: "Si patrick a 3 bananes, 2 bananes verte et une banane jaune. Combien aura-t-il manger de banane a la fin de la journée?",
        reponses: ["A) il aura manger 1 banane?", "B) il aura manger deux banane?", "C) il aura manger les trois banane?", "D) il aura manger les deux banane verte et ne toucheras pas a la jaune parce qu'il n'aime pas ça?"],
        goodAnswer: "D",
        
    },
    {
        question: "Que fait-on lorsque que l'on a un poussin de trop dans un poulailler",
        reponses: ["A) On le vend a KFC pour faire des nuggets?", "B) On le place dans un deuxieme poulailler?", "C) On le pousse a l'indepence?", "D) On en pousse un."],
        goodAnswer: "D",
    },
    {
        question: "Combien de doigts possede un manchot?",
        reponses: ["A) 5, vu qu'il n'a qu'une main", "B) 20 parce qu'il lui manque un bras mais il en a 3 en rab ", "C) C'est un oiseau il n'a pas de main", "D) La réponse D"],
        goodAnswer: "C",
    },
    {
        question: "Que dit-on lorsqu'un train arrive en retard",
        reponses: ["A) Oh lala encore?", "B) Oh c'est pas grave ça arrive si rarement", "C) Putain qu'est-ce qu'il branle ce con de train je vais rater ma correspondances c'est la 3eme fois cette semaine", "D) Il est lent ce train"],
        goodAnswer: "C",
    },
    {
        question: "Qu'est ce qui est cours et qui se jette?",
        reponses: ["A) Un nain qui fait du saut a l'élastique", "B) Une courgette", "C) un parachutiste d'un metre cinquantes", "D) bonne question, tu me poses une colle.",],
        goodAnswer: "B",
    },
]
let count = 0
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question);
    for (let j = 0; j < tab[i].reponses.length; j++) {
        console.log(tab[i].reponses[j])
    }

let reponse = prompt("Répondez avec (A, B, C ou D): ").toUpperCase();
while (reponse !== "A" && reponse !== "B" && reponse !== "C" && reponse !== "D") {
    reponse = prompt("Réponse inadmissible. Veuillez répondre avec A, B, C, ou D: ").toUpperCase();
}
    if (reponse === tab[i].goodAnswer) {
        console.log("Bonne réponse!");
        count++;
    } else {
        console.log("Mauvaise réponse.");
    }
}
console.log(`\n Vous avez eu  ${count} sur ${tab.length}`);