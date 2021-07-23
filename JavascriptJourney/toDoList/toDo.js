console.log("Hello! You have brought me back once again. What shall we do this time?");
const toDoList = [];

let toDoAction = prompt("What do you wanna do?");             //CRITICAL FOR MAKING THE LOOP WORK. NEED TO INITIALIZE IT OUT OF THE LOOP...

while (toDoAction.toLowerCase() !== "quit") {


    if (toDoAction.toLowerCase() === "new") {         //  ADD ITEMS TO THE LIST
        let newAction = prompt("What do you want to add to the list?");     //  ASK THE USER FOR NEW ITEM
        toDoList.push(newAction);
        console.log(`Aight! Added ${newAction} to the list.`);
    }

    if (toDoAction.toLowerCase() === "list") {        //  SHOWING THE USER HIS LIST
        if (toDoList.length == 0) {
            console.log("Yo, this shit empty Mr.White.")
        } else {
            console.log('**********');
            for (let listItem of toDoList) {     //  ITERATING THE ARRAY
                console.log(`${toDoList.indexOf(listItem) + 1}: ${listItem}`);
            }
            console.log('**********');
        }
    }

    if (toDoAction.toLowerCase() === "delete") {      //DELETING ITEMS

        // console.log('**********');
        // for (let listItem of toDoList) {     //  ITERATING THE ARRAY FOR EASY ACCESS TO THE NUMBERING OF THE LIST
        //     console.log(`${toDoList.indexOf(listItem) + 1}: ${listItem}`);
        // }
        // console.log('**********');
        if (toDoList.length == 0) {
            console.log("Yo, this shit empty Mr.White.")
        } else {
            let targetDel = parseInt(prompt("Write the number of the item you want deleted"));
            if (!isNaN(targetDel)) {
                toDoList.splice(targetDel - 1, 1);      //MINUS 1 TO TARGET THE CORRECT INDEX. SINCE THE USER SEES THE INDEX OF THE LIST REALISTICALLY
            } else {
                console.log("Unknown index. Restarting...")
            }
        }
        // console.log('**********');
        // for (let listItem of toDoList) {     //  ITERATING THE ARRAY FOR EASY ACCESS TO THE NUMBERING OF THE LIST
        //     console.log(`${toDoList.indexOf(listItem) + 1}: ${listItem}`);
        // }
        // console.log('**********');
    }
    toDoAction = prompt("What do you wanna do?");       //...AND THEN GIVE IT VALUE INSIDE THE LOOP TO AVOID A SECOND WHILE LOOP
}

console.log("I guess you are done, then. You have no need for me. I shall cease to exist...");