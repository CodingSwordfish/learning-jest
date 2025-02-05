const  calculateAreaOfRectangle = require('./myFunction'); 

describe('Area of rectangle', () => {
   test('Valid width and height (positive numbers)', () => { 
    expect(calculateAreaOfRectangle(4,4)).toBe(16)
   });
  test('Width or height equal to zero', () => { 
    expect(() => calculateAreaOfRectangle(0, 3)).toThrow('Width and height must be positive numbers.');
    expect(() => calculateAreaOfRectangle(5, 0)).toThrow('Width and height must be positive numbers.');
  });

  

  test('throws error for negative width or height', () => {
    expect(() => calculateAreaOfRectangle(-2, 3)).toThrow('Width and height must be positive numbers.');
    expect(() => calculateAreaOfRectangle(5, -1)).toThrow('Width and height must be positive numbers.');
  });
});