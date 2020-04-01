/* eslint-disable func-names */
const tasks = [
  {
    name: 'task 1',
    description: '1',
  },
  {
    name: 'task 2',
    description: '2',
  },
  {
    name: 'task 3',
    description: '3',
  },
  {
    name: 'task 4',
    description: '4',
  },
  {
    name: 'task 5',
    description: '5',
  },
  {
    name: 'task 6',
    description: '6',
    descriptionChanged: ' changed',
  },
  {
    name: 'task 7',
    description: '7',
  },
];

describe('To-Do App', function() {
  it('should add a task', function() {
    cy.visit('http://localhost:3000');

    // Task 1
    cy.get('#taskName')
      .type(tasks[0].name)
      .should('have.value', tasks[0].name);
    cy.get('#taskDescription')
      .type(tasks[0].description)
      .should('have.value', tasks[0].description);

    cy.contains('Save').click();

    cy.contains(tasks[0].name).should('be.visible');
  });
  it('should delete a task', function() {
    cy.visit('http://localhost:3000');

    // Task 1
    cy.get('#taskName')
      .type(tasks[0].name)
      .should('have.value', tasks[0].name);
    cy.get('#taskDescription')
      .type(tasks[0].description)
      .should('have.value', tasks[0].description);

    cy.contains('Save').click();

    cy.contains(tasks[0].name).should('be.visible');
    cy.contains('Delete').click();
    cy.contains(tasks[0].name).should('not.exist');
  });
  it('should edit a task', function() {
    cy.visit('http://localhost:3000');

    // Task 1
    cy.get('#taskName')
      .type(tasks[0].name)
      .should('have.value', tasks[0].name);
    cy.get('#taskDescription')
      .type(tasks[0].description)
      .should('have.value', tasks[0].description);

    cy.contains('Save').click();

    cy.contains(tasks[0].name).should('be.visible');

    cy.contains('Edit').click();
    cy.get('#taskDescription')
      .type(' edit description')
      .should('have.value', `${tasks[0].description} edit description`);
    cy.get('#taskName')
      .type(' edit name')
      .should('have.value', `${tasks[0].name} edit name`);
    cy.contains('Save').click();
    cy.contains(`${tasks[0].description} edit description`).should(
      'be.visible'
    );
    cy.contains(`${tasks[0].name} edit name`).should('be.visible');
  });
  it('should replay tasks', function() {
    cy.visit('http://localhost:3000');

    // Task 1
    cy.get('#taskName')
      .type(tasks[0].name)
      .should('have.value', tasks[0].name);
    cy.get('#taskDescription')
      .type(tasks[0].description)
      .should('have.value', tasks[0].description);

    cy.contains('Save').click();

    cy.contains(tasks[0].name).should('be.visible');

    // Task 2
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[1].name)
      .should('have.value', tasks[1].name);
    cy.get('#taskDescription')
      .type(tasks[1].description)
      .should('have.value', tasks[1].description);

    cy.contains('Save').click();

    cy.contains(tasks[1].name).should('be.visible');

    // Start recording
    cy.contains('Record').click();
    cy.contains('Stop').should('be.visible');

    // Task 3
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[2].name)
      .should('have.value', tasks[2].name);
    cy.get('#taskDescription')
      .type(tasks[2].description)
      .should('have.value', tasks[2].description);

    cy.contains('Save').click();

    cy.contains(tasks[2].name).should('be.visible');

    // Task 4
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[3].name)
      .should('have.value', tasks[3].name);
    cy.get('#taskDescription')
      .type(tasks[3].description)
      .should('have.value', tasks[3].description);

    cy.contains('Save').click();

    cy.contains(tasks[3].name).should('be.visible');

    // Stop recording
    cy.contains('Stop').click();
    cy.contains('Record').should('be.visible');

    // Start playing
    cy.contains('Play').click();
    cy.contains('Playing..').should('be.visible');
    cy.contains(tasks[0].name).should('be.visible');
    cy.contains(tasks[1].name).should('be.visible');
    cy.contains(tasks[2].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[3].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[2].name, { timeout: 200 }).should('be.visible');
    cy.wait(1000);
    cy.contains(tasks[3].name, { timeout: 200 }).should('be.visible');

    // Task 5
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[4].name)
      .should('have.value', tasks[4].name);
    cy.get('#taskDescription')
      .type(tasks[4].description)
      .should('have.value', tasks[4].description);

    cy.contains('Save').click();

    cy.contains(tasks[4].name).should('be.visible');

    // Task 6
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[5].name)
      .should('have.value', tasks[5].name);
    cy.get('#taskDescription')
      .type(tasks[5].description)
      .should('have.value', tasks[5].description);

    cy.contains('Save').click();

    cy.contains(tasks[5].name).should('be.visible');

    // Start recording
    cy.contains('Record').click();
    cy.contains('Stop').should('be.visible');

    // Task 7
    cy.contains('New').click();

    cy.get('#taskName')
      .type(tasks[6].name)
      .should('have.value', tasks[6].name);
    cy.get('#taskDescription')
      .type(tasks[6].description)
      .should('have.value', tasks[6].description);

    cy.contains('Save').click();

    cy.contains(tasks[6].name).should('be.visible');

    // Stop recording
    cy.contains('Stop').click();
    cy.contains('Record').should('be.visible');

    // Start playing
    cy.contains('Play').click();
    cy.contains('Playing..').should('be.visible');
    cy.contains(tasks[0].name).should('be.visible');
    cy.contains(tasks[1].name).should('be.visible');
    cy.contains(tasks[2].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[3].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[2].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[3].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[4].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[5].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[6].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[6].name, { timeout: 200 }).should('be.visible');

    // Reload
    cy.reload();
    cy.contains('Play').click();
    cy.contains('Playing..').should('be.visible');
    cy.contains(tasks[0].name).should('be.visible');
    cy.contains(tasks[1].name).should('be.visible');
    cy.contains(tasks[2].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[3].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[2].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[3].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[4].name, { timeout: 200 }).should('not.exist');
    cy.contains(tasks[5].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[4].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[5].name, { timeout: 200 }).should('be.visible');
    cy.contains(tasks[6].name, { timeout: 200 }).should('not.exist');
    cy.wait(1000);
    cy.contains(tasks[6].name, { timeout: 200 }).should('be.visible');

    // Clear record history
    cy.contains('Clear').click();
    cy.wait(1000);
    cy.contains(tasks[6].name, { timeout: 200 }).should('be.visible');

    // Reload
    cy.reload();
    cy.contains('Play').click();
    cy.contains('Playing..').should('not.exist');
    cy.contains(tasks[6].name, {
      timeout: 200,
    }).should('not.exist');
  });
});
