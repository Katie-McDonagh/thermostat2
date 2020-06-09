describe("thermostat",function(){
  it ("thermostat should start at 20 degrees", function(){
    var thermostat = new Thermostat();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it ("should increase temperature with an up function", function(){
    var thermostat = new Thermostat();
    thermostat.up(1);
    expect(thermostat.currentTemp()).toEqual(21);
  });
});
