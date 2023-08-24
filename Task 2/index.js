
<script type="text/javascript">
    function cap(){
 alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
    ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
    var a = alpha[Math.floor(Math.random()*71)];
    var b = alpha[Math.floor(Math.random()*71)];
    var c = alpha[Math.floor(Math.random()*71)];
    var d = alpha[Math.floor(Math.random()*71)];
    var e = alpha[Math.floor(Math.random()*71)];
    var f = alpha[Math.floor(Math.random()*71)];

    var final = a+b+c+d+e+f;
    document.getElementById("capt").value=final;
         }
    function validcap(){
           stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    if(stg1==stg2){
        alert("Form is validated Succesfully");
    return true;
          }else{
        alert("Please enter a valid captcha");
    return false;
          }
         }


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</script>
