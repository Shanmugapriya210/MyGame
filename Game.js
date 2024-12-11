 var guess =document.getElementById("guessNumber")
          
      
            var result=document.getElementById("result")
           

            var random=Math.floor(Math.random()*10)+1
           

            const check = () => {
                var entered = Number(guess.value);
                const final= entered === random? (result.textContent= "Right", alert(`Congrats! You won. The correct number is ${random}.`) )
                : (result.textContent= "Wrong" ,alert(`Sorry! You lose..`));
               
            };
