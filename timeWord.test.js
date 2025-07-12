const { describe } = require('node:test');
const timeWord = require('./timeWord');



describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('it returns midnight', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });

  test('it returns twelve twelve am',() => {
    expect(timeWord('12:12')).toEqual('twelve twelve pm');
  });

  test("it returns one o' clock am", () => {
    expect(timeWord('01:00')).toEqual("one o' clock am");
    });



  test('it returns six oh one am', () => {
    expect(timeWord('06:01')).toEqual('six oh one am');
  });



  test('it returns six ten am', () => {
    expect(timeWord('06:10')).toEqual('six ten am');
  });



  test('it returns six eighteen am', () => {
    expect(timeWord('06:18')).toEqual('six eighteen am');
  });



  test('it returns six thirty am', () => {
    expect(timeWord('06:30')).toEqual('six thirty am');
  });



  test('it returns ten thirty four am', () => {
    expect(timeWord('10:34')).toEqual('ten thirty four am');
  });



  test('it returns noon', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });



  test('it returns twelve oh nine pm', () => {
    expect(timeWord('12:09')).toEqual('twelve oh nine pm');
  });



  test('it returns eleven twenty three pm', () => {
    expect(timeWord('23:23')).toEqual('eleven twenty three pm');
  });

});






  



// Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o’clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm