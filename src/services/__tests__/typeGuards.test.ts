import * as typeGuards from "../typeGuards";

const { hasKey, ...guards } = typeGuards


describe.each(Object.keys(guards) as (keyof typeof guards)[])(
  '%s',
  (input) => {
    it('should return false for null', () => {
      expect(typeGuards[input](null)).toBe(false)
    });
  }
);

describe('isArmorClassEffect', () => {
  const mocks: ArmorClassEffect[] = [
    {
      method: "modify",
      target: "base",
      type: "armorClassEffect",
      value: 0
    },
    {
      method: "modify",
      target: "ranged",
      type: "armorClassEffect",
      value: 0
    },
    {
      method: "modify",
      target: "surprised",
      type: "armorClassEffect",
      value: 0
    },
    {
      method: "modify",
      target: "withoutShield",
      type: "armorClassEffect",
      value: 0
    },
    {
      method: "override",
      target: "withoutShield",
      type: "armorClassEffect",
      value: 0
    }
  ]

  it.each(mocks.map((mock, i) => [i, mock]))
    ('%d should be true',
      (num, input) => {
        expect(guards.isArmorClassEffect(input)).toBe(true)
      }
    );

  it.each(["method", "target", "type", "value"])
    ('if %s is null should return false',
      (input) => {
        expect(guards.isArmorClassEffect({
          method: "override",
          target: "withoutShield",
          type: "armorClassEffect",
          value: 0,
          [input]: null
        })).toBe(false)
      }
    );
});

describe('isCommonActivityEffect', () => {
  it('should return true for a common activity effect', () => {
    expect(guards.isCommonActivityEffect({
      target: "architecture",
      type: "commonActivityEffect",
      value: 0
    })).toBe(true)
  });

  it.each([
    "target", "type", "value"
  ])(
    'if %s is null should return false',
    (input) => {
      expect(guards.isCommonActivityEffect({
        target: "architecture",
        type: "commonActivityEffect",
        value: 0,
        [input]: null
      })).toBe(false);
    }
  );
});