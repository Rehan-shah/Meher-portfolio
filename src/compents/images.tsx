
import React, { useState, useEffect } from 'react';

function Imgs() {
  const [imgs, setList] = useState(['1.jpg', "2.jpg", "3.jpg", "4.jpg"]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setList(prevList => {
        const firstItem = prevList.shift();
        return [...prevList, firstItem];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto">
      {
        imgs.map((imgsrc, i) => {
          let w = 375 + i * 30
          //         if(i = 0){
          // animation = 
          //         }
          return <img style={{ width: w + "px", left: i * 20 + 50, bottom: i * -20 + 130 }} className={`-z-${i * 10} absolute border border-[#CCCCCC] flex justify-center`} src={imgsrc} />

        })
      }
    </div>
  )
}


export default Imgs

