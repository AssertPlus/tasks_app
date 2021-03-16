describe('Testar funcionalidades do app tasks', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Deve visualizar a home do app', async () => {
    await expect(element(by.text('TDC Tasks'))).toBeVisible();
  });

  it('Navegar para a lista de tarefas', async () => {
    await element(by.id('buttonAddtask')).tap();

    await expect(element(by.text('Lista de tarefas'))).toBeVisible();
  });

  it('Adicionar tarefa na lista de tarefas', async () => {
    await element(by.id('inputTask')).typeText('teste detox');

    await element(by.id('buttonAddtask')).tap();

    await expect(element(by.id('task_teste detox'))).toHaveText('teste detox');
  });

  it('Deletar tarefa adicionada', async () => {
    const textTask = 'teste detox';

    await element(by.id('inputTask')).typeText(textTask);

    await element(by.id('buttonAddtask')).tap();

    await element(by.id('delete_teste detox')).tap();

    await expect(element(by.text(`Tarefa ${textTask} excluida com sucesso`))).toBeVisible();
  });
});
