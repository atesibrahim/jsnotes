#! /usr/bin/env node
const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : 'enter command > '
});

readline.prompt();
readline.on('line', line=>{
    switch (line.trim()){
    case 'log': 
        {           

            readline.question('What would you like to eat today?', item=>{
                const {data} = await axios.get(`http://localhost:3001/food`)
                const it = data[Symbol.iterator](); // used iterator
                let position = it.next();

                while(!position.done){
                    const food = position.value.name;
                    if(food=== item){
                        console.log(food);
                    }
                    position = it.next();
                }


                readline.prompt();
            });
        }
    }
})