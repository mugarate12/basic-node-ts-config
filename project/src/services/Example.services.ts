export default class ExampleService {
  public formatExampleMessage (name?: string) {
    name = !!name && name !== 'undefined' ? name : '';
    return name ? `Bem vindo, ${name}! API está funcionando!` : 'API está funcionando!';
  }
}