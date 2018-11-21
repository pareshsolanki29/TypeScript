// class Generator{

//   create(name){
//   username: string;
//   var temp = [];
//   var a=1;
  

//    for(var i = 0; i <= results.length-1;i++){
//      if(results[i].includes(name) ){
//        var re =(results[i].split(/(\d+)/).filter(Boolean));
//         temp.push(re[1]);
//       }
//     }    

//    temp.sort(function(a, b){return a - b});

//    for(var k = 0; k <= temp.length-1; k++){
//         if(a == temp[k]){
//           a++;
//           }
//       else{
//             break;
//            }
//       }
//           name=name+a;
//           constructor (name: string){this.name = username;}
         


//   }
//    delete(name){
//     for(var i in results){
//       if(name == i){
//         results.splice(i, 1);
//       }
//     }
//   }
//     }
    
class Generator{
    name: string;
    id: number;
    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
    create(name, id){
        
        return name = name+id;
    }
    delete(name){

    }
}
  


function usernameGenerator(queries: string[]): string[] {
  const generator = new Generator();
  const results = [];
  queries.forEach((query) => {
    const [action, name] = query.split(' ');
    if (action === 'create') {
      results.push(generator.create(name));
    } else if (action === 'delete') {
      generator.delete(name);
    }
  });
  return results;
}

