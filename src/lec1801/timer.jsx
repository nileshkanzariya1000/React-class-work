import * as React from "react";

function Timer(){
    const [timeLeft, setTimeLeft] = React.useState(5 * 60);
    React.useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer); 
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
  

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
  
    return (
      <div>
        <div>{minutes}:{seconds}</div>
      </div>
    );    
    }

    export default Timer;