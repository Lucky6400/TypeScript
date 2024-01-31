// facade.test.ts
import { OpeningBatsman, OpeningBowler, AllRounder } from './Facade';

describe('AllRounder', () => {
    it('should call playShot and bowl methods', () => {
        // Arrange
        const mockPlayShot = jest.fn();
        const mockBowl = jest.fn();

        const batsman = new OpeningBatsman();
        batsman.playShot = mockPlayShot;

        const bowler = new OpeningBowler();
        bowler.bowl = mockBowl;

        const allRounder = new AllRounder(batsman, bowler);

        // Act
        allRounder.play();

        // Assert
        expect(mockPlayShot).toHaveBeenCalled();
        expect(mockBowl).toHaveBeenCalled();
    });
});
