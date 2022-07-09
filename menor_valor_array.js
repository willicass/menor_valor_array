class SmallestIntegerFinder {
    findSmallestInt(args) {
      var low = 0
      for(var i = 0; i < args.length; i++){
        if(i == 0){
          low = args[i]
        }
        else if(args[i] < low){
          low = args[i]
        }
      };
    return low
    };
  };