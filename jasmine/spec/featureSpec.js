'use strict';

describe('Feature Test:', function(){
  var menu;

  beforeEach(function(){
    menu = new Menu();
    dishes = "Pizza £7.99, Pasta £10.99";
  });

  it('returns a list of dishes with prices', function(){
    expect(menu.all()).toContain(dishes);
  });
});
