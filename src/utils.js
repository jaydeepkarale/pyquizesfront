export const questionId = () => {

    const max = 2
    const min = 0
    // 👇️ get number between min (inclusive) and max (inclusive)    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };