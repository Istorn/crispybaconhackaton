  function createTrees(){
    let tree=document.querySelector(".tree");
    let forest=document.querySelector("#forest");
    let num_trees=49;
    let rotation= tree.object3D.rotation.y + 20;
    let dist=7;
    let sign=1;
    for(let i=0; i<num_trees; i++){
      let newTree = tree.cloneNode(true);
      let position=RADIUS+sign*dist;
      newTree.setAttribute("rotation","0 "+ rotation+" 0");
      newTree.children[0].setAttribute("position", position +" 0 0");
      forest.appendChild(newTree);
      rotation=rotation+20;
      sign=sign*-1;
    }
   }
