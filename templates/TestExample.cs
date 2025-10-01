using Xunit;
using MyApp;

public class CalculatorTests {
  [Fact]
  public void Soma_DeveRetornarValorCorreto() {
    var calc = new Calculator();
    Assert.Equal(5, calc.Soma(2,3));
  }
}