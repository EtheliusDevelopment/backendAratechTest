

function returnShootingPoint ( req, res) {
    console.log(req.body)
    //  Var Definitions
    const protocolArray = req.body.protocols;
    const scanArray = req.body.scan;
    let subArray =  [];
    
    // Conditions Definition

    // Combinations with 3 Conditions ( 8 )
   if (protocolArray.includes('closest-enemies') && protocolArray.includes('assist-allies') && protocolArray.includes("prioritize-mech" )) {
    scanArray.forEach( v => {
        subArray.push(v)
    });
    // Filter the specific conditions
    let arrayClosestEnemiesAssistAlliesPrioritizeMech = subArray
    .filter(k =>  k.enemies.number > 0)
    .filter(k =>  k.allies > 0)
    .filter(k => k.enemies.type == "mech")
    .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAssistAlliesPrioritizeMech.length>0) {
        // Find the closest point
        const targetArrayClosestEnemiesAssistAlliesPrioritizeMech = (arrayClosestEnemiesAssistAlliesPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesAssistAlliesPrioritizeMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"});
        };

    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('assist-allies') && protocolArray.includes("avoid-mech")){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAssistAlliesAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k =>  k.allies > 0)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAssistAlliesAvoidMech.length>0){
         
            // Find the closest point
         const targetArrayClosestEnemiesAssistAlliesAvoidMech = (arrayClosestEnemiesAssistAlliesAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
         res.status(200).json(targetArrayClosestEnemiesAssistAlliesAvoidMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };

    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('avoid-crossfire') && protocolArray.includes("prioritize-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAvoidCrossfirePrioritizeMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAvoidCrossfirePrioritizeMech.length>0){

        // Find the closest point
        const targetArrayClosestEnemiesAvoidCrossfirePrioritizeMech = (arrayClosestEnemiesAvoidCrossfirePrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesAvoidCrossfirePrioritizeMech.coordinates);
        
        } else{
        res.status(404).json({message : "There are no valid targets"});
        };

    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('avoid-crossfire') && protocolArray.includes("avoid-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAvoidCrossfireAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAvoidCrossfireAvoidMech.length>0){
       
         // Find the closest point
        const targetArrayClosestEnemiesAvoidCrossfireAvoidMech = (arrayClosestEnemiesAvoidCrossfireAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesAvoidCrossfireAvoidMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
          


    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('assist-allies') && protocolArray.includes("prioritize-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAssistAlliesPrioritizeMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k =>  k.allies > 0)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAssistAlliesPrioritizeMech.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemiesAssistAlliesPrioritizeMech = (arrayFurthestEnemiesAssistAlliesPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAssistAlliesPrioritizeMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"}) 
        }

    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('assist-allies') && protocolArray.includes("avoid-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAssistAlliesAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k =>  k.allies > 0)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAssistAlliesAvoidMech.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemiesAssistAlliesAvoidMech = (arrayFurthestEnemiesAssistAlliesAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAssistAlliesAvoidMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"})
        }
    

    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('avoid-crossfire') && protocolArray.includes("prioritize-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAvoidCrossfirePrioritizeMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAvoidCrossfirePrioritizeMech.length>0 ) {

        // Find the farthest point
         const targetArrayFurthestEnemiesAvoidCrossfirePrioritizeMech = (arrayFurthestEnemiesAvoidCrossfirePrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAvoidCrossfirePrioritizeMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"})
        }


    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('avoid-crossfire') && protocolArray.includes("avoid-mech" )){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAvoidCrossfireAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAvoidCrossfireAvoidMech.length>0 ) {

       
        // Find the farthest point
        const targetArrayFurthestEnemiesAvoidCrossfireAvoidMech = (arrayFurthestEnemiesAvoidCrossfireAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAvoidCrossfireAvoidMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"})
        }

        // Combinations with 2 Conditions (12) 
    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('assist-allies')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAssistAllies = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k =>  k.allies > 0)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
          
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAssistAllies.length>0){

        // Find the closest point
        const targetArrayClosestEnemiesAssistAllies = (arrayClosestEnemiesAssistAllies.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesAssistAllies.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
    


    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('avoid-crossfire')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAvoidCrossfire = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAvoidCrossfire.length>0){

        
        // Find the closest point
        const targetArrayClosestEnemiesAvoidCrossfire = (arrayClosestEnemiesAvoidCrossfire.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesAvoidCrossfire.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };


    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('prioritize-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesPrioritizeMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesPrioritizeMech.length>0){
        
        // Find the closest point
        const targetArrayClosestEnemiesPrioritizeMech = (arrayClosestEnemiesPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemiesPrioritizeMech.coordinates);
        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
    


    } else if (protocolArray.includes('closest-enemies') && protocolArray.includes('avoid-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemiesAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemiesAvoidMech.length>0){
      
        // Find the closest point
            const targetArrayClosestEnemiesAvoidMech = (arrayClosestEnemiesAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
            res.status(200).json(targetArrayClosestEnemiesAvoidMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };



    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('assist-allies')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAssistAllies = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k =>  k.allies > 0)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAssistAllies.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemiesAssistAllies = (arrayFurthestEnemiesAssistAllies.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAssistAllies.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"})
        }

    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('avoid-crossfire')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        
        let arrayFurthestEnemiesAvoidCrossfire = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => ! k.allies)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAvoidCrossfire.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemiesAvoidCrossfire = (arrayFurthestEnemiesAvoidCrossfire.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAvoidCrossfire.coordinates);


        } else {
        res.status(404).json({message : "There are no valid targets"})
        }


    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('prioritize-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesPrioritizeMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
            
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesPrioritizeMech.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemiesPrioritizeMech = (arrayFurthestEnemiesPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesPrioritizeMech.coordinates);

        } else {
        res.status(404).json({message : "There are no valid targets"})
        }
            


    } else if (protocolArray.includes('furthest-enemies') && protocolArray.includes('avoid-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayFurthestEnemiesAvoidMech = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemiesAvoidMech.length>0 ) {

        
        // Find the farthest point
        const targetArrayFurthestEnemiesAvoidMech = (arrayFurthestEnemiesAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemiesAvoidMech.coordinates);
        } else {
        res.status(404).json({message : "There are no valid targets"})
        }


    } else if (protocolArray.includes('assist-allies') && protocolArray.includes('prioritize-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayAssistAlliesPrioritizeMech = subArray
        .filter(k =>  k.allies > 0)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAssistAlliesPrioritizeMech.length>0){
        // Find the closest point
        const targetArrayAssistAlliesPrioritizeMech = (arrayAssistAlliesPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayAssistAlliesPrioritizeMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };


    } else if (protocolArray.includes('assist-allies') && protocolArray.includes('avoid-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayAssistAlliesAvoidMech = subArray
        .filter(k =>  k.allies > 0)
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAssistAlliesAvoidMech.length>0){
         // Find the closest point
         const targetArrayAssistAlliesAvoidMech = (arrayAssistAlliesAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
         res.status(200).json(targetArrayAssistAlliesAvoidMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };


    } else if (protocolArray.includes('avoid-crossfire') && protocolArray.includes('prioritize-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayAvoidCrossfirePrioritizeMech = subArray
        .filter(k => ! k.allies)
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

           // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAvoidCrossfirePrioritizeMech.length>0){

        // Find the closest point
        const targetArrayAvoidCrossfirePrioritizeMech = (arrayAvoidCrossfirePrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayAvoidCrossfirePrioritizeMech.coordinates);


        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
            
    } else if (protocolArray.includes('avoid-crossfire') && protocolArray.includes('avoid-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        
        let arrayAvoidCrossfireAvoidMech = subArray
        .filter(k => ! k.allies)
        .filter(k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)
        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAvoidCrossfireAvoidMech.length>0){
            // Find the closest point
        const targetArrayAvoidCrossfireAvoidMech = (arrayAvoidCrossfireAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayAvoidCrossfireAvoidMech.coordinates);

        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
          // Combinations with 1 Condition ( 6 )
          
    } else if (protocolArray.includes('closest-enemies')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
        let arrayClosestEnemies = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayClosestEnemies.length>0){
        // Find the closest point
        const targetArrayClosestEnemies = (arrayClosestEnemies.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayClosestEnemies.coordinates);
        } else{
        res.status(404).json({message : "There are no valid targets"});
        };


        
    } else if (protocolArray.includes('furthest-enemies')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
         
        let arrayFurthestEnemies = subArray
        .filter(k =>  k.enemies.number > 0)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        //Check that the array is not empty, in this case I return the coordinates of the farthest point, otherwise there are no targets to destroy
        if (arrayFurthestEnemies.length>0 ) {

        // Find the farthest point
        const targetArrayFurthestEnemies = (arrayFurthestEnemies.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) > (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayFurthestEnemies.coordinates);
        } else {
        res.status(404).json({message : "There are no valid targets"})
        }

     
       
    } else if (protocolArray.includes('assist-allies')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
           
        let arrayAssistAllies = subArray
        .filter(k =>  k.allies > 0)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAssistAllies.length>0){
        const targetArrayAssistAllies = (arrayAssistAllies.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayAssistAllies.coordinates);
        } else{
        res.status(404).json({message : "There are no valid targets"});
        };
        
           



        
    } else if (protocolArray.includes('avoid-crossfire')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
          
        let arrayAvoidCrossfire = subArray
        .filter(k => ! k.allies)
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if(arrayAvoidCrossfire.length>0){

        const targetArrayAvoidCrossfire = (arrayAvoidCrossfire.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayAvoidCrossfire.coordinates);

        }  else{
        res.status(404).json({message : "There are no valid targets"});
        };


          
    } else if (protocolArray.includes('prioritize-mech')){
        scanArray.forEach( v => {
            subArray.push(v)
        });
       
        let arrayPrioritizeMech = subArray
        .filter(k => k.enemies.type == "mech")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if (arrayPrioritizeMech.length>0 ) {

        const targetArrayPrioritizeMech = (arrayPrioritizeMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetArrayPrioritizeMech.coordinates);

        }  else {
        res.status(404).json({message : "There are no valid targets"});
        }


     
        } else if (protocolArray.includes('avoid-mech')) {
        scanArray.forEach( v => {
        subArray.push(v)
        });
       
        let arrayAvoidMech = subArray
        .filter( k => k.enemies.type == "soldier")
        .filter(m => Math.sqrt((Math.pow(0-m.coordinates.x,2))+(Math.pow(0-m.coordinates.y,2))) < 100)

        // Check that the array is not empty, in this case I return the coordinates of the closest point, otherwise there are no targets to destroy
        if (arrayAvoidMech.length>0 ) {

        const targetarrayAvoidMech = (arrayAvoidMech.reduce((prev, current) => (Math.sqrt((Math.pow(0-prev.coordinates.x,2))+(Math.pow(0-prev.coordinates.y,2))) < (Math.sqrt((Math.pow(0-current.coordinates.x,2))+(Math.pow(0-current.coordinates.y,2)))) ? prev : current)));
        res.status(200).json(targetarrayAvoidMech.coordinates);

        }  else {
        res.status(404).json({message : "There are no valid targets"});
        }

        } else {
        res.status(500).json({message : "Bad Request"})
        }
}






module.exports = {
    returnShootingPoint 
}