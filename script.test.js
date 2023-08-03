/** @jest-environment jsdom */

const { validarCPF } = require("./script")


test('validar CPF', function() {
    var resultado = validarCPF('84493278064');
    expect(resultado).toBe(true);
  })

  test('validar CPF', function() {
    var resultado = validarCPF('22222222222');
    expect(resultado).toBe(false);
  })