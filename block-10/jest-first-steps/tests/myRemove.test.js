const remove = require('../src/myRemove');
const { myRemove } = remove;

describe('A função recebe um array e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifique se a chamada retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);

    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('Verifique se a chamada "([1, 2, 3, 4], 5)" retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});