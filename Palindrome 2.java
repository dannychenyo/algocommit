class Solution {
  public boolean validPalindrome(String a) {
      int deletefront = 0;
      int deleteback =0;
      for(int i =0; i < a.length()/2;i++){
          
          if(a.charAt(i+deletefront) != a.charAt(a.length()-i-1-deleteback)){
              if(a.charAt(i+1) == a.charAt(a.length()-i-1)){
                  if(a.charAt(i) != a.charAt(a.length()-i-2)){
                     if(deletefront == 0 && deleteback == 0){
                        deletefront++;
                     }
                      else {
                          return false;
                      }
                  }
              }
              else if(a.charAt(i) == a.charAt(a.length()-i-2)){
                  if(deleteback ==0 && deletefront ==0){
                       deleteback++;
                  }
                  else{
                      return false;
                  }
              }else{
                  return false;
              }  
          }
      }
      return true;
  }
}

