function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
  let totalCash = 0;
  let lastSafeHaven = 0;
  let lifelinesUsed = new Set();
  
  for (let i = 0; i < playerActions.length; i++) {
    let action = playerActions[i];
    
    if (action === "W") {
      break;
    }

    let lifelineMatch = action.match(/^[123]+/);
    if (lifelineMatch) {
      for (let char of lifelineMatch[0]) {
        lifelinesUsed.add(char);
      }
      action = action.slice(lifelineMatch[0].length);
    }

    if (action === "X") {
      totalCash = lastSafeHaven;
      break;
    }
    
    if (action === correctAnswers[i]) {
      totalCash += prizeFund[i];
      
      let questionNumber = i + 1;
      if (questionNumber % 5 === 0) {
        lastSafeHaven = totalCash;
      }
    } else {
      totalCash = 0;
      break;
    }
  }
  
  return [totalCash, lifelinesUsed.size];
}




const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Solution test', () => {
  
  function act(prizeFund, correctAnswers, playerActions, expected) {
    const userSolution = getTotalCashPrize(prizeFund.slice(), correctAnswers.slice(), playerActions.slice());
    assert.deepEqual(userSolution, expected, `Given a prize fund [${prizeFund}], correct answers [${correctAnswers}] and player actions [${playerActions}], the returned value is not correct`);
  } 
  
  const originalPrizeFund = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]; 
  const exampleCorrectAnswers = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "B"];
  
  describe('Example tests', () => {
  
    describe('Player is addicted to risk', () => {
      
      it('Player fails at 1st question and goes home in shame', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["B"];
        const expected = [0, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player fails at 1st question even after using up all life lines', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["231B"];
        const expected = [0, 3];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player fails at 2nd question but is happy nonetheless with the 5 minutes of fame', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "A"];
        const expected = [0, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player fails at 5th question and runs away in utter disbelief', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "A"];
        const expected = [0, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player fails at 6th question realising walking away might have been the better option', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "A"];
        const expected = [0, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player fails at LAST question and feels like crying on national TV', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "A"];
        const expected = [0, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
    });
    
    describe('Player takes calculated risk', () => {

      it('Player stops after the host asks the 7nd question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "X"];
        const expected = [2100, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player stops after the host asks the 8th question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "A", "X"];
        const expected = [2100, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player stops after the host asks the 13th question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "X"];
        const expected = [64100, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
    });
    
    describe('Player takes low risk', () => {

      it('Player walks away before the host asks the 2nd question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["12A", "W"];
        const expected = [100, 2];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player walks away before the host asks the 3th question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["1A", "23B", "W"];
        const expected = [300, 3];
        act(prizeFund, correctAnswers, playerActions, expected);
      });

      it('Player walks away before the host asks the 5th question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "1D", "W"];
        const expected = [1100, 1];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player walks away before the host asks the 7th question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "3D", "2B", "C", "W"];
        const expected = [4100, 2];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
    });
    
    describe('Player rocks the house!', () => {
      
      it('Player plays a perfect game!', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "B"];
        const expected = [2003100, 0];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player wins and calls his mom using a life line right before answering the last question (this acutally happened)', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "2B"];
        const expected = [2003100, 1];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
      
      it('Player wins after having used up all life lines at the 1st question', () => {
        const prizeFund = originalPrizeFund;
        const correctAnswers = exampleCorrectAnswers;
        const playerActions = ["132A", "B", "B", "D", "B", "C", "A", "A", "B", "D", "D", "D", "B", "C", "B"];
        const expected = [2003100, 3];
        act(prizeFund, correctAnswers, playerActions, expected);
      });
    });
  });
});