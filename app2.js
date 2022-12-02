let generateExcuse = function() {
    let pronum = ["A", "The"];
    let suibject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework", "toe", "car", "shoe"];
    let where = ["on the street", "in my house", "in my driveway"];
  
    let proindx = Math.floor(Math.random() * pronum.length);
    let suibindx = Math.floor(Math.random() * suibject.length);
    let actionindx = Math.floor(Math.random() * action.length);
    let possetionindx = Math.floor(Math.random() * possetion.length);
    let whereindx = Math.floor(Math.random() * where.length);
  
    return (
      pronum[proindx] +
      " " +
      suibject[suibindx] +
      " " +
      action[actionindx] +
      " " +
      possetion[possetionindx] +
      " " +
      where[whereindx]
    );
  };

  let arr = [4,5,734,43,45];

arr.push(Math.floor(Math.random() * 100));
arr.push(Math.floor(Math.random() * 100));
