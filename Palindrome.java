class Main {
  public static void main(String[] args) {
    System.out.print(palindrone("racecar"));
  }

  public static boolean palindrone(String a){
       
    for(int i =0; i < a.length()/2;i++){
      if(a.charAt(i) != a.charAt(a.length()-i-1)){
        return false;
      }
    }
    return true;
  }
}