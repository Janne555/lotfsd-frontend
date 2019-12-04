import { selectEffects, selectBaseArmorClass } from "../selectors";
import { initialState } from "../../testData/initialState";

describe('selectEffects', () => {
  it('should generate effects', () => {
    expect(selectEffects(initialState)).toEqual([
      {
        method: 'override',
        target: 'base',
        type: 'armorClassEffect',
        value: 16
      }
    ])
  });
});

describe('selectBaseArmorClass', () => {
  it('should calculate armor class', () => {
    expect(selectBaseArmorClass(initialState)).toEqual(18)
  });
});